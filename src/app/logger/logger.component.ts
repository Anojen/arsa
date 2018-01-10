import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-logger',
    templateUrl: './logger.component.html',
    styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

    constructor(private router: Router) {
        if (localStorage.getItem("sessiontoken") === "null" || localStorage.getItem("sessiontoken") === null) {
            this.router.navigateByUrl('/login');
        }
    }

    ngOnInit() {
    }

}
