class DashboardViewDataModel {
  constructor(title) {
    this.title = title || '';
    this.isActive = false;
    this.prev = false;
    this.next = true;
    
    this.widgets = [];
    this.widgetPlaceholders = {
      gridContainer: [
        {
          name: 'The Name 1',
          content: 'Content 1'
        },
        {
          name: 'The Name 2',
          content: 'Content 2 <test-directive></test-directive>'
        }
      ],
      windowContainer: [
        {
          name: 'The Name 1',
          content: 'Content 1'
        },
        {
          name: 'The Name 2',
          content: 'Content 2'
        }
      ]
    };
  }

  show(dashboards) {
    let itemsBuffer,
        len = dashboards.length,
        itemNumber = dashboards.indexOf(this);

    while (len--) {
      itemsBuffer = dashboards[len];

      itemsBuffer.isActive = false;

      if(len < itemNumber) {
        itemsBuffer.next = false;
        itemsBuffer.prev = true;
      } else if(len === itemNumber) {
        itemsBuffer.next = false;
        itemsBuffer.prev = false;
      } else {
        itemsBuffer.next = true;
        itemsBuffer.prev = false;
      }
    }

    this.isActive = true;
  }
}

class DashboardService {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.dashboards = [];

    this.init();
  }

  init() {
    this.add('Dahsboard 1');
    this.add('Dahsboard 2', true);
    this.add('Dahsboard 3');
    this.add('Dahsboard 4');


    /*this.$timeout((self) => {
      self.dashboards[3].show(this.dashboards);
    }, 3000, true, this);


    this.$timeout((self) => {
      self.dashboards[0].show(this.dashboards);
    }, 6000, true, this);*/
  }

  getDashboards() {
    return this.dashboards;
  }

  show(name) {
    let dashboard = this.constructor.getDashboard.call(this, name);

    if(dashboard) {
      dashboard.show(this.dashboards);
    } else {
      throw new Error(`Dashboard with name:${name} don't exist!`);
    }
  }

  add(name, showIt) {
    if(this.constructor.getDashboard.call(this, name) === false) {
      this.dashboards.push(
        new DashboardViewDataModel(name)
      );

      if(showIt) {
        let lastItem = this.dashboards[this.dashboards.length - 1];

        lastItem.show(this.dashboards);
      }

    } else {
      throw new Error(`Dashboard with this name ${name} already exist! The name should be unique!`);
    }
  }

  static getDashboard(name) {
    let len = this.dashboards.length;

    while (len--) {
      if(this.dashboards[len].title === name) {
        len = 0;
        return this.dashboards[len];
      }
    }

    return false;
  }
}
DashboardService.$inject = ['$timeout'];

class DashboardDefaultCtrl {
  constructor(dashboardService) {
    this.dashboards = dashboardService.getDashboards();
  }
}
DashboardDefaultCtrl.$inject = ['dashboardService'];

export { DashboardService, DashboardDefaultCtrl };