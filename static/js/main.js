var app = angular.module('plivoDevApp', []);
app.controller('plivoDevNavCtrl', function($scope) {
  $scope.toggleMenu = true;
  $scope.openMenu = function() {
    $scope.toggleMenu = !$scope.toggleMenu;
    $scope.showMenu = !$scope.showMenu;
  }
});
app.controller('plivoDevIconCtrl', function($scope, $element) {
  // console.log($element);
  var show = false;
  var id = $element[0].id;
  var toggleButton = document.querySelector('#' + id + ' .toggleButton');

  $scope.toggleCards = function() {
    var cards = document.querySelectorAll('#' + id + ' .card')
    toggle(cards, 2)
  }
  $scope.toggleIcons = function() {
    var icons = document.querySelectorAll('#' + id + ' .icon-text')
    toggle(icons, 3)
  }

  function toggle(arr, nAlways) {
    if (show) {
      toggleButton.innerHTML = 'View More';
      for (var i = nAlways; i < arr.length; ++i) {
        arr[i].style.display = 'none';
      }
    } else {
      toggleButton.innerHTML = 'View Less';
      for (var i = nAlways; i < arr.length; ++i) {
        arr[i].style.display = 'block';
      }
    }
    show = !show;
  }
})
