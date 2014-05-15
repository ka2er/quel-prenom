'use strict';

describe('Controller: ChooseCtrl', function () {

  // load the controller's module
  beforeEach(module('quelPrenomApp'));

  var ChooseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChooseCtrl = $controller('ChooseCtrl', {
      $scope: scope
    });
  }));

  it('should have a non empty name collection', function () {
    expect(scope.names.length).toBeGreaterThan(0);
  });

  it('should add name to yes collection', function () {
    scope.toggle('yes', 'prenom');
    expect(scope.yes).toContain('prenom');
  });

  it('should remove name to yes collection', function () {
    scope.toggle('yes', 'prenom');
    scope.toggle('yes', 'prenom');
    console.log(scope.yes);
    expect(scope.yes.length).toBe(0);
  });

  it('should unset yes when maybe is choose', function () {
    scope.toggle('yes', 'prenom');
    expect(scope.yes.length).toBe(1);
    expect(scope.maybe.length).toBe(0);
    scope.toggle('maybe', 'prenom');
    expect(scope.yes.length).toBe(0);
    expect(scope.maybe.length).toBe(1);
  });

  it('should unset maybe when yes is choose', function () {
    scope.toggle('maybe', 'prenom');
    expect(scope.yes.length).toBe(0);
    expect(scope.maybe.length).toBe(1);
    scope.toggle('yes', 'prenom');
    expect(scope.yes.length).toBe(1);
    expect(scope.maybe.length).toBe(0);
  });
});
