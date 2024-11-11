import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  showTransition = true;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngAfterViewInit() {
    // Utilisation d'un timeout pour permettre à l'affichage de se stabiliser
    setTimeout(() => {
      this.showTransition = false; // Déclenche l'animation
    }, 500); // Ajuste ce délai pour synchroniser avec tes besoins
  }
}

