import { trigger, state, animate, style, transition} from '@angular/core'

export function moveIn() {
    return trigger('moveIn', [
        state('void', style({position: 'relative', width: "100%"}) ),
        state('*', style({position: 'relative', width: '100%'}) ),
        transition(':enter', [
            style({opacity: '0', transform: 'translateX(100px)'}),
            animate('.6s ease-in-out', style({opacity: '1', transform: 'translateX(0)'}))
        ]),
        transition(':leave', [
            style({opacity: '1', transform: 'translateX(0)'}),
            animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
        ])
    ]);
}

export function fallIn() {
    return trigger('fallIn', [
        transition(':enter', [
            style({opacity: '0', transform: 'translateY(40px)'}),
            animate('.4s .2s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            style({opacity: '1', transform: 'translateX(0)'}),
            animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
        ])
    ]);
}

export function fallInDown() {
    return trigger('fallInDown', [
        transition(':enter', [
            style({opacity: '0', transform: 'translateY(-40px)'}),
            animate('.4s .2s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            style({opacity: '1', transform: 'translateY(0)'}),
            animate('.3s ease-in-out', style({opacity: '0', transform: 'translateY(-200px)'}))
        ])
    ]);
}

export function moveInLeft() {
    return trigger('moveInLeft', [
        state('void', style({position: 'fixed', width: "100%"}) ),
        state('*', style({position: 'fixed', width: '100%'}) ),
        transition(':enter', [
            style({opacity: '0', transform: 'translateX(-100px)'}),
            animate('.6s .2s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            style({opacity: '1', transform: 'translateX(0)'}),
            animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
        ])
    ]);
}

export function moveInUp() {
    return trigger('moveInUp', [
        state('void', style({position: 'absolute', width: '96%'}) ),
        state('*', style({position: 'absolute', width: '96%'}) ),
        transition(':enter', [
            style({opacity: '0', transform: 'translateY(50px)'}),
            animate('.3s ease-in', style({opacity: '1', transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            style({opacity: '1', transform: 'translateY(0)'}),
            animate('.3s ease-in-out', style({opacity: '0', transform: 'translateY(100px)'}))
        ])
    ]);
}