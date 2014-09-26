'use strict'

app.controller('mainCtrl', function($scope){
  $scope.courses = [
  {name: 'Course #1', featured: true, published: new Date('10/5/2013')},
  {name: 'Course #2', featured: true, published: new Date('10/6/2013')},
  {name: 'Course #3', featured: false, published: new Date('10/7/2013')},
  {name: 'Course #4', featured: false, published: new Date('10/8/2013')},
  {name: 'Course #5', featured: true, published: new Date('10/9/2013')},
  {name: 'Course #6', featured: true, published: new Date('10/10/2013')},
  {name: 'Course #7', featured: true, published: new Date('10/11/2013')},
  {name: 'Course #8', featured: true, published: new Date('10/12/2013')},
  {name: 'Course #9', featured: true, published: new Date('11/5/2014')},
  {name: 'Course #10', featured: true, published: new Date('12/5/2013')},
  {name: 'Course #11', featured: false, published: new Date('13/5/2013')},
  {name: 'Course #12', featured: false, published: new Date('14/5/2012')},
  {name: 'Course #13', featured: true, published: new Date('15/5/2013')},
  {name: 'Course #14', featured: false, published: new Date('16/5/2013')},
  {name: 'Course #15', featured: true, published: new Date('17/5/2013')}
  ]
});