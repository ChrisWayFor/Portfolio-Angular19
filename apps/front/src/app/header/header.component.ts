import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, TranslateModule]
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  currentLanguageLabel = 'English';
  activeLink = '';
  languages = [
    { code: 'en', label: 'English', flag: 'flags/us.png' },
    { code: 'fr', label: 'Français', flag: 'flags/fr.png' },
    { code: 'es', label: 'Español', flag: 'flags/es.png' }
  ];

  constructor(private translate: TranslateService, public darkModeService: DarkModeService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.translate.use(savedLang);
      const selectedLanguage = this.languages.find(lang => lang.code === savedLang);
      if (selectedLanguage) {
        this.currentLanguageLabel = selectedLanguage.label;
      }
    }

    // Let the service handle the initial dark mode setup
    this.darkModeService.initializeDarkMode();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(langCode: string) {
    const selectedLanguage = this.languages.find(lang => lang.code === langCode);
    if (selectedLanguage) {
      this.currentLanguageLabel = selectedLanguage.label;
    }
    this.translate.use(langCode);
    this.isDropdownOpen = false;
  }

  getCurrentLanguageFlag(): string {
    const currentLanguage = this.languages.find(lang => lang.label === this.currentLanguageLabel);
    return currentLanguage ? currentLanguage.flag : '';
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}
