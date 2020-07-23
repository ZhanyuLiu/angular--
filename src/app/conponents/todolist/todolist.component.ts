import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StorageService } from "../../service/storage.service";

import { map, filter } from "rxjs/operators";
import { pipe } from 'rxjs';

/*服务的使用：
1、创建服务：ng g service service/storage
2、app.module.ts里面引入创建的服务，并且声明
    import { StorageService } from "./service/storage.service";
    providers: [ StorageService ]
3、在用到的组件里面
    // 引入服务
        import { StorageService } from "../../service/storage.service";
    // 初始化服务
        constructor( public storage:StorageService) { 
            // console.log(storage);
            let s = this.storage.get();
            console.log(s)
          }
*/
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword:string;
  public todolist:any[] = [];

  constructor(public storage:StorageService) { 
    // console.log(this.storage.get());
  }

  ngOnInit(): void {
    // 1.同步方法
    var todoList = this.storage.get('todolist');
    if(todoList) {
      this.todolist = todoList;
    }

    // 2.callback获取异步数据
    this.storage.getCallbackData((data)=>{
      console.log(data);
    });

    // 3.Promise获取异步数据
    var promiseData = this.storage.getPromiseData();
    promiseData.then((data)=> {
      console.log(data);
    });

    // // 4.rxjs获取异步方法里面的数据
    // var rxjsData = this.storage.getRxjsData();
    // rxjsData.subscribe((data)=> {
    //   console.log(data);
    // })

    // 5.过一秒以后撤回刚才的操作
    var streen = this.storage.getRxjsData();
     var d = streen.subscribe((data)=> {
      console.log(data);
    });

    setTimeout(()=> {
      d.unsubscribe();  // 取消订阅
    },1000);

    // 6.promise 执行多次（没有这个能力）
    var IntervalData = this.storage.getPromiseIntervalData();
    IntervalData.then((data)=> {
      console.log(data);
    });

    // 7.rxjs执行多洗 
    // var streenInterval = this.storage.getRxjsIntervalData();
    //  streenInterval.subscribe((data)=> {
    //   console.log(data);
    // });

    // 8.用工具方法对返回的数据进行处理
    // filter
    // var streenNum = this.storage.getRxjsIntervalNum();
    // streenNum.pipe(
    //   filter((value) => {
    //     if(value % 2 == 0){
    //       return true;
    //     }
    //   })
    // ).subscribe((data)=> {
    //   console.log(data);
    // });


    // map
    var streenNum = this.storage.getRxjsIntervalNum();
    streenNum.pipe(
      filter((value) => {
            if(value % 2 == 0){
              return true;
            }
          }),
      map((value) => {
        return value * value
      })
    ).subscribe((data)=> {
      console.log(data);
    });

  }

  doAdd(e) {
    if(e.keyCode == 13) {
      if(!this.todolistHasKeywords(this.todolist, this.keyword)) {
        this.todolist.push({
          title:this.keyword,
          status:0 // 0表示待办事项 1代表已完成事项
        });
        this.keyword = '';

        this.storage.set('todolist', this.todolist);
      }else{
        alert("数据已经存在");
        this.keyword = '';
      }
    }
      
  }

  deleteData(key) {
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);
  }

  // 如果数组中含有keyword返回true，否则返回false
  todolistHasKeywords(todolist:any, keyword:any) {
    // 异步会存在问题
    // todolist.array.forEach(value => {
    //   if(value.title == keyword) {
    //     return true;
    //   }
    // });
    if(!keyword) return false;
    for(var i=0; i < todolist.length; i++) {
      if(todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }

  checkboxChange() {
    this.storage.set('todolist', this.todolist);
  }

}
