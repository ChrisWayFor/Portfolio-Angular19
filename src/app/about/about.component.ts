import { Component, HostBinding } from '@angular/core';
import { fadeInOutAnimation } from '../animations/route-animations';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { DarkModeService } from '../services/dark-mode.service';
import { HeroComponent } from '../hero/hero.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [HeroComponent, TranslateModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    animations: [fadeInOutAnimation]
})
export class AboutComponent {
  @HostBinding('@fadeInOut') fadeInOut = true;

  constructor(private translate: TranslateService, private darkModeService: DarkModeService) {
    this.translate.setDefaultLang('en');
  }
}
