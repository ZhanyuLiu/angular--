import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  public flag:boolean = true;

  constructor() { }

 // 生命周期函数
  ngOnInit(): void {
    // let oBox:any = document.getElementById('box');
    // console.log(oBox.innerHTML);
    // oBox.style.color = "red";
    
    // // 获取不到dom节点
    // let oBox1:any = document.getElementById('box1');
    // console.log(oBox1.innerHTML);
    // oBox1.style.color = "blue";
  }

  // 生命周期函数
  // 视图加载完成以后触发的方法  dom加载完成  （建议将dom操作放在这个里面 ）
  ngAfterViewInit():void {
    let oBox:any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = "red";

    let oBox1:any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = "blue";
  }

}
