import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMainComponent } from './slider-main/slider-main.component';
import { NavDirDirective } from './directive/nav-dir.directive';
import { WidthDirDirective } from './directive/width-dir.directive';
import { NextNavDirective } from './directive/next-nav.directive';
import { PrevDirective } from './directive/prev.directive';
import { DotNavDirective } from './directive/dot-nav.directive';
import { FormsModule } from '@angular/forms';
import { CloneDirDirective } from './directive/clone-dir.directive';



@NgModule({
  declarations: [
    SliderMainComponent,
    NavDirDirective,
    WidthDirDirective,
    NextNavDirective,
    PrevDirective,
    DotNavDirective,
    CloneDirDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SliderMainComponent
  ]
})
export class SliderModule { }
