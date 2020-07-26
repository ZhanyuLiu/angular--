import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from "../../service/storage.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  public list:any[] = [];

  constructor( public http:HttpClient, public httpservice:StorageService ) { 
  }

  ngOnInit(): void {
  }

  // 1、get请求
  getData() {
    // alert("getdata");
    //接口
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=> {
         console.log(response);
         this.list = response.result;
    });
  }

  doLogin() {
    // // alert('zhixing');
    // 手动设置请求的类型
    // const httpOptions = { headers:new HttpHeaders({'COntent-Type':application/json})};
    // // 存在跨域
    // var api = "http://127.0.0.1:3000/doLogin";
    // this.http.post(api,{"username":"zhangsan","age":20},httpOptions).subscribe((respone) => {
    //   console.log(respone);
    // });
  }

  // 2、jsonp请求
  gettJsonData() {

  // jsonp请求，服务器必须得支持jsonp
  // http://a.itying.com/api/productlist?callback=xxx
  // http://a.itying.com/api/productlist?cb=xxx
    let api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api, 'callback').subscribe((response)=> {
      console.log(response)
    });
  }

  gettAxiosData() {
    let api = "http://a.itying.com/api/productlist";
    this.httpservice.axiosGet(api).then((data)=>{

    })
 }
}
