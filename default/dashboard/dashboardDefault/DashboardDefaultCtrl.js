import WidgetPlaceholdersService from './components/placeholders/default/placeholders.js';

class DashboardViewDataModel {
  constructor(title) {
    this.title = title || '';
    this.isActive = false;
    this.prev = false;
    this.next = true;

    this.placeholder = new WidgetPlaceholdersService();
    this.widgets = this.placeholder.widgets;
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
    this.add('Dahsboard 1', true);
    this.add('Dahsboard 2');
    /*this.add('Dahsboard 2', true);
    this.add('Dahsboard 3');
    this.add('Dahsboard 4');*/

    /*this.placeholders.add('grid', 'Name', 'msw-test');
    this.placeholders.add('grid', 'Other Name', 'prefix-form');
    this.dashboards[0].widgets = this.placeholders.widgets;*/

    this.addWidget('grid', 'Other Name', 'prefix-form');
    console.log(this.dashboards);

    /*this.$timeout((self) => {
      self.dashboards[3].show(this.dashboards);
    }, 3000, true, this);


    this.$timeout((self) => {
      self.dashboards[0].show(this.dashboards);
    }, 6000, true, this);*/
  }
  // type => placeholder
  addWidget(type, name, content) {
    let activeDashboard = this.constructor.getActiveDashboard.call(this);

    activeDashboard.placeholder.add(type, name, content);
  }

  getDashboards() {
    return this.dashboards;
  }

  show(name) {
    let dashboard = this.constructor.getDashboard.call(this, name);

    if(dashboard) {
      //!!! it's data model show method
      dashboard.show(this.dashboards);
    } else {
      throw new Error(`Dashboard with name:${name} don't exist!`);
    }
  }

  add(name, showIt) {
    let dashboard;

    if(this.constructor.getDashboard.call(this, name) === false) {
      dashboard = new DashboardViewDataModel(name);

      this.dashboards.push(dashboard);

      if(showIt) {
        let lastItem = this.dashboards[this.dashboards.length - 1];
        //!!! it's data model show method
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

  static getActiveDashboard() {
    let len = this.dashboards.length;

    while (len--) {
      if(this.dashboards[len].isActive) {
        return this.dashboards[len];
      }
    }
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
