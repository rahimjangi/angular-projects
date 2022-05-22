import { Directive,Input,ElementRef} from '@angular/core';

@Directive({
  selector: '[appNgClass]'
})
export class NgClassDirective {

  constructor(private element:ElementRef) { }

  @Input('appNgClass') set classList(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
