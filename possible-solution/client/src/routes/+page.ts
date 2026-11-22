import { forecastData } from '$lib/forecast-data.generated';
import type { PageLoad } from './$types';

export const prerender = true;
export const load: PageLoad = () => forecastData;
