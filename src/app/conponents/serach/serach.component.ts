import { Component, OnInit } from '@angular/core';
import { LocationChangeListener } from '@angular/common';

import { StorageService } from "../../service/storage.service";

// 初始化类01
// var storage = new StorageService();

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss'],
})
export class SerachComponent implements OnInit {

  public keywords:string;
  public historyList:any[] = [];

  constructor( public storage:StorageService) { 
    // console.log(storage);
    // let s = this.storage.get();
    // console.log(s)
  }

  ngOnInit(): void {
    // 数据的持久化
    console.log('页面刷新会触发生命周期函数！');
    var searchlist = this.storage.get('searchlist');
    if(searchlist) {
      this.historyList = searchlist;
    }
  }

  doSearch() {
    // 判断historyList中是否存在当前keywords
    if(this.historyList.indexOf(this.keywords) == -1){
      this.historyList.push(this.keywords);
      this.storage.set('searchlist', this.historyList);
    }
    this.keywords = '';
    console.log(this.keywords);
  }

  deleteHistory(key) {
    this.historyList.splice(key, 1);
    this.storage.set('searchlist', this.historyList);
  }

}
