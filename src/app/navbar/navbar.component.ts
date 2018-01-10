import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    

    constructor(private router: Router) { }

    ngOnInit() {
    }

    refresh() {
        location.reload();
    }

    logout() {
        localStorage.setItem('sessiontoken', "null");
        this.router.navigateByUrl('/login');
    }

    isLoggedOut(){
        if (localStorage.getItem("sessiontoken") === "null" || localStorage.getItem("sessiontoken") === null) {
            return false;
        } else{
            return true;
        }
    }
}
