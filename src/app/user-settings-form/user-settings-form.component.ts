import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: UserSettings = {
    name: null,
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...',
  };

  originalUserSettings: UserSettings = { ...this.userSettings };
  constructor() {}

  ngOnInit(): void {}

  onBlur(field: NgModel){
    console.log('on Blur: ', field.valid);
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid)
  }
}
