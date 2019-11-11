import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appCloneDir]'
})

export class CloneDirDirective {

  constructor(private el: ElementRef, renderer: Renderer2) { }

  loopCount = 0;
  mainLen = 0;
  wid = window.innerWidth;

  callAfter(len: any) {
    this.mainLen = Number(len);
    this.cloneFun();

  }

  @HostListener('window:resize', ['$event']) resize() {
    // this.resetClone();
  }

  resetClone() {
    const a = this.el.nativeElement.querySelectorAll('.sliderMain')[0];
    let b = a.getElementsByClassName('slider_clone');
    for (let i = 0; i < this.loopCount; i++) {
      a.removeChild(b[0]);
    }
    this.cloneFun();
  }



  cloneFun() {
    let c = 0;
    const a = this.el.nativeElement.attributes.data_items.value;
    const b = this.mainLen % a;
    if (b == 0) {
      this.loopCount = 0;
    } else {
      this.loopCount = a - b;
    }
    this.cloneInsert(this.loopCount);
  }


  cloneInsert(loop: Number) {
    let a = this.el.nativeElement.querySelectorAll('.sliderMain')[0];
    setTimeout(() => {
      const b = a.getElementsByClassName('slider');
      for (let i = 0; i < loop; i++) {
        let d = b[i].cloneNode(true);
        d.id = 'slider_clone_' + i + '';
        d.className = 'slider slider_clone';
        a.appendChild(d);
      }
    }, 0);
  }
}
