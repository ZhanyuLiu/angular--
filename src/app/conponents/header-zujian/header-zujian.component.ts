import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-zujian',
  templateUrl: './header-zujian.component.html',
  styleUrls: ['./header-zujian.component.scss']
})
export class HeaderZujianComponent implements OnInit {

  // 接收传过来的数据
 @Input() title:any;
 @Input() msg:any;
 @Input() run:any;
 @Input() home:any;

  constructor() { }

  ngOnInit(): void {
  }

  getParentMag() {
    alert(this.msg);
  }

  getParentrun() {
    // 执行父组件的run方法
    this.run();
  }
  // 将父组件传给子组件
  getParent() {
    alert(this.home.msg);
    this.home.run();
  }

}
