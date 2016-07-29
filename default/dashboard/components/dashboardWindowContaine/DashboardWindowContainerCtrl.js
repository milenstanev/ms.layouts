/**
 * Dashboard window placeholder
 */
class DashboardWindowContainerCtrl {
  constructor($scope) {
    this.gridWidgets = $scope.widgetsProvider;
  }
}
DashboardWindowContainerCtrl.$inject = ['$scope'];

export default DashboardWindowContainerCtrl;