import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

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
  darkModeEnabled = false;
  languages = [
    { code: 'en', label: 'English', flag: 'flags/us.png' },
    { code: 'fr', label: 'Français', flag: 'flags/fr.png' },
    { code: 'es', label: 'Español', flag: 'flags/es.png' }
  ];

  constructor(private translate: TranslateService) {
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

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      this.darkModeEnabled = true;
      document.documentElement.classList.add('dark');
    }
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
    this.darkModeEnabled = !this.darkModeEnabled;

    if (this.darkModeEnabled) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  }
}
