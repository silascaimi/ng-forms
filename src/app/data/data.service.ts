import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Light','Medium','Dark']);
  }
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/v4qe0kY3a3kQFqAD2u2z', userSettings);
  }
}
