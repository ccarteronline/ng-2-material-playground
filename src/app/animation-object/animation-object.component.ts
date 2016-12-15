import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-animation-object',
  templateUrl: './animation-object.component.html',
  styleUrls: ['./animation-object.component.css'],
  animations: [
      trigger('aniObjectChanged', [
          state('open', style({
              marginLeft: '500px'
          })),
          state('close', style({
              marginLeft: '0px'
          })),
          transition('open => close', animate('.7s')),
          transition('close => open', animate('.2s'))
      ])
  ]
})
export class AnimationObjectComponent implements OnInit {
  aniObject = 'close';
  constructor() { }

  ngOnInit() {
  }

  // Click event to toggle animation. Use a ternary to toggle the values,
  // Once changed, the animation will ensue either open or close.
  animateObject(e):void {
      this.aniObject = this.aniObject === 'close' ? 'open' : 'close';
  }

}
