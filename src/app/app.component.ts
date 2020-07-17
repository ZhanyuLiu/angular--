import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo';

  public flag1:boolean = true;
  public flag2:boolean = true;
  public flag3:boolean = true;
  public flag4:boolean = true;

  constructor(){ // 构造函数

  }

  formclick1() {
    this.flag1 = !this.flag1
  }

  formclick2() {
    this.flag2 = !this.flag2
  }
  formclick3() {
    this.flag3 = !this.flag3
  }
  formclick4() {
    this.flag4 = !this.flag4
  }
}
