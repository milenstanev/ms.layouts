/**
 * Dashboard grid placeholder
 */
class DashboardGridCtrl {
  constructor($scope, layoutContentService, $window) {
    this.$window = $window;
    this.itemsPerRow = 2;
    this.layoutService = layoutContentService;

    this.gridWidgets = $scope.widgetsProvider;
  }
}
DashboardGridCtrl.$inject = ['$scope', 'layoutContentService', '$window'];

export default DashboardGridCtrl;