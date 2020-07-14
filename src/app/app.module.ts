import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './conponents/news/news.component';
import { HomeComponent } from './conponents/home/home.component';
import { HeaderComponent } from './conponents/header/header.component';

@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [  //配置当前模块运行依赖的其他模块
    BrowserModule
  ],
  providers: [], // 配置项目所需要的服务
  bootstrap: [AppComponent] //指定应用的主视图（称为根组件），通过引导根APPmodule来启动应用，这里一般写的是根组件的
})

//根模块不要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
