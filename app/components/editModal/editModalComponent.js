// import angular from 'angular';

angular.module('editModal.editModalComponent', [])
  .component('editModal', {
    templateUrl: 'components/editModal/editModal.html',
    bindings: {
      modalInstance: "=",
      resolve: "<"
    },
    controller: function ModalInstanceCtrl($scope, $uibModal, $http) {
      console.log('edit modal controller');
      this.modalData = []
      this.routeName =''

      this.$init = () => {
        this.modalData = this.resolve.modalData;
        this.show = false
      }

      this.writeUserData = (name) => {
        const newKey = firebase.database().ref('route').push().key
        console.warn(newKey);
        firebase.database().ref('route/' + newKey).set({ //route is table, and set is a post, passing a json object
          routeName: name
          // add more properties
        });
      }

      this.ok = () => {
        this.writeUserData(this.routeName)
        console.warn(this.routeName);
        this.modalInstance.close();
      };

      this.cancel = () => {
        console.info("in handle dismiss");
        this.modalInstance.dismiss("cancel");
      };
    }
  });
