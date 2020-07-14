import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // 定义普通数据

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
  public content:any = "<h2>我是一个HTML标签</h2>";

// 定义数组
  public arr = ['新闻1','新闻2','新闻3'];
  //推荐写法
  public list:any[] = ['我是第一个新闻','我是第二个新闻','我是第三个新闻'];
  public items:Array<number> = [111, 222, 333];

  public userlist:any[] = [{
    username:"张三",
    age:20
  },{
    username:"李四",
    age:21
  },{
    username:"王五",
    age:25
  }];

  //嵌套循环
  public cars:any[] = [
    {
      cate:"宝马",
      list:[
        {
          title:"宝马x1",
          price:'30万'
        },{
          title:"宝马x2",
          price:'30万'
        },{
          title:"宝马x3",
          price:'40万'
        }
      ]
    },
    {
      cate:"奥迪",
      list:[
        {
          title:"奥迪x1",
          price:'25万'
        },{
          title:"奥迪x2",
          price:'20万'
        },{
          title:"奥迪x3",
          price:'20万'
        }
      ]
    },
    {
      cate:"大众",
      list:[
        {
          title:"大众x1",
          price:'20万'
        },{
          title:"大众x2",
          price:'10万'
        },{
          title:"大众x3",
          price:'15万'
        }
      ]
    }
  ]

  constructor() { 
    this.message = "这是给属性赋值--（改变属性的值）";

    // 获取属性值
    console.log(this.msg);
    // 改变属性值
    this.msg = "我是改变后的msg的值";
  }

  ngOnInit(): void {
  }

}
