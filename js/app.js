"use strict";

(function(){
  angular
  .module("blitter", [
    "ui.router",
    "bleets"
  ])
  .config([
    "stateProvider",
    Router
  ]);

function Router($stateProvider){
  $stateProvider
  .state("bleetIndex", {
    url: "/bleets",
    templateUrl: "js/bleets/index2.html",
    controller: "BleetIndexController",
    controllerAs: "BleetIndexViewModel"
  });

// add show, edit etc. here

}

}())
