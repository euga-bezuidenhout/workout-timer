export interface Workout {
	title: string;
	sets: number;
	exercises: {
		title: string;
		timed: boolean;
		time: number;
		reps: number;
		restTime: number;
	}[];
}
