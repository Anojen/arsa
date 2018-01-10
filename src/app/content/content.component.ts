import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TemperaturComponent } from '../temperatur/temperatur.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app.component';

import { Router } from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

    settings = {
        steckdose_wohnzimmer: true,
        steckdose_kueche: true,
        steckdose_schlafzimmer: true,
        steckdose_unbekannt: true,
        wohnungstuer: true,
        temperatur_wohnzimmer: 0.0,
        setpoint_wohnzimmer: 0.0,
        temperatur_schlafzimmer: 0.0,
        setpoint_schlafzimmer: 0.0,
        temperatur_kueche: 0.0,
        setpoint_kueche: 0.0,
        temperatur_bad: 0.0,
        setpoint_bad: 0.0
    }

    databaseEntries: Observable<any[]>;

    constructor(public dialog: MatDialog, private db: AngularFireDatabase, private router: Router) {
        if (localStorage.getItem("sessiontoken") === "null" || localStorage.getItem("sessiontoken") === null) {
            this.router.navigateByUrl('/login');
        }
    }

    ngOnInit() {
        this.init();
    }

    init() {
        this.databaseEntries = this.db.list('/settings').valueChanges();
        this.mapDatabase(this.databaseEntries);
    }

    mapDatabase(databaseEntries) {
        this.databaseEntries.subscribe(items => {
            // items.forEach(item => {
            //     console.log('Item:', item.key);
            //     this.settings
            // })

            items.forEach(item => {
                this.settings[item.key] = item.value;
            });
        })
    }

    schalteSteckdose(room) {
        if (this.settings['steckdose_' + room] === false) {
            const items = this.db.list('/settings');
            items.update("steckdose_" + room, { value: true });
            this.init()
        } else {
            const items = this.db.list('/settings');
            items.update("steckdose_" + room, { value: false });
            this.init()
        }
    }

    schliesseWohnungsTuer() {
        if (this.settings.wohnungstuer === false) {
            const items = this.db.list('/settings');
            items.update("wohnungstuer", { value: true });
            this.init()
        } else {
            const items = this.db.list('/settings');
            items.update("wohnungstuer", { value: false });
            this.init()
        }
    }

    oeffneHaustuer() {
        console.log("oeffneHaustuer")
    }

    oeffneTemperaturModal(room) {
        let dialogReff = this.dialog.open(TemperaturComponent, {
            width: '400px',
            position: { top: '10%' },
            data: {
                roomname: room,
                temperature: this.settings['setpoint_' + room]
            }
        });

        dialogReff.afterClosed().subscribe(result => {
            
        });
    }
}