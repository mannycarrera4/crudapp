angular.module('services.routeManager', [])
  .service('routeManager', function() {
    this.test = "test 1234"
    this.flag = false
    const addNewButton = document.getElementById('add-new')

    this.writeRouteData = (name) => {
      const newKey = firebase.database().ref('route').push().key
      firebase.database().ref('route/' + newKey).set({ //route is table, and set is a post, passing a json object
        routeName: name
        // add more properties
      });
    }

    // addNewButton.onclick = function() {
    //   this.flag = true
    //   console.warn(this.flag);
    //   return this.flag
    // }
    //
    // this.isNewButtonClicked = () => {
    //   return addNewButton.onclick = function() {
    //     this.flag = true
    //     console.warn(this.flag);
    //     return this.flag
    //   }
    // }

    this.updateRoute = (key, name) => {
      console.log('UPDATE: ' + key + ' NEW NAME: ' + name)
    }

    this.getRoutes = (callBack) => {
      return firebase.database().ref('route').on('value', (snapshot) => {
        const newRouteList = []
        const keyList = []

        for (var key in snapshot.val()) {
          const route = snapshot.val()[key]
          route.key = key // add Key property to object
          newRouteList.push(route) // push route to newRouteListArray
        }

        this.routeList = newRouteList.reverse()
        callBack(this.routeList)
        // $scope.$evalAsync()
      })
    }

    this.deleteRoute = (routeKey) => {
      firebase.database().ref('route/' + routeKey).remove().then(() => { //pass key to delete entry
        console.warn('remove succeeded');
      })
    }
  })
