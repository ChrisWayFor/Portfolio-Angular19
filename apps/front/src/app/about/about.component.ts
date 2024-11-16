import { Component, HostBinding } from '@angular/core';
import { CursorAnimationComponent } from "../cursor-animation/cursor-animation.component";
import { fadeInOutAnimation } from '../animations/route-animations';
import { TranslateService } from '@ngx-translate/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CursorAnimationComponent],
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
