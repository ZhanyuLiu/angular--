import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-zujian',
  templateUrl: './footer-zujian.component.html',
  styleUrls: ['./footer-zujian.component.scss']
})
export class FooterZujianComponent implements OnInit {

  public msg = "我是子组件的一个msg";


  // 事件驱动
  @Output() private outer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    alert("我是子组件的run方法");
  }

  setEvent() {
    this.outer.emit('我是子组件的数据');
  }

}
