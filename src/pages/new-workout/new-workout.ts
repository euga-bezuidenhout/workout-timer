import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Workout } from '../../models/workout.model';
import { WorkoutService } from '../../services/workout.service';

@Component({
	selector: 'page-new-workout',
	templateUrl: 'new-workout.html'
})
export class NewWorkoutPage {

	title: string = "";
	sets: number = 0;

	constructor(public navCtrl: NavController, private workoutService: WorkoutService) {

	}

	addWorkout() {
		let w: Workout = { title: this.title, sets: this.sets, exercises: [] };
		this.workoutService.addWorkout(w);
	}

}
