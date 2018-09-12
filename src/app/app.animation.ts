import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const inOutAnim = trigger('inOut',[
  transition(':enter',[
    style({
      opacity:0
    }),
    animate('2s',style({opacity:1}))
  ]),
  transition(':leave',animate('2s',style({
    opacity:0
  })))
]);


export const inOutHAnim = trigger('inOutH',[
  transition(':enter',[
    style({
      height:'0px',
      overflow:'hidden'
    }),
    animate('500ms',style({
      height:'*'}))
  ]),
  transition(':leave',animate('500ms',style({
    height:0
  })))
]);


export const fadeInOut = trigger('fadeInOut',[
  transition(':enter',[
    query(':self',[
      style({opacity:0}),
      stagger(100,animate(1000,style({opacity:1})))
    ],{optional:true})
  ])
]);
