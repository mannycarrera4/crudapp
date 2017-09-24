angular.module('list.listComponent', [])
  .component('list', {
    templateUrl: 'components/list/list.html',
    controller: function ($http, $uibModal, $scope, routeManager, $rootScope) {
      this.showModal = false
      // console.warn(routeManager.getRoutes());
      this.data = []
      this.foo = 'foo'
      console.log(this.data)
      const api = routeManager.getRoutes((data) => {
        this.data = data
        $scope.$digest()
        console.log("DATA",this.data)
      })

      this.open = (route) => {
        // const scope = $rootScope.$new()
        // scope.params = {
        //   routeName: 'foo'
        // }
        // console.warn("ROUTE", route.routeName);
        window.routeName = route.routeName
        window.routeKey = route.key
        $uibModal.open({
          component: 'editModal',
          // scope: scope,
          resolve: {
            foo: function () {
              return route.routeName
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
