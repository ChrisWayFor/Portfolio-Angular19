import { Component } from '@angular/core';
import { CursorAnimationComponent } from "../cursor-animation/cursor-animation.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CursorAnimationComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
