import { Component, OnInit } from '@angular/core';
import { LocationChangeListener } from '@angular/common';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent implements OnInit {

  public keywords:string;
  public historyList:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doSearch() {
    // 判断historyList中是否存在当前keywords
    if(this.historyList.indexOf(this.keywords) == -1){
      this.historyList.push(this.keywords);
    }
    this.keywords = '';
    console.log(this.keywords);
  }

  deleteHistory(key) {
    this.historyList.splice(key, 1);
  }

}
