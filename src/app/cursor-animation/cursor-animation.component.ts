import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor-animation',
  standalone: true,
  templateUrl: './cursor-animation.component.html',
  styleUrls: ['./cursor-animation.component.scss']
})
export class CursorAnimationComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const cursorDot = this.el.nativeElement.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = this.el.nativeElement.querySelector('.cursor-outline') as HTMLElement;

    // Initial GSAP settings for the cursor outline
    gsap.set(cursorOutline, { scale: 0.5 });

    // Quick animations for moving the outline
    const xCTo = gsap.quickTo(cursorOutline, 'left', { duration: 0.10 });
    const yCTo = gsap.quickTo(cursorOutline, 'top', { duration: 0.10 });

    let isVisible = false;

    // Mouse movement handler
    const mouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.set([cursorDot, cursorOutline], { opacity: 1 });
        isVisible = true;
      }

      // Position the cursorDot directly at the mouse position (no delay)
      const cursorDotSize = cursorDot.offsetWidth / 2;
      cursorDot.style.left = `${e.clientX - cursorDotSize}px`;
      cursorDot.style.top = `${e.clientY - cursorDotSize}px`;

      // Smoothly animate the cursorOutline to follow the mouse
      const cursorOutlineSize = cursorOutline.offsetWidth / 2;
      xCTo(e.clientX - cursorOutlineSize);
      yCTo(e.clientY - cursorOutlineSize);
    };

    window.addEventListener('mousemove', mouseMove);

    // Event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');

    interactiveElements.forEach((element) => {
      this.renderer.listen(element, 'mouseenter', () => {
        // Hide outline and enlarge dot with half opacity
        gsap.to(cursorOutline, { opacity: 0, duration: 0.2 });
        gsap.to(cursorDot, { scale: 12, opacity: 0.2, duration: 0.2 }); // Agrandissement du point
      });

      this.renderer.listen(element, 'mouseleave', () => {
        // Show outline and reset dot size and opacity
        gsap.to(cursorOutline, { opacity: 1, duration: 0.2 });
        gsap.to(cursorDot, { scale: 1, opacity: 1, duration: 0.2 }); // Réinitialisation de la taille et de l'opacité
      });
    });
  }
}
