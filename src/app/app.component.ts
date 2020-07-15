import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo';

  // public isHide:boolean = false;

  constructor(){ // 构造函数
    // var app = angular.module('myApp', []);
    // app.controller('formCtrl', function($scope) {
    //   $scope.myVar = false;
    //   $scope.formclick = function() {
    //     $scope.myVar = !$scope.myVar;
    //   }
    // });

  }

  // formclick(e) {
  //   e.target.isHide = !e.target.myVar;
  // }
}
