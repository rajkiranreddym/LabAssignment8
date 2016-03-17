/*describe('LoginCtrl', function () {
  beforeEach(angular.mock.module('starter'));

  var controller,scope,$controller,$rootScope;

  beforeEach(inject(function($controller,$rootScope){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    controller = $controller('LoginCtrl',{$scope:scope});
    scope=$rootScope.$new();
  }));

 // describe('ssovalid', function() {
    it('Tests the Full name feature of the application', function() {
      var sso = "RMYB9";
      var password="password";
      $scope.doLogin(sso,password);
      expect(scope.pass).toEqual('password');


      console.log(scope.sso);
      //expect($scope.ssovalid(sso)).toEqual('John Doe');   // succeeds
      //expect($scope.ssovalid('Tony' , 'Willams')).toEqual('John Doe');    // fails

    });

});*/

describe('LoginCtrl', function() {
  var $rootScope, scope, $controller, cotroller, $httpBackend, state;
  beforeEach(angular.mock.module('starter'));

  //angular.module('starter').run(function ($httpBackend) {
  //    $httpBackend.whenGET(/.*/).passThrough();
  //});
  //beforeEach(angular.mock.inject(function (_$httpBackend_) {
  //    $httpBackend = _$httpBackend_;;
  //}));
  beforeEach(inject(function ($rootScope, $controller, _$httpBackend_, $state) {
    scope = $rootScope.$new();
    // $rootScope.$digest();
    // state = $state;
    controller = $controller('LoginCtrl', {$scope: scope});
    //$httpBackend = _$httpBackend_;
    //$httpBackend.whenGET(/.*/).passThrough();
    //  $httpBackend.whenGET(/templates\/.*/).respond('');

  }));



  it('User SSO validation', function() {
    var sso = "RMYB9";
    var password = "password";
    expect(scope).toBeDefined();
    scope.doLogin(sso,password);
    expect(scope.name).toEqual('RMYB9');

  });

  it('SSO lenth validation', function() {
    var sso = "RMYB9";
    var password = "password";
    expect(scope).toBeDefined();
    scope.doLogin(sso,password);
    expect(scope.name.length).toBeEqual(5);

  });

  it('SSO policy validation', function() {
    var sso = "RMYB9";
    var password = "password";
    expect(scope).toBeDefined();
    scope.doLogin(sso,password);
    expect(scope.name).not.toMatch(/(\!|\@|\#|\$|\ |\%|\(|\))/);

  });

});
