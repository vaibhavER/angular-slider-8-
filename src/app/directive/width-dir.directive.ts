import { Directive, ElementRef, Renderer2, HostListener, Output, EventEmitter, ViewChild } from '@angular/core';
import { CloneDirDirective } from './clone-dir.directive';

@Directive({
  selector: '[appWidthDir]'
})
export class WidthDirDirective {

  len = 0;
  cond = false;
  data = null;
  arraKey = [];
  itemsCal = 0;
  condLopp = 0;
  itemsLen = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @ViewChild(CloneDirDirective, { static: true }) clone: CloneDirDirective;

  @HostListener('window:resize', ['$event']) windowResize() {
    if (this.cond) {
      
    }
  }

  callAfter(data: any) {
    this.condLopp++;
    if(this.condLopp == 1) {
      this.itemsLen = this.el.nativeElement.parentElement.attributes.data_len.value;
    }
    this.itemsCal = this.el.nativeElement.parentElement.attributes.data_items.value;
    // console.log(this.itemsCal)
    this.data = data;
    this.respData();
    this.calcWidth(); // length calculuate
    this.lengthSlider();
    this.cond = true;
  }

  ngAfterViewInit() {
  }


  lengthSlider() {
    let a = null;
  //  console.log(this.calcItems())
    if (this.itemsCal > 1) {
      a = this.calcWidth() * this.calcItems();
      this.childWidth(true);
      this.renderer.setAttribute(this.el.nativeElement.parentElement, 'data_len', this.calcItems().toString());
    } else {
      a = this.calcWidth() * this.itemsLen;
      this.childWidth(false);
      this.renderer.setAttribute(this.el.nativeElement.parentElement, 'data_len', this.calcItems().toString());
    }
   // console.log(a);
    this.renderer.setStyle(this.el.nativeElement, 'width', '' + a + 'px');
  }


  childWidth(a: boolean) {
    setTimeout(() => {
      const b = this.el.nativeElement.querySelectorAll('.slider');
      b.forEach((key: any) => {
        if (a) {
          this.renderer.setStyle(key, 'width', '' + this.calcWidth() / this.itemsCal + 'px');
        } else {
          this.renderer.setStyle(key, 'width', '' + this.calcWidth() + 'px');
        }
      });
    }, 0);
  }

  calcWidth() {
    if (window.innerWidth - this.el.nativeElement.parentElement.offsetWidth < 20) {
      return window.innerWidth;
    } else {
      return this.el.nativeElement.parentElement.offsetWidth;
    }
  }

  calcItems() { //calculate length
    const a = this.itemsCal;
    const b = this.itemsLen;
    const c = Math.ceil(b / Number(a));
    return c;
  }


  respData() {
    for (let x in this.data.resp) {
      this.arraKey.push(Number(x.split('_')[1]));
    }
    this.arraKey.sort((a: any, b: any) => { return a - b });
    this.calRespMedia();

  }

  calRespMedia() {
    for (let i = 0; i < this.arraKey.length; i++) {
      if (this.arraKey.length - 1 > i) {
        const a = window.matchMedia('(min-width:' + this.arraKey[i] + 'px) and (max-width: ' + Number(this.arraKey[i + 1] - 1) + 'px)');
        const r = window.matchMedia('(min-width:' + Number(this.arraKey[this.arraKey.length - 1]) + 'px) and (max-width: ' + window.innerWidth + 'px)');
        if (a.matches || r.matches) {
          let b = null;
          if (r.matches) {
            b = this.arraKey[this.arraKey.length - 1];
          } else {
            b = this.arraKey[i];
          }
          this.itemsCal = Number(this.data.resp['_' + b + '']);
          console.log(this.itemsCal);
          this.renderer.setAttribute(this.el.nativeElement.parentElement, 'data_items', this.itemsCal.toString());
        }
      }
    }
  }

  ngOnInit() {
  }

  // window.matchMedia('(max-width: 600px)')

}
