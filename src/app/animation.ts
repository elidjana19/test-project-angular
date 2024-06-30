import{trigger, transition, style, animate} from '@angular/animations';


export const slideFromBottomAnimation = trigger('slideFromBottomAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }), // Start from below
    animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })), // Moving up
  ]),
]);
