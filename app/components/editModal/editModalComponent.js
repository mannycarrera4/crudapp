// import angular from 'angular';

angular.module('editModal.editModalComponent', [])
  .component('editModal', {
    templateUrl: 'components/editModal/editModal.html',
    bindings: {
      modalInstance: "=",
      resolve: "<"
    },
    controller: function ModalInstanceCtrl($scope, $uibModal, $http, routeManager) {
      console.log('edit modal controller');
      this.modalData = []
      this.routeName =''

      this.$init = () => {
        this.modalData = this.resolve.modalData;
        this.show = false
      }

      this.ok = () => {
        routeManager.writeRouteData(this.routeName)
        // console.warn(this.routeName);
        this.modalInstance.close();
      };

      this.cancel = () => {
        console.info("in handle dismiss");
        this.modalInstance.dismiss("cancel");
      };
    }
  });
