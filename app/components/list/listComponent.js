angular.module('list.listComponent', [])
  .component('list', {
    templateUrl: 'components/list/list.html',
    controller: function ($http, $uibModal, $scope, routeManager) {
      this.showModal = false
      // console.warn(routeManager.getRoutes());
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

      this.open = (routeKey) => {
        $uibModal.open({
          component: 'editModal',
          resolve: {
            modalData: function() {

            }
          }
        }).result.then(function(result) {
          console.info("I was closed, so do what I need to do myContent's controller now.  Result was->");
          console.info(result);
        }, function(reason) {
          console.info("I was dimissed, so do what I need to do myContent's controller now.  Reason was->" + reason);
        })
        this.showModal = true
      }

      this.deleteRouteFromList = (routeKey) => {
        routeManager.deleteRoute(routeKey)
      }
    }
  });
