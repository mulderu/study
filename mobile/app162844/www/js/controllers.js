
angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout 
    , $state
  ) {
    // $scope.sessions = Session.query();
    // $scope.session = Session.get({sessionId: $stateParams.sessionId});
 
 $rootScope.xname = "mulder";
 $rootScope.goOtherStat = function(stateName) {
   $state.go(stateName);
 }

  // $scope.leftToggleMenuEnable = false;

  console.log ('start good')
  console.log ($jq('h1').length);

  var deviceInformation = ionic.Platform.device();

  var isWebView = ionic.Platform.isWebView();
  var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();
  var isWindowsPhone = ionic.Platform.isWindowsPhone();

  var currentPlatform = ionic.Platform.platform();
  var currentPlatformVersion = ionic.Platform.version();

  console.log ('deviceInformation', deviceInformation);
  console.log ('isWebView', isWebView);
  console.log ('isIOS',isIOS );
  console.log ('isAndroid', isAndroid); 
  console.log ('currentPlatform', currentPlatform);
  console.log ('currentPlatformVersion', currentPlatformVersion);


  // setTimeout(function(bn) {
  //   console.log ("bn", bn);

  //   $jq('ion-content').append('<h1>hi mulder</h1>')
  //   var d = gx.scope.PlaylistsCtrl.playlists;   
  //   d.push( { title: '멀더', id: d.length+1 } ); 
  // }.bind(null, 10), 100);
  

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

.controller('Action01Ctrl', function($scope, $ionicActionSheet, $timeout
  , $ionicBackdrop, $rootScope, $ionicModal, $ionicPopover
  , $ionicPopup, $ionicSideMenuDelegate
  , $state, $ionicSlideBoxDelegate
  ) {
  $scope.actionData01 = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
 
  $jq.extend(gx.scope, {Action01Ctrl :  $scope  });   


$scope.xname = "scully";


//-------------------

$scope.slideHasChanged = function(idx) {
  console.log ('slide :' + idx);
}

// --------------


$scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };  


// -----------------------------

// Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };



// ---------------------

 var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });


// ------------------





   $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });



  //Show a backdrop for one second
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };

  // Execute action on backdrop disappearing
  $scope.$on('backdrop.hidden', function() {
    // Execute action
    console.log ('backdrop.hidden')
  });

  // Execute action on backdrop appearing
  $scope.$on('backdrop.shown', function() {
    // Execute action
    console.log ('backdrop.shown')
  });


  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    console.log ('run $scope.doRefresh = function()')

    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };

  $scope.onSwipeLeft = function() {
    console.log ('onSwipeLeft')
  }


 
  // Triggered on a button click, or some other target
  $scope.show = function() { 
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>Share</b> This' },
        { text: 'Move' }
      ],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
            // add cancel code..
          },
      buttonClicked: function(index) {
        return true;
      }
    });

    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
      hideSheet();
    }, 2000);
  };





})

.directive("exmulder001", function() {
  return {
    restrict: "EA",
    template: "Hi this is mulder directive 001 !"
  }

})

.controller('subContrl', function($scope 
  ) { 

    $scope.xname = "seoha";

  })

.controller('Ui01Ctrl', function($scope , hexafy
  , $http
  ) { 

     $scope.lastName = "Yu";
     $scope.demoUpVal = hexafy.demoUp("Hi Mulder");

     $scope.myFunc2 = function(e) {
       $scope.ex = e.clientX;
       $scope.ey = e.clientY; 
     }

     $scope.master = {firstName: "John", lastName: "Doe"};
     $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
     };
     $scope.reset();


     $scope.mySwitch = true;
     $scope.count = 1;

     $scope.names2 = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];

     $scope.hdata = hexafy.myFunc(200);

     $scope.cars = [
          {model : "Ford Mustang", color : "red"},
          {model : "Fiat 500", color : "white"},
          {model : "Volvo XC90", color : "black"}
      ];


     $scope.getHttpVal = function() {
       $http.get("../resources/data/test1.json")
         .then(function(response) {
              console.log (response);
              
              $scope.jsonName1 = response.data.name1;
          });

     }
     $scope.getHttpVal2 = function() {
       $http({
              method : "GET",
              url : "../resources/data/test1.json"
          }).then(function mySucces(response) {
              $scope.jsonName2 = response.data.name1;
          }, function myError(response) {
              $scope.jsonName2 = "error :" + response.statusText;
          });

     }

     $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Carl',country:'Sweden'},
      {name:'Margareth',country:'England'},
      {name:'Hege',country:'Norway'},
      {name:'Joe',country:'Denmark'},
      {name:'Gustav',country:'Sweden'},
      {name:'Birgit',country:'Denmark'},
      {name:'Mary',country:'England'},
      {name:'Kai',country:'Norway'}
    ];
    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }




  })
  .filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
})
.service('hexafy', function() {
    this.demoUp = function(x) {
      return x.toUpperCase();
    }
    this.myFunc = function (x) {
        return x.toString(16);
    }
})


;
