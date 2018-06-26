import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Workout } from '../models/workout.model';
import { Exercise } from '../models/exercise.model';

@Injectable()
export class WorkoutService {
	private workouts: Workout[] = [];

	constructor(private storage: Storage) { }

	private saveWorkouts() {
		this.storage.set('workouts', this.workouts);
	}

	addWorkout(w: Workout) {
		this.workouts.push(w);
		this.saveWorkouts();
	}

	removeWorkout(i: number) {
		this.workouts.splice(i, 1);
		this.saveWorkouts();
	}

	getWorkouts() {
		return this.storage.get('workouts')
			.then((w) => {
				this.workouts = w == null ? [] : w;
				return this.workouts.slice();
			});
	}

	addExercise(w: Workout, e: Exercise) {
		w.exercises.push(e);
	}
}
