import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
    selector: 'app-hero',
    imports: [CommonModule, TranslateModule],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() imageUrl: string | null = null;
  @Input() isAboutPage = false;

  constructor(private translate: TranslateService, private darkModeService: DarkModeService) {
    this.translate.setDefaultLang('en');
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }

  scrollToFooter(): void {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
