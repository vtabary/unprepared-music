import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  public get<T>(name: string, defaultValue: T): T {
    const value = localStorage.getItem(name);
    if (value === null) {
      return defaultValue;
    }
    return JSON.parse(value);
  }

  public set<T>(name: string, value: T): void {
    localStorage.setItem(name, JSON.stringify(value));
  }
}
