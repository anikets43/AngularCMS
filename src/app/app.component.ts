import { Http } from '@angular/http/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SettingsService } from './services/settings.service';
import { StartupService } from './services/start-up.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	fixedSidebar: boolean = false;
	smallSidebar: boolean = true;
	settingsOpen: boolean = false;

	sidebarColor: string = 'bg-danger-300';

	colors = ['blue', 'default', 'gray', 'green', 'red', 'sky-blue', 'yellow'];
	sizes = ['mini', 'small', 'normal', 'large'];

	onText = 'On';
	offText = 'Off';
	onColor = 'green';
	offColor = 'red';
	size = 'normal';

	// For Sidebar BG
	bgBlack300: boolean = true;
	bgPrimary: boolean = false;
	bgLight: boolean = false;
	bgDanger: boolean = false;
	bgSuccess: boolean = false;
	bgWarning: boolean = false;

	data: any;

	constructor(private settingsService: SettingsService, private startUpService: StartupService) { }

	ngOnInit() {
		this.startUpService.getJSON('data/data.json').subscribe((x: any) => {
			this.data = x.sidebar.modules;
		})
		this.fixedSidebar = this.settingsService.getFixedSidebar();

		// Toggle small sidebar
		$('.small-nav-handle').on('click', function (event) {
			event.preventDefault();
			$('.left-sidebar').toggleClass('small-nav');
			$('.navbar-header').toggleClass('small-nav-header');
		});

		// Toggle Mobile Nav
		$('.mobile-nav-toggle').on('click', function (event) {
			event.preventDefault();
			$('.left-sidebar').toggle();
		})

		// Toggle sidebar dropdown
		$('.left-sidebar .has-children').not('.open').find('.child-nav').slideUp('100');
		$('.left-sidebar .has-children>a').on('click', function (event) {
			event.preventDefault();
			$(this).parent().toggleClass('open');
			$(this).parent().find('.child-nav').slideToggle('500');
		});
	}
}
