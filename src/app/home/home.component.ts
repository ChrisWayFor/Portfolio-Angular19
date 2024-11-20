import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeService } from '../services/dark-mode.service';
import { fadeInOutAnimation } from '../animations/route-animations';
import { HeroComponent } from '../hero/hero.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, TranslateModule, HeroComponent],
    animations: [fadeInOutAnimation],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostBinding('@fadeInOut') fadeInOut = true;

  constructor(private translate: TranslateService, private darkModeService: DarkModeService) {
    this.translate.setDefaultLang('en');
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}
