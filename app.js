(function(){
'use strict'

angular.module('ShoppingListChecker',[])
.controller('listToBuy',listToBuy)
.controller('listDone',listDone)
.service('justService',justService)

listToBuy.$inject = ['justService'];
function listToBuy(justService){
  listToBuy = this;
  listToBuy.everythingBought = false;
  listToBuy.arrToBuy = justService.getArrToBuy();
  listToBuy.buyIt = function (indexOfItem) {
      justService.buyIt(indexOfItem);
    }
}

listDone.$inject = ['justService'];
function listDone(justService){
    listDone = this;
    listDone.nothingBought = true;
    listDone.arrHaveBought = justService.getArrHaveBought();
}

function justService(){
  var service = this;

  var arrToBuy = [
    {'name':'cookies','qty':'10'},
    {'name':'pepsi', 'qty':'2'},
    {'name':'milk','qty':'2'},
    {'name':'bread','qty':'3'},
    {'name':'butter','qty':'1'}
    ];
  var arrHaveBought = [];

  service.buyIt = function (par){
      arrHaveBought.push(arrToBuy[par])
      arrToBuy.splice(par,1);
      if (arrToBuy.length == 0){
        listToBuy.everythingBought = true;
      }
      if (arrHaveBought.length > 0){
        listDone.nothingBought = false;
      }
      return;
  }

  service.getArrToBuy = function (){
      return arrToBuy;
  }
  service.getArrHaveBought = function (){
      return arrHaveBought;
  }
}

})();
