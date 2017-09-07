import './mainAppComponent';
import '../list/listComponent';
import '../editModal/editModalComponent';
import '../../services/routeManager';

angular.module('common', [
  'editModal.editModalComponent',
  'list.listComponent',
  'mainApp',
  'services.routeManager',
  'ui.bootstrap'
])
