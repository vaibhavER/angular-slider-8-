import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DotNavDirective } from './dot-nav.directive';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  elem = this.el.nativeElement;

  widMain = null;
  dataId = null;
  dataCount = null;
  condDot = null;

  constructor(private el: ElementRef, private render: Renderer2, private dotNav: DotNavDirective) { }

  
  @HostListener('window: keydown', ['$event']) callFun(event: KeyboardEvent) {
    if (this.condDot != null) {
      let constChck = this.elem.attributes.data_key.value;
      if (constChck == 'true') {
        this.keymousecond(event);
      }
    }
  }

  @HostListener('mousewheel', ['$event']) onMouseWheel(event: MouseWheelEvent) {
    if (this.condDot != null) {
      let constChck = this.elem.attributes.data_wheel.value;
      event.preventDefault();
      if (constChck == 'true') {
        this.keymousecond(event);
      }
    }
    //  return false;
  }

  keymousecond(event: any) {
    let cc = Number(this.elem.attributes.data_count.value);
    if (event.keyCode == 37 || event.deltaY < 0) {
      if (cc == 0) {
        return false
      } else {
        this.setAttr();
      }
    }
  }




  ngAfterViewInit() {

  }

  callAfter() {
    this.render.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
    let condCheck = this.elem.attributes.data_nav.value;
    this.condDot = this.elem.attributes.data_dot.value;
    if (condCheck == 'true') {
      this.mainCal();
    }
  }

  mainCal() {
    this.render.listen(this.elem.querySelector('#prev'), 'click', () => {
      this.setAttr();
    });
  }


  setAttr() {
    this.windowWid();
    this.dataId = this.el.nativeElement.attributes.data_id.value;
    this.widthCalc();
  }

  widthCalc() {
    this.render.setStyle(this.el.nativeElement.children[0], 'transform', 'translate3d(-' + (Number(this.dataId) - Number(this.widMain)) + 'px,0,0)');
    this.render.setAttribute(this.el.nativeElement, 'data_id', (Number(this.dataId) - Number(this.widMain)).toString());
    let countLen = Number(this.elem.attributes.data_count.value);
    countLen = countLen - 1;
    this.render.setAttribute(this.el.nativeElement, 'data_count', countLen.toString());
    this.dataCount = this.el.nativeElement.attributes.data_count.value;
    if (this.condDot == 'true') {
      this.dotNav.activetop(this.dataCount); //pass dot nav
    }
    this.navDisable();
  }

  navDisable() {
    const lenNext = this.elem.querySelector('#next');
    if (lenNext != null) {
      if (this.dataCount == 0) {
        this.render.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
        this.render.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
      } else {
        this.render.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
      }
    }
  }

  windowWid() {
    if (window.innerWidth - this.el.nativeElement.offsetWidth < 20) {
      this.widMain = window.innerWidth;
    } else {
      this.widMain = this.el.nativeElement.offsetWidth;
    }
  }


}
