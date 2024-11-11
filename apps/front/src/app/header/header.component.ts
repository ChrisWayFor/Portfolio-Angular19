import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [CommonModule, TranslateModule]
})

export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  currentLanguageLabel = 'English';
   // Langue par défaut
  languages = [
    { code: 'en', label: 'English', flag: 'flags/us.png' },
    { code: 'fr', label: 'Français', flag: 'flags/fr.png' },
    { code: 'es', label: 'Español', flag: 'flags/es.png' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Vérifie si une langue est déjà sélectionnée et définie
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.translate.use(savedLang);
      const selectedLanguage = this.languages.find(lang => lang.code === savedLang);
      if (selectedLanguage) {
        this.currentLanguageLabel = selectedLanguage.label;
      }
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
    this.isDropdownOpen = false; // Ferme le menu déroulant après sélection
  }

  getCurrentLanguageFlag(): string {
    const currentLanguage = this.languages.find(lang => lang.label === this.currentLanguageLabel);
    return currentLanguage ? currentLanguage.flag : '';
  }
}
