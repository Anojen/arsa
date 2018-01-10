import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    title = 'app';

    constructor(private router: Router){
        // Observable.interval(2000 * 60).subscribe(x => {
        //     localStorage.setItem('sessiontoken', "null");
        //     this.router.navigateByUrl('/login');
        // });
    }
}
