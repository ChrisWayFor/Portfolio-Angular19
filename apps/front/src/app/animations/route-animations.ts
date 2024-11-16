import { trigger, transition, style, animate, query } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition('* <=> *', [
    // Style du conteneur parent
    style({
      position: 'relative',
      display: 'block'
    }),

    // Style des éléments entrants et sortants
    query(':enter, :leave', [
      style({
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        // On préserve la hauteur exacte du contenu sortant
        height: '100%'
      })
    ], { optional: true }),

    // État initial
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      style({ opacity: 1 })
    ], { optional: true }),

    // Séquence d'animation
    query(':leave', [
      animate('500ms ease-out', style({ opacity: 0 }))
    ], { optional: true }),

    query(':enter', [
      animate('500ms ease-in', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);
