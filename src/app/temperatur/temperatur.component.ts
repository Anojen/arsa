import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-temperatur',
    templateUrl: './temperatur.component.html',
    styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent implements OnInit {
    temperatur = 0;
    roomName = "";
    roomTemperature = 0;

    constructor(public dialogRef: MatDialogRef<TemperaturComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.roomName  = this.data.roomname;
        this.temperatur = this.roomTemperature = this.data.temperature;
    }

    saveTemperatur(){
        this.dialogRef.close(this.temperatur);
    }

    changeTemperatur = function (raum, type) {
        var currentVal =  this.temperatur

        if (!isNaN(currentVal)) {
            if (type == 'minus') {
                if (currentVal > (currentVal-0.5) && (currentVal-0.5) >= 0) {
                    this.temperatur = (currentVal - 0.5);
                }
            } else if (type == 'plus') {
                if (currentVal < (currentVal+0.5)&& (currentVal-0.5) <= 35) {
                    this.temperatur = currentVal + 0.5;
                }
            }
        } else {
            this.temperatur = 0;
        }
    }
}
