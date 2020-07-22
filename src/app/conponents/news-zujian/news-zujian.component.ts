import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news-zujian',
  templateUrl: './news-zujian.component.html',
  styleUrls: ['./news-zujian.component.scss']
})
export class NewsZujianComponent implements OnInit {

  @ViewChild('footer') footer:any;

  constructor() { }

  ngOnInit(): void {
  }

  getChildMsg() {
    // 获取子组件的数据
    alert(this.footer.msg);
  }

  getChildrun() {
    this.footer.run();

  }


  run(e) {
    console.log(e);
    alert('我是父组件的run方法');
  }

}
