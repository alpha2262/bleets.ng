"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetsIndexController", [
    "GrumbleFactory",
    BleetIndexControllerFunction
  ]);

function BleetIndexControllerFunction(){
  this.bleets = BleetFactory.query()
}




}())
