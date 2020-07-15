import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 引入表单相关的模块，才能用双向数据绑定
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './conponents/news/news.component';
import { HomeComponent } from './conponents/home/home.component';
import { HeaderComponent } from './conponents/header/header.component';
import { FormComponent } from './conponents/form/form.component';

@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [  //配置当前模块运行依赖的其他模块
    BrowserModule,
    FormsModule
  ],
  providers: [], // 配置项目所需要的服务
  bootstrap: [AppComponent] //指定应用的主视图（称为根组件），通过引导根APPmodule来启动应用，这里一般写的是根组件的
})

//根模块不要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
