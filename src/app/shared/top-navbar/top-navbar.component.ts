import { StartupService } from '../../services/start-up.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-navbar',
	templateUrl: './top-navbar.component.html'
})
export class TopNavbarComponent implements OnInit {

	data: any;
	showHeader: boolean;

	constructor(private http: Http, private startUpService: StartupService) { }

	ngOnInit() {
		this.startUpService.getJSON('data/data.json').subscribe(x => {
			this.showHeader = x['header'].show;
		})
		// this.data = this.startUpService._startupData;

	}

	stopPro(event) {
		event.stopPropagation();
		return false;
	}

	onFullScreen(event) {
		event.preventDefault();
		this.exitFullscreen();
		const
			el = <any>document.documentElement
			, rfs =
				el.requestFullScreen
				|| el.webkitRequestFullScreen
				|| el.mozRequestFullScreen
			;

		rfs.call(el);
	}

	exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			// } else if (document.mozCancelFullScreen) {
			//   document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}
