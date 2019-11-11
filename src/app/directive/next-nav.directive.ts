import { Directive, ElementRef, Renderer2, HostListener, ViewChild, Input } from '@angular/core';
import { DotNavDirective } from './dot-nav.directive';

@Directive({
  selector: '[appNextNav]'
})
export class NextNavDirective {

  width = null;
  count = 0;
  countLen = 0;
  countCount = 0;
  elem = this.el.nativeElement;
  ev = null;
  condDot = null;
  condResize = true;

  constructor(private el: ElementRef, private renderer: Renderer2, private dotNav: DotNavDirective) { }



  @HostListener('window:resize') widthCal() {
    this.renderer.setAttribute(this.elem, 'data_count', '-1'.toString());
   // this.renderer.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
    this.condResize = false;
    this.setAtrr();
  }

  @HostListener('window: keydown', ['$event']) onKeyDown(event: any) {
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
    let cclen = Number(this.elem.attributes.data_len.value);
    if (event.keyCode == 39 || event.deltaY > 0) {
      if (cc == cclen - 1) {
        return false;
      } else if (cc == 0) {
        this.setAtrr();
      } else {
        this.setAtrr();
      }
    }
  }


  ngOnInit() {
  }

  callAfter() {
    let condCheck = this.elem.attributes.data_nav.value;
    this.condDot = this.elem.attributes.data_dot.value;
    if (condCheck == 'true') {
      this.mainCal();
    }
  }


  ngAfterViewInit() {
  }



  mainCal() {
    this.renderer.listen(this.elem.querySelector('#prev'), 'click', () => {
      this.count = Number(this.elem.attributes.data_count.value);
    });

    this.renderer.listen(this.elem.querySelector('#next'), 'click', () => {
      this.condResize = true;
      this.setAtrr();
    });

  }

  setAtrr() {
    this.widthMain();
    this.count = Number(this.elem.attributes.data_count.value);
    this.renderer.setAttribute(this.elem, 'data_count', (++this.count).toString());
    this.countCount = Number(this.elem.attributes.data_count.value);
    if (this.condDot == 'true') {
      this.dotNav.activetop(this.countCount);
    }
    this.widthCalc();
  }



  widthMain() {
    if (window.innerWidth - this.el.nativeElement.offsetWidth < 20) {
      this.width = window.innerWidth;
    } else {
      this.width = this.el.nativeElement.offsetWidth;
    }
  }

  widthCalc() {
  //  console.log(this.countCount);
    this.renderer.setStyle(this.elem.children[0], 'transform', 'translate3d(-' + this.width * this.countCount + 'px,0,0)');
    this.renderer.setAttribute(this.elem, 'data_id', (this.width * this.countCount).toString()); 
    if(this.condResize) {
       this.navDisable();
    }
  }

  navDisable() {
    const lenNext = this.elem.querySelector('#next');
    if (lenNext != null) {
      console.log(this.countCount ,Number(this.elem.attributes.data_len.value - 1))
      if (this.countCount == Number(this.elem.attributes.data_len.value - 1)) {
        this.renderer.setAttribute(this.el.nativeElement.querySelector('#next'), 'disabled', 'true');
        this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
        return true;
      } else {
        this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
      }
    }
  }


}
