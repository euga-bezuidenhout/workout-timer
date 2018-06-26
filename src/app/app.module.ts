import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { WorkoutService } from '../services/workout.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewWorkoutPage } from '../pages/new-workout/new-workout'
import { EditWorkoutPage } from '../pages/edit-workout/edit-workout';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		NewWorkoutPage,
		EditWorkoutPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		NewWorkoutPage,
		EditWorkoutPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		WorkoutService,
		// Storage,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
