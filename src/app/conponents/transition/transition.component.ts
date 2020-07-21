import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showside() {
    // 原生js获取dom节点

    var asideDom:any = document.getElementById('aside');
    asideDom.style.transform = "translate(0, 0)";
  }

  hideside() {
    // 原生js获取dom节点

    var asideDom:any = document.getElementById('aside');
    asideDom.style.transform = "translate(100%, 0)";
  }

}
