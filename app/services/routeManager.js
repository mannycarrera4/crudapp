angular.module('services.routeManager', [])
  .service('routeManager', function() {
    this.test = "test 1234"
    this.writeRouteData = (name) => {
      const newKey = firebase.database().ref('route').push().key
      firebase.database().ref('route/' + newKey).set({ //route is table, and set is a post, passing a json object
        routeName: name
        // add more properties
      });
    }

    this.deleteRoute = (routeKey) => {
      firebase.database().ref('route/' + routeKey).remove().then(() => { //pass key to delete entry
        console.warn('remove succeeded');
      })
    }
  })
