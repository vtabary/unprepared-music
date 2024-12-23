import { Injectable } from '@angular/core';
import { PreferencesService } from '../../../shared/index';

@Injectable({
  providedIn: 'root',
})
export class ProjectsHistoryService {
  constructor(private readonly preferencesService: PreferencesService) {}

  public listEntries(): string[] {
    return this.preferencesService.get('projectsHistory', []);
  }

  public addEntry(filePath: string): void {
    const value = this.preferencesService.get<string[]>('projectsHistory', []);
    value.push(filePath);
    this.preferencesService.set(
      'projectsHistory',
      [...new Set(value)].slice(0, 10)
    );
  }
}
