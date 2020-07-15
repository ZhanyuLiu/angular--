import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public picUrl = 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'; // 百度的图片地址
  public list:any[] = [
    {
      "title": "我是新闻1"
    },{
      "title": "我是新闻2"
    },{
      "title": "我是新闻3"
    },
  ];

  public flag:boolean = true;

  public orderStatus:number = 2;

  public attr:string = 'blue';

  public today:any = new Date();

  public title:string = "我是一个title";

  public keywords:string = "这是默认值";


  constructor() { 
    console.log(this.today)
  }

  ngOnInit(): void {
  }

  run() {
    alert("这是一个自定义方法");
  }

  getData() {
    alert(this.title);
  }

  setData() {
    this.title = "我是一个改变后的title";
  }

  runEvent(event) {
    var dom:any = event.target;
    dom.style.color = 'red';
  }

  keyDown(e) {
    if(e.keyCode == 13){
      console.log("按了一下回车！");
    }else{
      console.log(e);
      // e.target获取当前dom对象
      // console.log(e.target.value);
    }
  }

  keyUp(e) {
    if(e.keyCode == 13){
      console.log(e.target.value);
      console.log("按了一下回车！");
    }
  }

  changekeywords() {
    this.keywords = "我是改变后的值";
  }

  getkeywords() {
    console.log(this.keywords);
  }

}
