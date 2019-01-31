import { element } from 'protractor';
import { MovableDirective } from './movable.directive';
import { Directive, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

interface Boundaries {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

@Directive({
  selector: '[appMovableArea]'
})
export class MovableAreaDirective implements AfterContentInit {
  @ContentChildren(MovableDirective) movables: QueryList<MovableDirective>;
  private boundaries: Boundaries;

  private subscriptions: Subscription [] = [];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private element: ElementRef) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit(): void {
    this.movables.changes.subscribe(() => {
      this.subscriptions.forEach(s => s.unsubscribe());
      this.movables.forEach(movable => {
        movable.dragStart.subscribe(() => this.measureBoundaries(movable));
        movable.dragMove.subscribe(() => this.maintainBoundaries(movable));
      });
    });
    this.movables.notifyOnChanges();
  }
  private measureBoundaries(movable: MovableDirective) {
    const viewRect: ClientRect = this.element.nativeElement.getBoundingClientRect();
    const movableClientRect: ClientRect = movable.element.nativeElement.getBoundingClientRect();

    this.boundaries = {
      minX: viewRect.left - movableClientRect.left + movable.position.x,
      maxX: viewRect.right - movableClientRect.right + movable.position.x,
      minY: viewRect.top - movableClientRect.top + movable.position.y,
      maxY: viewRect.bottom - movableClientRect.bottom + movable.position.y,

    };
  }

  private maintainBoundaries(movable: MovableDirective) {

    movable.position.x = Math.max(this.boundaries.minX, movable.position.x);
    movable.position.x = Math.min(this.boundaries.maxX, movable.position.x);
    movable.position.y = Math.max(this.boundaries.minY, movable.position.y);
    movable.position.y = Math.min(this.boundaries.maxY, movable.position.y);


  }
}
