import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeService } from '../services/dark-mode.service';
import { fadeInOutAnimation } from '../animations/route-animations';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    animations: [fadeInOutAnimation],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @HostBinding('@fadeInOut') fadeInOut = true;
  messageSent = false;

  constructor(private translate: TranslateService, private darkModeService: DarkModeService) {
    this.translate.setDefaultLang('en');
  }

  onSubmit() {
    // Logique de soumission du formulaire, tu peux appeler un service ou faire un traitement spécifique
    this.messageSent = true;

    // Réinitialiser l'état après un délai
    setTimeout(() => {
      this.messageSent = false;
    }, 5000);
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}
