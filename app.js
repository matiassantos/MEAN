var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [
    {
      link : '',
      title: 'Inicio',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Rockers',
      icon: 'group'
    },
    {
      link : '',
      title: 'Mensajes',
      icon: 'message'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Borrar',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Configuracion',
      icon: 'settings'
    }
  ];
  $scope.activity = [
    {
      what:'Aguante river',
      who:'Mati',
      when: '12:01AM',
      notes:'somos millo'
    },
    {
      what:'Jugando con Natalia',
      who:'Natalia',
      when:'21:56PM',
      notes:'NivelX'
    },
    {
      what:'HOlus',
      who:'Loki',
      when: '14:10PM',
      notes:'No añsdj'
    }
  ];

$scope.showListBottomSheet = function($event) {
  $mdBottomSheet.show({
    template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
    controller: 'ListBottomSheetCtrl',
    targetEvent: $event
  });
};

$scope.showAdd = function(ev) {
  $mdDialog.show({
    controler: 'DialogController',
    template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>Nombre</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Apellido</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Direccion</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>Ciudad</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>Provincia</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Codigo Postal</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Acerca de mi</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancelar </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Guardar </md-button> </div></md-dialog>',
    targetEvent: ev,
  });
};

}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Compartir', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Imprimirle a por tu pagina', icon: 'print'},
  ];

$scope.listItemClick = function($index) {
  var clickedItem = $scope.items[$index];
  $mdBottomSheet.hide(clickedItem);
};
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};
