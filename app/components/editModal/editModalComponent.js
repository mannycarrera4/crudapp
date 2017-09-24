// import angular from 'angular';

angular.module('editModal.editModalComponent', [])
  .component('editModal', {
    templateUrl: 'components/editModal/editModal.html',
    bindings: {
      modalInstance: "=",
      resolve: "=",
      data:"="
    },
    controller: function ModalInstanceCtrl($scope, $uibModal, $http, routeManager) {
      console.log('edit modal controller');

      this.$onInit = () => {
        this.routeName = window.routeName
        console.warn(this.resolve.foo);
        // console.warn($scope);
        // debugger
        this.modalData = this.resolve.modalData;
        this.show = false
      }
      // console.warn(this.routeName);
      // console.warn("FOO",this.foo);
      this.ok = () => {

        // routeManager.updateRoute(window.routeKey, this.routeName)
        // console.warn(this.routeName);
        // if() {
        //   routeManager.writeRouteData(this.routeName)
        // }
        // else {
          // routeManager.updateRoute(window.routeKey, this.routeName)
        // }
        this.modalInstance.close();
      };

      this.cancel = () => {
        console.info("in handle dismiss");
        this.modalInstance.dismiss("cancel");
      };
    }
  });
