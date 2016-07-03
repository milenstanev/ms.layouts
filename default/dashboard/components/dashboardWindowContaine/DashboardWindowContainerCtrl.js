/**
 * Dashboard window placeholder
 */
class DashboardWindowContainerCtrl {
  constructor($scope) {
    this.windowContainer = $scope.widgetsProvider.widgetPlaceholders.windowContainer;
  }
}
DashboardWindowContainerCtrl.$inject = ['$scope'];

export default DashboardWindowContainerCtrl;