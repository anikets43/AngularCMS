import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsService } from './services/settings.service';
import { StartupService } from './services/start-up.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JsonSchemaFormModule } from 'angular2-json-schema-form';
import { StorageService } from './services/session.service';
import * as $ from 'jquery';
import { EmployeeComponent } from './pages/employee/employee.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		EmployeeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		SharedModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		JsonSchemaFormModule
	],
	providers: [
		StorageService,
		StartupService,
		SettingsService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
