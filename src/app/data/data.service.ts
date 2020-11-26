import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  postUserSettingsForm(userSettings: UserSettings) {}
}
