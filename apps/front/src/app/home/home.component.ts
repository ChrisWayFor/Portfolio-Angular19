import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CursorAnimationComponent } from '../cursor-animation/cursor-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent, CursorAnimationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
