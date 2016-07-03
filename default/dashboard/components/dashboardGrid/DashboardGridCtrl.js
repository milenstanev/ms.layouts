/**
 * Dashboard grid placeholder
 */
class DashboardGridCtrl {
  constructor($scope, layoutContentService, $window) {
    this.$window = $window;
    this.itemsPerRow = 3;
    this.layoutService = layoutContentService;
    this.gridWidgets = $scope.widgetsProvider.widgetPlaceholders.gridContainer;
  }
}
DashboardGridCtrl.$inject = ['$scope', 'layoutContentService', '$window'];

export default DashboardGridCtrl;