import { Directive, ElementRef, Renderer2, ViewChild, HostListener, ɵConsole } from '@angular/core';

@Directive({
  selector: '[appNavDir]'
})
export class NavDirDirective {

  constructor(private el: ElementRef, private rendere: Renderer2) { }


  obj = null;
  callAfterdata = null;


  @HostListener('window: resize', ['$event']) resize() {


  }

  resetResp() {
    if (this.callAfterdata != null) {
      const a = this.el.nativeElement;
      const b = a.getElementsByClassName('navClass')[0];
      const c = a.getElementsByClassName('nav_dots')[0];
      if (b != undefined || c != undefined) {
        if (b != undefined) {
          a.removeChild(b);
        }
        if (c != undefined) {
          a.removeChild(c);
        }
      }
      this.callMain();
    }
  }




  condCheck(val: any) {
    this.callAfterdata = true;
    this.obj = val;
    this.callMain();
  }

  callMain() {
    if (this.obj.nav == 'true') this.createNav();
    this.callAfter();
  }

  createNav() {
    const di = this.rendere.createElement('div');
    this.rendere.addClass(di, 'navClass');


    const a = this.rendere.createElement('button');
    this.rendere.setAttribute(a, 'type', 'button');
    this.rendere.addClass(a, 'nav');
    this.rendere.addClass(a, 'nav-prev');
    this.rendere.setProperty(a, 'id', 'prev');
    const d = this.rendere.createText('prev');
    this.rendere.appendChild(a, d);

    const e = this.rendere.createElement('button');
    this.rendere.setAttribute(e, 'type', 'button');
    this.rendere.addClass(e, 'nav');
    this.rendere.addClass(e, 'nav-next');
    this.rendere.setProperty(e, 'id', 'next');
    const h = this.rendere.createText('next');
    this.rendere.appendChild(e, h);


    this.rendere.appendChild(di, a);
    this.rendere.appendChild(di, e);

    this.rendere.appendChild(this.el.nativeElement, di);
  }


  navDots() {
    const a = this.rendere.createElement('div');
    this.rendere.addClass(a, 'nav_dots');

    const len = this.el.nativeElement.attributes.data_len.value;
    for (let i = 0; i < len; i++) {
      const b = this.rendere.createElement('button');
      this.rendere.setAttribute(b, 'type', 'button');
      this.rendere.setAttribute(b, 'id', i.toString());
      this.rendere.addClass(b, 'dotsInner');
      this.rendere.appendChild(a, b);
    }
    this.rendere.appendChild(this.el.nativeElement, a);
    this.rendere.addClass(this.el.nativeElement.querySelector('.dotsInner'), 'active');

  }

  callAfter() {
    if (this.obj.dot == 'true') this.navDots();
    this.rendere.setAttribute(this.el.nativeElement, 'data_count', (0).toString());
  }

  ngAfterViewInit() {

  }

  ngOnInit() {

  }

}
