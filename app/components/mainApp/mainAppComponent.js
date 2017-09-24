/**
 * this will talk to services, get data out of a setup, and inject it into your components
 */

angular.module('mainApp', [])
  .component('mainAppComponent', {
    templateUrl: 'components/mainApp/mainAppWrapper.html',
    controller: function ($http, $uibModal, $scope) {
      // this.showModal = false
      this.open = (route) => {
        console.warn(route);
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
    }
  })
