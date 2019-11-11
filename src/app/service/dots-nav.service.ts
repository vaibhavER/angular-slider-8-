import { Injectable, ElementRef, Output, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class DotsNavService {

  constructor(private el: ElementRef) { }

  @Output() dataPass = new EventEmitter;

  passData(vv: string) {
   // console.log(vv);
    this.dataPass.emit(vv);
  }

  ngAfterViewInit() {
    // console.log(this.el.nativeElement.querySelector('.slider'));
  }
}
