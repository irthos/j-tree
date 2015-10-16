"use strict";angular.module("jtree",["firebase"]),angular.module("jtree").directive("admin",["Data",function(e){return{templateUrl:"scripts/admin/admin-d.html",restrict:"EA",scope:{},link:function(e,t,r){},controller:["$scope",function(t){t.data=e}]}}]),angular.module("jtree").directive("capture",function(){return{templateUrl:"scripts/capture/capture-d.html",restrict:"EA",link:function(e,t,r){},controller:["$scope",function(e){}]}}),angular.module("jtree").factory("Api",function(){var e={};return e.methods={},e.models={capture:{},usage:{},offers:{}},e});var fb=Firebase,ref="https://irthos.firebaseio.com/tyree";console.log(fb,ref),angular.module("jtree").factory("Data",["$firebaseObject","$firebaseArray","$firebaseAuth",function(e,t,r){var a={},o=new fb(ref);return a.data={dataObj:e(o),dataArr:t(o)},a.methods={create:function(e,r){var a=ref+"/"+e,o=new fb(a);t(o).$loaded().then(function(e){e.$add(r)})},save:function(){},remove:function(t,r){var a=ref+"/"+t+"/"+r,o=new fb(a),n=e(o);n.$remove().then(function(e){},function(e){console.log("Error:",e)})}},a}]),angular.module("jtree").factory("Dummy",function(){var e={providers:["telstra","optus","voda","other"],plans:[{provider:"telstra",name:"telstra1",data:500,sms:50,calls:100},{provider:"telstra",name:"telstra2",data:5e3,sms:1100,calls:"unlimited"},{provider:"optus",name:"optus1",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus2",data:3e3,sms:900,calls:450},{provider:"voda",name:"voda1",data:500,sms:100,calls:150},{provider:"telstra",name:"telstra3",data:2500,sms:1e3,calls:500},{provider:"telstra",name:"telstra4",data:5e3,sms:1100,calls:200},{provider:"optus",name:"optus3",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus4",data:2e3,sms:950,calls:400},{provider:"voda",name:"voda4",data:500,sms:50,calls:50},{provider:"voda",name:"voda2",data:5e3,sms:2e3,calls:550},{provider:"voda",name:"voda3",data:5e3,sms:2e3,calls:550}]};return e}),angular.module("jtree").directive("iphone",["Api","Dummy","Data",function(e,t,r){return{templateUrl:"scripts/iphone/iphone-d.html",restrict:"EA",scope:{},link:function(e,t,r){},controller:["$scope",function(a){a.api=e,a.dummy=t,a.data=r}]}}]),angular.module("jtree").directive("offers",function(){return{templateUrl:"scripts/offers/offers-d.html",restrict:"EA",link:function(e,t,r){},controller:["$scope",function(e){}]}}),angular.module("jtree").directive("usage",function(){return{templateUrl:"scripts/usage/usage-d.html",restrict:"EA",link:function(e,t,r){},controller:["$scope",function(e){}]}});