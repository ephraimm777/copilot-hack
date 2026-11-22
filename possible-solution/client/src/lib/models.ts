export interface Airport {
	id: number;
	name: string;
}

export interface FlightPrediction {
	delay_probability: number;
	on_time_probability: number;
	confidence: number;
}