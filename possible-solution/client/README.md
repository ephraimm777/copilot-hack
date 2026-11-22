# Flight Signal

Flight Signal is a SvelteKit frontend backed by the Flask API and trained model in `../server`. It estimates the historical probability of an arrival delay of 15 minutes or more from the selected weekday and arrival airport, using the FAA 2013 flight records.

## Public deployment on GitHub Pages

The public repository's `.github/workflows/deploy-flight-signal.yml` builds and publishes the static site to GitHub Pages whenever its website or model changes land on `main`. It regenerates the 490 airport/weekday estimates from the bundled model, runs the frontend checks and production build, and deploys the result. `actions/configure-pages` configures the repository for Actions-based Pages deployment.

After the workflow succeeds, the site is available at `https://ephraimm777.github.io/copilot-hack/`. A custom domain is optional; add one under **Repository Settings > Pages > Custom domain** and follow GitHub's DNS/TLS instructions. No hosting account, runtime secrets, or separately hosted API is required for this static site. The API remains available for local testing and future integrations.

The root `render.yaml` is an optional static-site alternative for a Render account. Both deployment options use the same checked-in forecast snapshot. Node and Python versions are pinned in `possible-solution/client/.node-version` and `possible-solution/server/.python-version`.

## Run locally

Use Python 3.11 (the bundled model was serialized with scikit-learn 1.2.2) and Node.js 22.

1. In a terminal, create and activate a Python environment, install the model/API dependencies, and generate the forecast snapshot:

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   pip install -r possible-solution\server\requirements.txt
   python possible-solution\server\export_forecasts.py
   ```

   On macOS or Linux, activate it with `source .venv/bin/activate`.

2. Install and start the frontend:

   ```powershell
   cd possible-solution\client
   npm install
   npm run dev
   ```

   Open the local URL printed by Vite (usually `http://localhost:5173`). The website uses the generated prediction snapshot and does not need a running API. Regenerate the snapshot whenever the model or airport list changes.

3. Optionally run the Flask API separately for API development:

   ```powershell
   python possible-solution\server\app.py
   ```

   It serves `/airports`, `/predict`, `/plans`, `/health`, and `/ready` on `http://127.0.0.1:5000`.

## Subscription readiness

`GET /plans` exposes the proposed USD plan catalog and feature identifiers. The server-side entitlement resolver grants paid features only for an active or trialing subscription snapshot from a trusted billing adapter; missing, inactive, or unknown subscriptions fall back to Explorer. The API reports `checkout_enabled: false`, and all plans remain non-purchasable. This is intentionally not an active subscription service: there is no customer account or authentication system, subscription storage, checkout, or payment-provider webhook yet. Do not collect money for the proposed features until those pieces and the features themselves are implemented.

Before accepting payments, create an account with a payment provider available in your country (for example, Stripe), complete its business/identity verification, and create recurring USD prices matching the proposed plans. Also choose an account/authentication system. The app still needs a server-side provider adapter, signed webhook handling, durable subscription storage, and enforcement of entitlements on paid API routes; only then should you configure that provider's webhook endpoint and enter its secrets in Render's environment-variable dashboard. Verify the full flow in provider test mode before enabling live charges. Publish terms, privacy/refund policies, tax handling, and support contact details first. No provider account, merchant ID, credential, or payment token is included here.

## Deployment environment

| Variable | Used by | Purpose |
| --- | --- | --- |
| `GITHUB_PAGES_BASE_PATH` | Frontend build | Set by the Pages workflow for the repository URL prefix; optional for local and Render builds. |
| `NODE_VERSION`, Python version file | Build services | Pin the build runtimes; no runtime environment variables are required. |

No runtime secrets are needed to publish or use the forecast website.

## Validate

Run the API tests from its directory:

```powershell
cd possible-solution\server
python -m unittest
```

Run the Svelte checks and production build from `possible-solution\client`:

```powershell
npm run check
npm run build
```

The Pages workflow validates the static build and publishes the `build` directory. The API liveness and readiness endpoints remain `/health` and `/ready`.

The estimate reflects historical patterns in the 2013 dataset; it is not a live flight status or a guarantee of an individual flight's outcome.
