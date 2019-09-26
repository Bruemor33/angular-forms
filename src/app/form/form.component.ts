import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';

@Component({
    selector: 'app-user-settings-form',
    templateUrl: './form.component.html',
    styleUrls: [
        './form.component.css'
    ]
})
export class UserSettingsFormComponent implements OnInit {

    originalUserSettings: UserSettings = {
        name: 'Milton',
        emailOffers: true,
        subscriptionType: 'Annual',
        interfaceStyle: 'Dark',
        notes: 'Some notes...'
    };

    userSettings: UserSettings = { ...this.originalUserSettings };

    constructor() {}

    ngOnInit() {
        
    }
}