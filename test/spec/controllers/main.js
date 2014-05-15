'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('quelPrenomApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('have default sex', function () {
    expect(scope.sex).toBe('male');
  });

  it('have default parent', function () {
    expect(scope.parent).toBe('dad');
  });
});
