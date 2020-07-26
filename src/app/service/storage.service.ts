import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
 // 同步方法
  get(key:string) {
    // return 'this is a service';
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key:string) {
    localStorage.removeItem(key);
  }


  // 异步方法

  getCallbackData(cb) {
    setTimeout(() => {
      var data = "张三";
      // return data;
      cb(data);
    },1000);
  }

  getPromiseData() {
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
        var data = "张三--promise";
        resolve(data)
      },3000);
    });
  }

  getRxjsData() {
    return new Observable((observe)=> {
      setTimeout(() => {
        var data = "张三--observe";
        observe.next(data)
      },3000);
    });
  }

// 多次执行
  getPromiseIntervalData() {
    return new Promise((resolve, reject)=> {
      setInterval(() => {
        var data = "张三--Interval";
        resolve(data)
      },3000);
    });
  }

  getRxjsIntervalData() {
    let count = 0;
    return new Observable((observe)=> {
      setInterval(() => {
        count++;
        var data = "张三--RxjsInterval" + count;
        observe.next(data)
      },2000);
    });
  }

  getRxjsIntervalNum() {
    let count = 0;
    return new Observable<any>((observe)=> {
      setInterval(() => {
        count++;
        observe.next(count)
      },1000);
    });
  }


  //axios请求数据
  axiosGet(api) {

    return new Promise((resolve, reject)=>{
      axios.get(api).then(function(response) {
        // console.log(response);
        resolve(response);
      })
    })
  }
}
