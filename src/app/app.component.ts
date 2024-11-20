import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOutAnimation } from './animations/route-animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CursorAnimationComponent } from './cursor-animation/cursor-animation.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CursorAnimationComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeInOutAnimation]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.isActivated ? outlet.activatedRouteData['animation'] : '';
  }
}

