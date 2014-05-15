'use strict';

angular.module('quelPrenomApp')
  .controller('ChooseCtrl', function ($scope) {
    $scope.alphabet = [];

     var a = 97;
     for (var i = 0; i<26; i++) {
       $scope.alphabet.push(String.fromCharCode(a + i));
     }

     $scope.names = [
         'prenom1',
         'prenom2',
         'prenom3'
     ];

     $scope.yes = [];

     $scope.maybe = [];

     $scope.toggle = function(coll, value) {
       var where = $scope[coll].indexOf(value);
       var otherColl = coll == 'yes' ? 'maybe' : 'yes';
       if(where != -1) {
         $scope[coll].splice(where, 1);
       } else {
         $scope[coll].push(value);

         // it's a toggle feature we need
         var where2nd = $scope[otherColl].indexOf(value);
         if(where2nd != -1) {
           $scope[otherColl].splice(where2nd, 1);
         }
       }
     };
  });