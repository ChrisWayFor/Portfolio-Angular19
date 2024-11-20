import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeEnabled = false;

  constructor() {
    this.initializeDarkMode();
  }

  initializeDarkMode(): void {
    const savedDarkMode = localStorage.getItem('darkMode');
    this.darkModeEnabled = savedDarkMode === 'enabled';
    this.updateDarkModeClass();
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    localStorage.setItem('darkMode', this.darkModeEnabled ? 'enabled' : 'disabled');
    this.updateDarkModeClass();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeEnabled;
  }

  private updateDarkModeClass(): void {
    if (this.darkModeEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
