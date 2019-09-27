import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export const fadeInAnimation = 
    trigger('fadeIn', [
        state('invisible', style({
            opacity: 0
        })),

        state('visible', style({
            opacity: 1
        })),

        transition('invisible => visible', [
            animate('500ms')
        ]),

        transition('visible => invisible', [
            animate('0ms')
        ])
    ]
);
