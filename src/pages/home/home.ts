import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Workout } from '../../models/workout.model';
import { WorkoutService } from '../../services/workout.service';
import { NewWorkoutPage } from '../new-workout/new-workout';
import { EditWorkoutPage } from '../edit-workout/edit-workout';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	workouts: Workout[] = [];

	constructor(public navCtrl: NavController, private workoutService: WorkoutService) { }

	ionViewWillEnter() {
		this.workoutService.getWorkouts()
			.then(
				(x) => this.workouts = x
			);
	}

	newWorkout() {
		this.navCtrl.push(NewWorkoutPage);
	}

	editWorkout(w: Workout) {
		this.navCtrl.push(EditWorkoutPage, { wo: w })
	}

	deleteWorkout(i: number) {
		this.workoutService.removeWorkout(i);
	}

	goToWorkout(w: Workout) {
		console.log("Go to workout " + w);
	}

}
