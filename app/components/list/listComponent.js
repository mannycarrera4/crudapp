// import angular from 'angular';

angular.module('list.listComponent', [])
  .component('list', {
    templateUrl: 'components/list/list.html',
    controller: function ($http, $uibModal, $scope) {
      firebase.database().ref('route').on('value', (snapshot) => {
        const newRouteList = []
        const keyList = []
        for (var key in snapshot.val()) {
          const route = snapshot.val()[key]
          route.key = key // add Key property to object
          newRouteList.push(route) // push route to newRouteListArray
          console.warn("key:", key);
        }
        this.routeList = newRouteList
        console.warn(this.routeList);
        // this.arrayOfKeys = keyList
        // console.warn(this.arrayOfKeys);
        console.warn(this.routeList);
        $scope.$evalAsync()
        // debugger
        // this.$digest()
      })

      this.deleteRoute = (routeKey) => {
        // firebase.database().ref('route').on('value', (snapshot) => {
        //   const keyList = []
        //   for (var key in snapshot.val()) {
        //     keyList.push(key)
        //   }
        //   this.keys = keylist
        // })

        // console.warn(this.routeList);
        // console.warn(snapshot);/
        firebase.database().ref('route/' + routeKey).remove().then(() => {
          console.warn('remove succeeded');
          $scope.$evalAsync()
        })
      }
      // starCountRef.on('value', function(snapshot) {
      //     updateStarCount(postElement, snapshot.val());
      // });
      // this.routeList = []
      // this.$onInit = function() {
      //   // let that = this
      //   $http.get('http://localhost:3000/climbing-route').then((response) => {
	    //    this.routeList = response.data;
      //    console.warn('route list', this.routeList)
		  //   })
      // }
      // this.deleteRoute = (climbingRouteID) => {
      //   $http.delete('http://localhost:3000/climbing-route/' + climbingRouteID.id).then((response) => {
      //     console.warn(this.routeList.length);
      //     this.routeList.splice(this.routeList.indexOf(climbingRouteID), 1)
      //   })
      // }
      // this.open = (climbingRoute) => {
      //   $uibModal.open({
      //     component: 'editModal'
      //   })
      //   this.showModal = true
      // }
    }
  });
