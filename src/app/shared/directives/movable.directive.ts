import { DraggableDirective } from './draggable.directive';
import { Directive, HostListener, HostBinding, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableDirective {

  @HostBinding('style.transform') get transform(): SafeStyle {
    return this.santizer.bypassSecurityTrustStyle(`translateX(${this.position.x}px) translateY(${this.position.y}px)`);
  }


  private startPosition: Position;

  private reset = true;

  @Output() emitPosition = new EventEmitter();
  @Input() xx;
  @Input() yy;
  position: Position = {x: 0, y: 0};

  // tslint:disable-next-line:no-shadowed-variable
  constructor (private santizer: DomSanitizer, public element: ElementRef) {
    super();
    // console.log(this.positionEx);
  }
// tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.position.x = this.xx;
    this.position.y = this.yy;
  }
  @HostListener('dragStart', ['$event']) onDragStart(event: PointerEvent) {
    this.startPosition = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y
    };
  }
  @HostListener('dragMove', ['$event']) onDragMove(event: PointerEvent) {
    this.position.x = event.clientX - this.startPosition.x;
    this.position.y = event.clientY - this.startPosition.y;

  }
  @HostListener('dragEnd', ['$event']) onDragEnd(event: PointerEvent) {
    this.emitPosition.emit(this.position);
    // if (this.reset) {
    //   this.position = {x: 0, y: 0};
    // }
  }
}
