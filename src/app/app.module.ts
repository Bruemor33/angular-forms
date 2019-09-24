import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserSettingsFormComponent } from './form/form.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'user-settings',
                component: UserSettingsFormComponent
            },
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'welcome',
                pathMatch: 'full'
            }
        ])
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }