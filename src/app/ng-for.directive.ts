import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appNgFor]'
})
export class NgForDirective {

  constructor(private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>) { }

  @Input('appNgFor') set forLogic(n: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < n; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef, {index:i});
    }
    
  }

}
