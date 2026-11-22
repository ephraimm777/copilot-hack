<script lang="ts">
	import { base } from '$app/paths';
	import type { Airport, FlightPrediction } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;

	const airports: Airport[] = data.airports;
	let selectedDay = '1';
	let selectedAirport = String(airports[0]?.id ?? '');
	let prediction: FlightPrediction | undefined;
	let formError = '';
	let resultAirportId = '';
	let resultDayValue = '';
	const days = [
		{ name: 'Monday', value: '1' },
		{ name: 'Tuesday', value: '2' },
		{ name: 'Wednesday', value: '3' },
		{ name: 'Thursday', value: '4' },
		{ name: 'Friday', value: '5' },
		{ name: 'Saturday', value: '6' },
		{ name: 'Sunday', value: '7' }
	];
	const proposedPlans = [
		{
			name: 'Traveler Plus',
			price: '$2.99',
			audience: 'For your own trip planning',
			features: [
				'Save favorite airports and searches',
				'Compare weekday arrival patterns',
				'Share a concise trip summary'
			],
			featured: true
		},
		{
			name: 'Small Team',
			price: '$9.99',
			audience: 'For independent travel advisors',
			features: [
				'Shared airport comparison views',
				'Exportable historical summaries',
				'Early access to team features'
			],
			featured: false
		}
	];

	$: resultAirport = airports.find((airport) => String(airport.id) === resultAirportId);
	$: resultDay = days.find((day) => day.value === resultDayValue)?.name;

	function calculateForecast(event: SubmitEvent) {
		event.preventDefault();
		const result = data.forecasts[`${selectedDay}:${selectedAirport}`];
		if (!result) {
			prediction = undefined;
			formError = 'No historical estimate is available for that selection.';
			return;
		}

		formError = '';
		prediction = result;
		resultAirportId = selectedAirport;
		resultDayValue = selectedDay;
	}
</script>

<svelte:head>
	<title>Flight Signal — arrival delay forecast</title>
	<meta
		name="description"
		content="See the historical chance of an arrival delay of 15 minutes or more by weekday and airport."
	/>
</svelte:head>

<main>
	<div class="shell">
		<header class="topbar">
			<a class="brand" href={`${base}/`} aria-label="Flight Signal home">
				<span class="brand-mark" aria-hidden="true">
					<svg viewBox="0 0 32 32" fill="none">
						<path
							d="M5 18.5 26.4 7.7c1.2-.6 2.4.7 1.7 1.8L17.3 29l-3.1-8.1L5 18.5Z"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linejoin="round"
						/>
						<path d="m14.2 20.9 6.1-6.1" stroke="currentColor" stroke-width="1.8" />
					</svg>
				</span>
				<span>flight<span class="brand-light">signal</span></span>
			</a>
			<div class="top-actions">
				<div class="data-badge"><span></span> FAA DATASET · 2013</div>
				<a class="nav-link" href="#plans">Plans <span aria-hidden="true">↗</span></a>
			</div>
		</header>

		<section class="hero" aria-labelledby="page-title">
			<div class="hero-copy">
				<p class="eyebrow"><span class="eyebrow-line"></span> ARRIVAL DELAY FORECAST</p>
				<h1 id="page-title">A little more certainty<br />before you <em>take off.</em></h1>
				<p class="intro">
					Explore the historical chance of arriving 15 minutes or more behind schedule.
					Choose a weekday and destination to get your forecast.
				</p>
				<div class="hero-footnote">
					<span class="footnote-icon" aria-hidden="true">↗</span>
					<span>Built on real U.S. flight records, not a live operational forecast.</span>
				</div>
			</div>

			<div class="flight-art" aria-hidden="true">
				<div class="orbit orbit-one"></div>
				<div class="orbit orbit-two"></div>
				<div class="orbit orbit-three"></div>
				<div class="art-point point-one"></div>
				<div class="art-point point-two"></div>
				<div class="art-point point-three"></div>
				<div class="art-plane">
					<svg viewBox="0 0 48 48" fill="none">
						<path
							d="m7 25 32-15-14 30-5-12-13-3Z"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linejoin="round"
						/>
						<path d="m20 28 9-9" stroke="currentColor" stroke-width="1.6" />
					</svg>
				</div>
				<div class="art-caption"><span></span> YOUR NEXT ARRIVAL</div>
			</div>
		</section>

		<section class="forecast-card" aria-labelledby="forecast-title">
			<div class="card-heading">
				<div>
					<p class="eyebrow dark-eyebrow">PERSONALIZE YOUR ROUTE</p>
					<h2 id="forecast-title">Where are you headed?</h2>
				</div>
				<div class="step-number"><span>01</span> / 01</div>
			</div>

			<form onsubmit={calculateForecast}>
				<div class="fields">
					<label class="field">
						<span class="field-label"><span class="field-index">01</span> ARRIVAL AIRPORT</span>
						<span class="select-wrap">
							<select name="airport" bind:value={selectedAirport} required>
								{#each airports as airport (airport.id)}
									<option value={String(airport.id)}>{airport.name}</option>
								{/each}
							</select>
							<svg viewBox="0 0 16 16" aria-hidden="true">
								<path d="m3.5 6 4.5 4 4.5-4" />
							</svg>
						</span>
					</label>

					<label class="field">
						<span class="field-label"><span class="field-index">02</span> DAY OF THE WEEK</span>
						<span class="select-wrap">
							<select name="day" bind:value={selectedDay} required>
								{#each days as day (day.value)}
									<option value={day.value}>{day.name}</option>
								{/each}
							</select>
							<svg viewBox="0 0 16 16" aria-hidden="true">
								<path d="m3.5 6 4.5 4 4.5-4" />
							</svg>
						</span>
					</label>

					<button type="submit">
						<span>Calculate forecast</span>
						<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
							<path d="M3.5 10h12m-5-5 5 5-5 5" />
						</svg>
					</button>
				</div>
			</form>

			{#if formError}
				<p class="form-error" role="alert">{formError}</p>
			{/if}

			{#if prediction}
				<div class="result" aria-live="polite">
					<div class="result-divider"></div>
					<div class="result-heading">
						<div>
							<p class="eyebrow dark-eyebrow">YOUR HISTORICAL FORECAST</p>
							<h3>{resultAirport?.name ?? 'Selected airport'} <span>·</span> {resultDay}</h3>
						</div>
						<div class="result-status"><span></span> ESTIMATE READY</div>
					</div>

					<div class="result-body">
						<div
							class="meter"
							style={`--score: ${Math.round(prediction.delay_probability * 100)}%`}
							role="img"
							aria-label={`${Math.round(prediction.delay_probability * 100)} percent chance of a significant delay`}
						>
							<div class="meter-center">
								<strong>{Math.round(prediction.delay_probability * 100)}<small>%</small></strong>
								<span>DELAY CHANCE</span>
							</div>
						</div>
						<div class="result-copy">
							<p class="result-lead">
								Chance of an arrival delay<br />of <strong>15 minutes or more.</strong>
							</p>
							<p class="confidence">
								<span class="confidence-dot"></span>
								Model confidence <strong>{Math.round(prediction.confidence * 100)}%</strong>
							</p>
							<p class="result-note">
								For flights that arrived on {resultDay} at {resultAirport?.name ?? 'this airport'} in the
								2013 training data.
							</p>
						</div>
						<div class="on-time">
							<span>ON-TIME ARRIVAL CHANCE</span>
							<strong>{Math.round(prediction.on_time_probability * 100)}%</strong>
						</div>
					</div>
				</div>
			{/if}
		</section>

		<section class="pricing" id="plans" aria-labelledby="plans-title">
			<div class="pricing-heading">
				<p class="eyebrow dark-eyebrow">SIMPLE, HONEST PRICING</p>
				<h2 id="plans-title">Start free. Grow when it helps.</h2>
				<p>
					Explore historical arrival patterns at no cost. Affordable paid plans are being considered
					for travelers and small travel teams.
				</p>
			</div>

			<div class="plan-grid">
				<article class="plan-card">
					<div class="plan-kicker">AVAILABLE NOW</div>
					<h3>Explorer</h3>
					<p class="plan-audience">For a quick, no-cost check</p>
					<p class="plan-price">$0 <span>forever</span></p>
					<ul>
						<li><span aria-hidden="true">✓</span> Arrival estimates by airport and weekday</li>
						<li><span aria-hidden="true">✓</span> Historical FAA 2013 dataset</li>
						<li><span aria-hidden="true">✓</span> No account or payment required</li>
					</ul>
					<a class="plan-button free-button" href="#forecast-title">Try a forecast</a>
				</article>

				{#each proposedPlans as plan (plan.name)}
					<article class:featured={plan.featured} class="plan-card">
						<div class="plan-kicker">
							{plan.featured ? 'PROPOSED FOR TRAVELERS' : 'PROPOSED FOR TEAMS'}
						</div>
						<h3>{plan.name}</h3>
						<p class="plan-audience">{plan.audience}</p>
						<p class="plan-price">{plan.price} <span>/ month · USD</span></p>
						<ul>
							{#each plan.features as feature (feature)}
								<li><span aria-hidden="true">✓</span> {feature}</li>
							{/each}
						</ul>
						<button class="plan-button planned-button" type="button" disabled>
							Coming soon
						</button>
					</article>
				{/each}
			</div>

			<p class="pricing-disclaimer">
				Proposed pricing and paid features only—no subscriptions or payments are active. Every current
				estimate is based on 2013 history, not live flight data.
			</p>
		</section>

		<footer>
			<p><span class="footer-mark">FS</span> FLIGHT SIGNAL</p>
			<p>Historical patterns are informative, never a guarantee.</p>
		</footer>
	</div>
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background: #f3f5f2;
		color: #172326;
		font-family:
			Inter, 'Avenir Next', Avenir, 'Segoe UI', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	:global(button),
	:global(select) {
		font: inherit;
	}

	main {
		min-height: 100vh;
		padding: 0 32px 38px;
	}

	.shell {
		width: min(1120px, 100%);
		margin: 0 auto;
	}

	.topbar {
		height: 82px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		color: #f7fbf6;
		font-size: 15px;
		font-weight: 750;
		letter-spacing: -0.5px;
		text-decoration: none;
	}

	main {
		background: #f3f5f2;
	}

	.topbar,
	.hero {
		position: relative;
		z-index: 1;
	}

	main {
		position: relative;
		isolation: isolate;
	}

	main::before {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 50%;
		width: 100vw;
		height: 540px;
		background:
			radial-gradient(ellipse at 82% 55%, rgba(32, 99, 88, 0.21), transparent 34%),
			linear-gradient(112deg, #10232b 0%, #142d32 55%, #193c3b 100%);
		content: '';
		transform: translateX(-50%);
	}

	.shell {
		position: relative;
	}

	.brand-mark {
		display: grid;
		width: 32px;
		height: 32px;
		place-items: center;
		border: 1px solid rgba(187, 225, 203, 0.32);
		border-radius: 10px;
		color: #a7e4c4;
	}

	.brand-mark svg {
		width: 21px;
		height: 21px;
	}

	.brand-light {
		color: #9dcab5;
		font-weight: 450;
	}

	.data-badge,
	.result-status {
		display: flex;
		align-items: center;
		gap: 9px;
		color: #a9c2b9;
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 1.4px;
	}

	.data-badge span,
	.result-status span {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #84dab0;
		box-shadow: 0 0 12px rgba(132, 218, 176, 0.8);
	}

	.top-actions {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.nav-link {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		color: #e2eee7;
		font-size: 10px;
		font-weight: 650;
		text-decoration: none;
	}

	.nav-link span {
		color: #9cdbb5;
		font-size: 14px;
	}

	.nav-link:hover {
		color: #a7e4c4;
	}

	.hero {
		min-height: 330px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 22px 0 45px;
		color: #f7fbf6;
	}

	.hero-copy {
		position: relative;
		z-index: 1;
		max-width: 600px;
	}

	.eyebrow {
		margin: 0;
		font-size: 9px;
		font-weight: 750;
		letter-spacing: 1.65px;
	}

	.hero .eyebrow {
		display: flex;
		align-items: center;
		gap: 9px;
		color: #9fc9b5;
	}

	.eyebrow-line {
		width: 22px;
		height: 1px;
		background: #8ad2a9;
	}

	h1 {
		margin: 22px 0 13px;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(42px, 5.2vw, 61px);
		font-weight: 400;
		letter-spacing: -2px;
		line-height: 1.08;
	}

	h1 em {
		color: #99d9b1;
		font-weight: 400;
	}

	.intro {
		max-width: 450px;
		margin: 0;
		color: #c4d2cc;
		font-size: 13px;
		line-height: 1.75;
	}

	.hero-footnote {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 21px;
		color: #8fa9a0;
		font-size: 10px;
	}

	.footnote-icon {
		color: #8bd1a9;
		font-size: 15px;
	}

	.flight-art {
		position: absolute;
		top: 9px;
		right: 9px;
		width: 340px;
		height: 300px;
		overflow: hidden;
		opacity: 0.94;
	}

	.orbit {
		position: absolute;
		border: 1px solid rgba(144, 204, 178, 0.12);
		border-radius: 50%;
		transform: rotate(-31deg);
	}

	.orbit-one {
		top: 51px;
		right: -30px;
		width: 355px;
		height: 153px;
	}

	.orbit-two {
		top: 70px;
		right: 7px;
		width: 287px;
		height: 122px;
	}

	.orbit-three {
		top: 91px;
		right: 42px;
		width: 221px;
		height: 91px;
	}

	.art-plane {
		position: absolute;
		top: 107px;
		right: 136px;
		display: grid;
		width: 57px;
		height: 57px;
		place-items: center;
		border: 1px solid rgba(157, 224, 184, 0.43);
		border-radius: 18px;
		background: rgba(57, 110, 93, 0.24);
		color: #a8e8c1;
		box-shadow: 0 0 40px rgba(125, 214, 166, 0.13);
		transform: rotate(-13deg);
	}

	.art-plane svg {
		width: 35px;
		height: 35px;
	}

	.art-point {
		position: absolute;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #9ce0b7;
		box-shadow: 0 0 12px #9ce0b7;
	}

	.point-one {
		top: 75px;
		right: 92px;
	}

	.point-two {
		top: 190px;
		right: 87px;
		width: 4px;
		height: 4px;
		opacity: 0.7;
	}

	.point-three {
		top: 129px;
		right: 27px;
		width: 4px;
		height: 4px;
		opacity: 0.55;
	}

	.art-caption {
		position: absolute;
		right: 18px;
		bottom: 37px;
		display: flex;
		align-items: center;
		gap: 7px;
		color: #92b0a3;
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.2px;
	}

	.art-caption span {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #93dfb2;
	}

	.forecast-card {
		position: relative;
		z-index: 2;
		margin-top: -1px;
		padding: 31px 38px 35px;
		border: 1px solid #e6e9e4;
		border-radius: 5px;
		background: #fff;
		box-shadow: 0 17px 45px rgba(29, 49, 43, 0.08);
	}

	.card-heading,
	.result-heading {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.dark-eyebrow {
		color: #6d8b7b;
	}

	h2 {
		margin: 8px 0 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 27px;
		font-weight: 400;
		letter-spacing: -0.6px;
	}

	.step-number {
		padding-top: 4px;
		color: #a7b1ac;
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 1.1px;
	}

	.step-number span {
		color: #418564;
	}

	.fields {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) 190px;
		align-items: end;
		gap: 14px;
		margin-top: 27px;
	}

	.field {
		display: grid;
		gap: 10px;
	}

	.field-label {
		color: #74837c;
		font-size: 8px;
		font-weight: 750;
		letter-spacing: 1.2px;
	}

	.field-index {
		margin-right: 7px;
		color: #94b5a2;
	}

	.select-wrap {
		position: relative;
		display: block;
	}

	select {
		width: 100%;
		height: 49px;
		padding: 0 40px 0 14px;
		appearance: none;
		border: 1px solid #dfe5df;
		border-radius: 3px;
		outline: none;
		background: #fff;
		color: #24352e;
		font-size: 12px;
	}

	select:focus-visible {
		border-color: #4b9b70;
		box-shadow: 0 0 0 3px rgba(75, 155, 112, 0.13);
	}

	.select-wrap svg {
		position: absolute;
		top: 17px;
		right: 14px;
		width: 16px;
		height: 16px;
		fill: none;
		stroke: #687d70;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.4;
		pointer-events: none;
	}

	button {
		height: 49px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		padding: 0 15px;
		border: 0;
		border-radius: 3px;
		background: #2f7657;
		color: #fff;
		font-size: 11px;
		font-weight: 650;
		cursor: pointer;
		transition:
			background 140ms ease,
			transform 140ms ease;
	}

	button:hover {
		background: #245f45;
		transform: translateY(-1px);
	}

	button:focus-visible {
		outline: 3px solid rgba(69, 150, 103, 0.33);
		outline-offset: 3px;
	}

	button svg {
		width: 17px;
		height: 17px;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.5;
	}

	.form-error {
		margin: 17px 0 0;
		color: #a03d37;
		font-size: 12px;
	}

	.result-divider {
		height: 1px;
		margin: 31px 0 24px;
		background: #e9ede8;
	}

	.result-heading {
		align-items: center;
	}

	h3 {
		margin: 8px 0 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 20px;
		font-weight: 400;
	}

	h3 span {
		padding: 0 4px;
		color: #a6b0a9;
	}

	.result-status {
		color: #63816f;
		font-size: 8px;
	}

	.result-status span {
		width: 5px;
		height: 5px;
		background: #4ca678;
		box-shadow: none;
	}

	.result-body {
		display: grid;
		grid-template-columns: 102px 1fr auto;
		align-items: center;
		gap: 22px;
		margin-top: 22px;
	}

	.meter {
		width: 96px;
		height: 96px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		background: conic-gradient(#4b9b70 var(--score), #eaf0eb var(--score));
		transform: rotate(-90deg);
	}

	.meter-center {
		width: 78px;
		height: 78px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 50%;
		background: #fff;
		transform: rotate(90deg);
	}

	.meter-center strong {
		color: #1d4735;
		font-size: 27px;
		font-weight: 600;
		letter-spacing: -1.5px;
		line-height: 1;
	}

	.meter-center small {
		font-size: 15px;
	}

	.meter-center > span {
		margin-top: 6px;
		color: #7a8c81;
		font-size: 6px;
		font-weight: 750;
		letter-spacing: 0.7px;
	}

	.result-lead {
		margin: 0;
		color: #45554c;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 16px;
		line-height: 1.5;
	}

	.result-lead strong {
		color: #1d4735;
		font-weight: 600;
	}

	.confidence {
		display: flex;
		align-items: center;
		gap: 7px;
		margin: 11px 0 0;
		color: #7b8c82;
		font-size: 10px;
	}

	.confidence strong {
		color: #496d58;
		font-weight: 650;
	}

	.confidence-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #71bb8e;
	}

	.result-note {
		margin: 9px 0 0;
		color: #8b9790;
		font-size: 9px;
		line-height: 1.5;
	}

	.on-time {
		display: grid;
		gap: 7px;
		min-width: 152px;
		padding: 14px 0 14px 24px;
		border-left: 1px solid #e8ede8;
	}

	.on-time span {
		color: #77877e;
		font-size: 8px;
		font-weight: 750;
		letter-spacing: 0.9px;
	}

	.on-time strong {
		color: #2b6045;
		font-size: 23px;
		font-weight: 500;
		letter-spacing: -0.5px;
	}

	.pricing {
		margin-top: 40px;
		padding: 25px 0 8px;
	}

	.pricing-heading {
		max-width: 600px;
		margin: 0 auto 25px;
		text-align: center;
	}

	.pricing-heading h2 {
		margin-top: 10px;
		font-size: 34px;
	}

	.pricing-heading > p:last-child {
		margin: 10px 0 0;
		color: #718078;
		font-size: 12px;
		line-height: 1.7;
	}

	.plan-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		align-items: stretch;
		gap: 14px;
	}

	.plan-card {
		display: flex;
		min-height: 316px;
		flex-direction: column;
		padding: 24px 22px 20px;
		border: 1px solid #e1e7e1;
		border-radius: 5px;
		background: #fff;
		box-shadow: 0 8px 24px rgba(29, 49, 43, 0.035);
	}

	.plan-card.featured {
		border-color: #244e41;
		background:
			radial-gradient(ellipse at 100% 0%, rgba(108, 183, 142, 0.19), transparent 46%),
			#17342f;
		box-shadow: 0 12px 30px rgba(29, 68, 51, 0.14);
	}

	.plan-kicker {
		color: #63836f;
		font-size: 8px;
		font-weight: 750;
		letter-spacing: 1.1px;
	}

	.plan-card.featured .plan-kicker {
		color: #9dd5b1;
	}

	.plan-card h3 {
		margin: 15px 0 0;
		color: #1c3028;
		font-size: 20px;
	}

	.plan-card.featured h3 {
		color: #f5faf5;
	}

	.plan-audience {
		margin: 5px 0 0;
		color: #829087;
		font-size: 10px;
	}

	.plan-card.featured .plan-audience {
		color: #b7ccc0;
	}

	.plan-price {
		margin: 21px 0 14px;
		color: #183c2d;
		font-size: 31px;
		font-weight: 620;
		letter-spacing: -1.5px;
	}

	.plan-card.featured .plan-price {
		color: #b0ebc2;
	}

	.plan-price span {
		color: #809087;
		font-size: 9px;
		font-weight: 450;
		letter-spacing: 0;
	}

	.plan-card.featured .plan-price span {
		color: #bbd0c3;
	}

	.plan-card ul {
		display: grid;
		gap: 11px;
		margin: 0 0 20px;
		padding: 14px 0 0;
		border-top: 1px solid #e9eee9;
		list-style: none;
	}

	.plan-card.featured ul {
		border-color: rgba(209, 234, 217, 0.17);
	}

	.plan-card li {
		display: flex;
		gap: 8px;
		color: #58675e;
		font-size: 10px;
		line-height: 1.45;
	}

	.plan-card.featured li {
		color: #d3e2d8;
	}

	.plan-card li span {
		color: #438860;
		font-weight: 700;
	}

	.plan-card.featured li span {
		color: #9fe0b6;
	}

	.plan-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 42px;
		margin-top: auto;
		font-size: 10px;
	}

	a.plan-button {
		text-decoration: none;
	}

	.free-button {
		background: #2f7657;
		color: #fff;
		transition: background 140ms ease;
	}

	.free-button:hover {
		background: #245f45;
	}

	.planned-button:disabled {
		background: #edf1ed;
		color: #77877e;
		cursor: not-allowed;
	}

	.planned-button:disabled:hover {
		background: #edf1ed;
		transform: none;
	}

	.plan-card.featured .planned-button:disabled {
		background: rgba(222, 239, 227, 0.14);
		color: #d4e5d9;
	}

	.plan-card.featured .planned-button:disabled:hover {
		background: rgba(222, 239, 227, 0.14);
	}

	.pricing-disclaimer {
		max-width: 680px;
		margin: 16px auto 0;
		color: #7e8d84;
		font-size: 9px;
		line-height: 1.7;
		text-align: center;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 2px 0;
		color: #88948e;
		font-size: 9px;
	}

	footer p {
		margin: 0;
	}

	footer p:first-child {
		display: flex;
		align-items: center;
		gap: 7px;
		color: #66776e;
		font-size: 8px;
		font-weight: 750;
		letter-spacing: 1px;
	}

	.footer-mark {
		display: grid;
		width: 20px;
		height: 20px;
		place-items: center;
		border: 1px solid #cbd6ce;
		border-radius: 6px;
		color: #418564;
		font-size: 7px;
		letter-spacing: 0;
	}

	@media (max-width: 760px) {
		main {
			padding: 0 22px 28px;
		}

		main::before {
			height: 510px;
		}

		.hero {
			min-height: 315px;
			padding-bottom: 42px;
		}

		.flight-art {
			right: -36px;
			opacity: 0.52;
		}

		.hero-copy {
			max-width: 540px;
		}

		.hero .intro {
			max-width: 400px;
		}

		.forecast-card {
			padding: 28px;
		}

		.plan-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.fields {
			grid-template-columns: 1fr 1fr;
		}

		.fields button {
			grid-column: 1 / -1;
		}

		.result-body {
			grid-template-columns: 90px 1fr;
			gap: 17px;
		}

		.on-time {
			grid-column: 1 / -1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 14px 0 0;
			border-top: 1px solid #e8ede8;
			border-left: 0;
		}

		.on-time strong {
			font-size: 18px;
		}
	}

	@media (max-width: 600px) {
		.plan-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 500px) {
		main {
			padding-right: 16px;
			padding-left: 16px;
		}

		.topbar {
			height: 68px;
		}

		.data-badge {
			font-size: 7px;
			letter-spacing: 0.8px;
		}

		.top-actions {
			gap: 12px;
		}

		.nav-link {
			font-size: 9px;
		}

		.hero {
			min-height: 300px;
			align-items: flex-start;
			padding-top: 37px;
		}

		.flight-art {
			top: 30px;
			right: -105px;
			opacity: 0.34;
		}

		h1 {
			margin-top: 19px;
			font-size: clamp(39px, 10.7vw, 52px);
		}

		.intro {
			max-width: 330px;
			font-size: 12px;
		}

		.hero-footnote {
			max-width: 290px;
			font-size: 9px;
			line-height: 1.5;
		}

		.forecast-card {
			padding: 24px 19px;
		}

		.pricing {
			margin-top: 27px;
		}

		.pricing-heading {
			margin-bottom: 20px;
			text-align: left;
		}

		.pricing-heading h2 {
			font-size: 29px;
		}

		.plan-grid {
			grid-template-columns: 1fr;
			gap: 11px;
		}

		.plan-card {
			min-height: 0;
			padding: 21px;
		}

		h2 {
			font-size: 24px;
		}

		.fields {
			grid-template-columns: 1fr;
			gap: 17px;
			margin-top: 23px;
		}

		.fields button {
			grid-column: auto;
		}

		.result-heading {
			align-items: flex-start;
			gap: 12px;
		}

		h3 {
			font-size: 17px;
		}

		.result-status {
			padding-top: 2px;
			font-size: 7px;
			letter-spacing: 0.6px;
		}

		.result-body {
			grid-template-columns: 77px 1fr;
			gap: 14px;
		}

		.meter {
			width: 76px;
			height: 76px;
		}

		.meter-center {
			width: 62px;
			height: 62px;
		}

		.meter-center strong {
			font-size: 22px;
		}

		.result-lead {
			font-size: 14px;
		}

		.result-note {
			font-size: 8px;
		}

		footer {
			gap: 10px;
			font-size: 8px;
		}

		footer p:last-child {
			max-width: 185px;
			text-align: right;
		}
	}
</style>
