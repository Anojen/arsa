import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    email = "";
    password = "";
    error: { name: string, message: string } = { name: '', message: '' };

    constructor(private router: Router, private appcomponent: AppComponent) {
        // if (localStorage.getItem("sessiontoken") !== "null") {
        //     this.router.navigateByUrl('/dashboard');
        // }
    }

    ngOnInit() {
    }

    onLoginEmail() {
        localStorage.setItem("sessiontoken", "hahahaha")
        this.router.navigateByUrl('/dashboard');
    }
}
