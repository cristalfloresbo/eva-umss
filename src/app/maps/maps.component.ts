import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    User = localStorage.getItem("user");
    constructor() { }

    ngOnInit() {
        localStorage.setItem("user", "ADMIN");
    }

}
