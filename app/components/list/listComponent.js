angular.module('list.listComponent', [])
  .component('list', {
    templateUrl: 'components/list/list.html',
    controller: function ($http, $uibModal, $scope, routeManager) {
      firebase.database().ref('route').on('value', (snapshot) => {
        const newRouteList = []
        const keyList = []

        for (var key in snapshot.val()) {
          const route = snapshot.val()[key]
          route.key = key // add Key property to object
          newRouteList.push(route) // push route to newRouteListArray
        }
        this.routeList = newRouteList.reverse()

        $scope.$evalAsync()
      })

      this.deleteRouteFromList = (routeKey) => {
        routeManager.deleteRoute(routeKey)
      }
    }
  });
