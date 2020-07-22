import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-zujian',
  templateUrl: './home-zujian.component.html',
  styleUrls: ['./home-zujian.component.scss']
})
export class HomeZujianComponent implements OnInit {

  public title: string = "首页组件的标题";
  public msg: string = "我是父组件的msg";

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    alert("我是父组件的run方法");
  }

}
