import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 引入表单相关的模块，才能用双向数据绑定
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './conponents/news/news.component';
import { HomeComponent } from './conponents/home/home.component';
import { FormComponent } from './conponents/form/form.component';
import { SerachComponent } from './conponents/serach/serach.component';
import { TodolistComponent } from './conponents/todolist/todolist.component';

// 引入服务
import { StorageService } from "./service/storage.service";
import { Home1Component } from './conponents/home1/home1.component';
import { DomViewComponent } from './conponents/dom-view/dom-view.component';
import { HeaderComponent } from './conponents/header/header.component';
import { TransitionComponent } from './conponents/transition/transition.component';
import { HomeZujianComponent } from './conponents/home-zujian/home-zujian.component';
import { HeaderZujianComponent } from './conponents/header-zujian/header-zujian.component';
import { NewsZujianComponent } from './conponents/news-zujian/news-zujian.component';
import { FooterZujianComponent } from './conponents/footer-zujian/footer-zujian.component';

@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SerachComponent,
    TodolistComponent,
    Home1Component,
    DomViewComponent,
    HeaderComponent,
    TransitionComponent,
    HomeZujianComponent,
    HeaderZujianComponent,
    NewsZujianComponent,
    FooterZujianComponent
  ],
  imports: [  //配置当前模块运行依赖的其他模块
    BrowserModule,
    FormsModule
  ],
  providers: [ StorageService ], // 配置项目所需要的服务
  bootstrap: [AppComponent] //指定应用的主视图（称为根组件），通过引导根APPmodule来启动应用，这里一般写的是根组件的
})

//根模块不要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
