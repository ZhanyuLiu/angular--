import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

// 指定属性
  title = "我是一个新闻组件";
  public msg = "我是新闻组件的msg";
// 定义数据时建议指定类型
  username:string = "张三";
  public student:any = "我是一个学生的属性（数据）";

// 指定对象
  public userinfo:any = {
    username:"张三",
    age:'20'
  }
  public message:any; // 可以只定义对象，不赋值，在构造函数或方法中赋值

  constructor() { 
    this.message = "这是给属性赋值--（改变属性的值）";

    //获取属性值
    console.log(this.msg);
    //改变属性值
    this.msg = "我是改变后的msg的值";
  }

  ngOnInit(): void {
  }

}
