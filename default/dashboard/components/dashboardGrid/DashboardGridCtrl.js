/**
 * Dashboard grid placeholder
 */
class DashboardGridCtrl {
  constructor(layoutContentService, $window) {
    this.$window = $window;
    this.itemsPerRow = 3;
    this.layoutService = layoutContentService;
    this.gridWidgets = [];

    this.init();
  }

  init() {
    this.gridWidgets.push(
      {
        title: 'Title 1',
        content: 'Content 1'
      },
      {
        title: 'Title 2',
        content: 'Content 2'
      },
      {
        title: 'Title 1',
        content: 'Content 1'
      },
      {
        title: 'Title 2',
        content: 'Content 2'
      },
      {
        title: 'Title 1',
        content: 'Content 1'
      },
      {
        title: 'Title 2',
        content: 'Content 2'
      },
      {
        title: 'Title 1',
        content: 'Content 1'
      },
      {
        title: 'Title 2',
        content: 'Content 2'
      }
    );
  }
}
DashboardGridCtrl.$inject = ['layoutContentService', '$window'];

export default DashboardGridCtrl;