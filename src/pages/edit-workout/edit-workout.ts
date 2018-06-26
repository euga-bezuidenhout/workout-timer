import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Workout } from '../../models/workout.model';
import { WorkoutService } from '../../services/workout.service';

@Component({
	selector: 'page-edit-workout',
	templateUrl: 'edit-workout.html'
})
export class EditWorkoutPage {

	workout: Workout;

	constructor(public navCtrl: NavController, private navParams: NavParams) {
		this.workout = navParams.get('wo');
	}

}
