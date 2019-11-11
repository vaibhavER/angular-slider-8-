import { Component, OnInit, ViewChild, ElementRef, Renderer2, Host, HostListener } from '@angular/core';
import { NavDirDirective } from '../directive/nav-dir.directive';
import { HttpService } from '../service/http.service';
import { WidthDirDirective } from '../directive/width-dir.directive';
import { PrevDirective } from '../directive/prev.directive';
import { NextNavDirective } from '../directive/next-nav.directive';
import { DotNavDirective } from '../directive/dot-nav.directive';
import { CloneDirDirective } from '../directive/clone-dir.directive';

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.scss']
})

export class SliderMainComponent implements OnInit {

  dataGet: any;
  nat: null;
  sliderControl = null;
  sliderText = {};
  sliderLibrary = {};
  loader = true;
  data = null;

  
  constructor(private el: ElementRef, private rendere: Renderer2, private http: HttpService) {
    this.datget();
  }

  @ViewChild(NavDirDirective, { static: true }) createNav: NavDirDirective;
  @ViewChild('lenCalc', { static: true }) len: ElementRef;
  @ViewChild(WidthDirDirective, { static: true }) widths: WidthDirDirective;
  @ViewChild(PrevDirective, { static: true }) prevDir: PrevDirective;
  @ViewChild(NextNavDirective, { static: true }) nextDir: NextNavDirective;
  @ViewChild(DotNavDirective, { static: true }) dotDir: DotNavDirective;
  @ViewChild(CloneDirDirective, { static: true }) clone: CloneDirDirective;



  checkCnctn() {
    let cn = navigator.onLine;
    if (cn) {
      this.datget();
    } else {
      this.checkCnctn();
    }
  }


  datget() {
    this.http.getData('http://onlinedemo.best/sliderApi/get_data.php')
      .subscribe(
        resp => {
          this.data = resp;
          this.sliderControl = this.data.dataControl;
          this.sliderText = this.data.data;
          this.attrSelect(this.sliderControl);
          this.rendere.setAttribute(this.len.nativeElement, 'data_len', (this.data.length).toString());
          this.widths.callAfter(this.data);
          this.createNav.condCheck(this.sliderControl);
          this.prevDir.callAfter();
          this.nextDir.callAfter();
          this.dotDir.callAfter();
          this.loader = false;
          this.clone.callAfter(this.data.length);
        }
      )
  }

  @HostListener('window:resize', ['$event']) resize() {
    this.widths.callAfter(this.data);
    this.createNav.resetResp();
    this.prevDir.callAfter();
    this.nextDir.callAfter();
    this.dotDir.callAfter();
    this.clone.resetClone();
  }


  attrSelect(slidCont: any) {
    if (slidCont.nav == 'true') {
      this.rendere.setAttribute(this.len.nativeElement, 'data_nav', slidCont.nav);
    } else {
      this.rendere.setAttribute(this.len.nativeElement, 'data_nav', slidCont.nav);
    }
    if (slidCont.dot == 'true') {
      this.rendere.setAttribute(this.len.nativeElement, 'data_dot', slidCont.dot);
    } else {
      this.rendere.setAttribute(this.len.nativeElement, 'data_dot', slidCont.dot);
    }
    if (slidCont.keyBoard == 'true') {
      this.rendere.setAttribute(this.len.nativeElement, 'data_key', slidCont.keyBoard);
    } else {
      this.rendere.setAttribute(this.len.nativeElement, 'data_key', slidCont.keyBoard);
    }
    if (slidCont.mouse == 'true') {
      this.rendere.setAttribute(this.len.nativeElement, 'data_wheel', slidCont.mouse);
    } else {
      this.rendere.setAttribute(this.len.nativeElement, 'data_wheel', slidCont.mouse);
    }
    this.rendere.setAttribute(this.len.nativeElement, 'data_items', slidCont.items);
  }



  ngAfterViewInit() {
  }

  ngOnInit() {
  }


}
