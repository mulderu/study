
angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout) {

  console.log ('start good')
  console.log ($jq('h1').length);


  setTimeout(function(bn) {
    console.log ("bn", bn);

    $jq('ion-content').append('<h1>hi mulder</h1>')
    var d = gx.scope.PlaylistsCtrl.playlists;   
    d.push( { title: '멀더', id: d.length+1 } ); 
  }.bind(null, 10), 100);
  

  //
  //$('body').append('<h2>hi Mulder</h2>');

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
  $scope.login = function() {
    $scope.modal.show();
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

  //$jq.extend(gx.scope, {PlaylistsCtrl : {playlists :$scope.playlists } });  
  $jq.extend(gx.scope, {PlaylistsCtrl :  $scope  });   
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('Extra01Ctrl', function($scope) {
  $scope.extraData01 = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
 
  $jq.extend(gx.scope, {Extra01Ctrl :  $scope  });   
})

;
