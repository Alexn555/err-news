import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DataNewsType } from '../../model/newsModel';

@Component({
  selector: 'news-category',
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class NewsCategory {
  @Input() category: any = { key: '1' };
  useMouse: boolean = false;
  position: number = 0;
  move: number = 50;

  @ViewChild('showboard')
  container!: ElementRef<HTMLElement>;

  @ViewChild('arrLeft')
  arrLeft!: ElementRef<HTMLElement>;
  @ViewChild('arrRight')
  arrRight!: ElementRef<HTMLElement>;

  /*@HostListener('document:mousemove', ['$event'])
  handleMouseMove($event: MouseEvent) {
    if (this.useMouse) {
      this.container.nativeElement.style.left = ($event.clientX - 50) + "px";
    }
  }*/

  trackCategoryShows(index: number, show: any) {
    return show;
  }

  prev() {
    let maxWd = parseInt(this.container.nativeElement.style.width);
    //this.container.nativeElement.style.left = (this.position < maxWd ? this.position + 50 : 0)+ 'px';
    this.container.nativeElement.style.left = this.position + this.move + 'px';
    this.position = parseInt(this.container.nativeElement.style.left);
    this.arrLeft.nativeElement.style.left = -this.position + 'px';
    this.arrRight.nativeElement.style.right = this.position + 'px';
  }

  next() {
    this.container.nativeElement.style.left = this.position - this.move + 'px';
    this.position = parseInt(this.container.nativeElement.style.left);
    this.arrLeft.nativeElement.style.left = -this.position + 'px';
    this.arrRight.nativeElement.style.right = this.position + 'px';
  }
}
