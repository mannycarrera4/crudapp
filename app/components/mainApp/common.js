import './mainAppComponent';
import '../list/listComponent';
import '../editModal/editModalComponent';

angular.module('common', [
  'editModal.editModalComponent',
  'list.listComponent',
  'mainApp',
  'ui.bootstrap'
])
