import { Directive, ElementRef, Renderer2, Output, EventEmitter, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appDotNav]'
})
export class DotNavDirective {


  elem = this.el.nativeElement;
  a = null;
  valuePass = null;
  condCheck = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // @Output() passCount = new EventEmitter;

  @HostListener('window:resize', ['$event']) windowResize() {
    if (this.condCheck) {
      //  this.calcWidth();
      //  this.lengthSlider();
    }
  }



  callAfter(){
    let constChck = this.elem.attributes.data_dot.value;
    if (constChck == 'true') {
      this.frstSt();
    }
  }

  ngAfterViewInit() {
   
  }

  frstSt() {
    this.a = this.elem.querySelector('.nav_dots')
    let b = this.a.querySelectorAll('.dotsInner');

    for (let index = 0; index < b.length; index++) {
      this.renderer.listen(b[index], 'click', (value) => {
        for (let index = 0; index < b.length; index++) {
          this.renderer.removeClass(b[index], 'active');
        }
        let idd = value.target.id;
        this.renderer.addClass(b[index], 'active');
        this.widthCalc(idd);
      })

    }
  }

  activetop(id: number) { // when click on arrow nav
    let b = this.a.querySelectorAll('.dotsInner');
    for (let index = 0; index < b.length; index++) {
      this.renderer.removeClass(b[index], 'active');
    }
    this.renderer.addClass(b[id], 'active');
  }


  widthCalc(idd: number) {
    this.renderer.setStyle(this.elem.children[0], 'transform', 'translate3d(-' + this.calcWidth() * idd + 'px,0,0)');
    this.renderer.setAttribute(this.elem, 'data_count', idd.toString());
    this.renderer.setAttribute(this.elem, 'data_id', (this.calcWidth() * idd).toString());
    this.disableNav();
  }


  disableNav() {
    let count = this.elem.attributes.data_count.value;
    const len = this.elem.attributes.data_len.value;
    const lenNext = this.elem.querySelector('#next');
    if (lenNext != null) {
      if (count == 0) {
        this.renderer.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
        this.renderer.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
      } else if (count == len - 1) {
        this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
        this.renderer.setAttribute(this.el.nativeElement.querySelector('#next'), 'disabled', 'true');
      } else {
        this.renderer.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
        this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
      }
    }

    //  this.passCount.emit(count);
  }

  
  calcWidth() {
    if (window.innerWidth - this.el.nativeElement.offsetWidth < 20) {
      return window.innerWidth;
    } else {
      return this.el.nativeElement.offsetWidth;
    }


  }

}
