angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $http, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.logout = function() {
    $state.go('login');
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
    .controller('HomeCtrl', function($scope, $stateParams) {
    $scope.welcome = "Welcome to Student Companion";
    })

  .controller('LoginCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike, $timeout) {

   // $scope.loginData = {};

    $scope.doLogin = function(sso, password) {
      //console.log('Doing login', $scope.loginData);
      $scope.stat = 0;
      // $scope.data = {};
      //var count=0;
      //var remcount=3;
      $scope.name = sso;
      $scope.pass = password;
      //var flag=1;
      $scope.pageClass = 'tab.home';
      $scope.home = function() {
        console.log("home page !");
        $state.go('tab.home');
      }
      $scope.pageClass = 'tab.dash';
      // $scope.login = function(username, password) {
      //console.log("inside login function");
      //inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/studentcompaniondb/collections/Login?apiKey=PPjxva2p9SH3NomyxSQ6rdwiofOu1q2L',
        contentType: "application/json"
      }).then(function (response) {
        var data = response.data;
        var list = data;
        $scope.stat = response.status;
        console.log($scope.stat);


        for (var i = 0; i < list.length; i++) {
          if (angular.equals(list[i].SSO, sso) && angular.equals(list[i].Password, password)) {

            localStorage.setItem("username", list[i].SSO);
            localStorage.setItem("password", list[i].Password);
            console.log("inside if loop");
            //flag = 0;
            $state.go('tab.home');
            break;

          } else {
            //alert("Incorrect username/password");
            console.log("inside else loop");
            document.getElementById('msg').innerHTML = "<p><h3>Invalid Credentials! Please try again....</h3></p>";
            $state.go('tab.dash');
            //count++;
          }
        }

        //if (count == list.length) {
        // alert("hiii");
        /*  remcount--;
         alert("Attempts remaining  "+remcount);
         if(remcount==0){
         alert("Please try again");
         $window.close();

         ionic.Platform.exitApp();
         }*/
        //  $state.go('login');
        //  document.getElementById('x').innerHTML = "<p><h3>Invalid Credentials! Please try again....</h3></p>";
        //}
      })

      //  }
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      //$timeout(function() {
      //  $state.go('app.search');
      //}, 1000);

      return $scope.stat;
    };
  })

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
});
