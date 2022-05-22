import { Directive ,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appClassToggle]'
})
export class ClassToggleDirective {
   
  constructor(private element:ElementRef) {
    
    // this.element.nativeElement.style.color = this.color;
  }
  
  @Input() set backgroundColor(bgColor: string) {
    this.element.nativeElement.style.backgroundColor = bgColor;
  }

  @Input() set color(c: string) {
    this.element.nativeElement.style.color = c;
  }

}
