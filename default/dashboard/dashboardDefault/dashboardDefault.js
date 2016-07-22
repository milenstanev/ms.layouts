import {
	DirectiveHelper,
	AngularModuleHelper
} from 'milenstanev/msw.core';

import dashboardGridDirective from '../components/dashboardGrid/dashboardGrid.js';
import dashboardWindowContainerDirective from '../components/dashboardWindowContaine/dashboardWindowContainer.js';

import {DashboardService} from './DashboardDefaultCtrl.js';
import {DashboardDefaultCtrl} from './DashboardDefaultCtrl.js';
import './dashboardDefault.css!';
import defaultDashboardTpl from './defaultDashboard.html!text';

class DashboardDefault extends AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		super(moduleName, moduleDependencies);

		this.service('dashboardService', DashboardService);
		this.controller('DashboardCtrl', DashboardDefaultCtrl);

    /**
     * Init module
     */
    this.constructor.initComponents.call(this);
	}

  static initComponents() {
    /**
		 * Dashboard
     * Instantiate main directive
     */
    this.directive('prefixDashboard', () => {
      let thisDirective = new DirectiveHelper();

      thisDirective.template = defaultDashboardTpl;
      thisDirective.controller = 'DashboardCtrl';

      return thisDirective;
    });

    /**
		 * Dashboard Grid
     * Instantiate grid component
     */
    this.directive('prefixDashboardGrid', () => {
      return dashboardGridDirective
    });

    /**
		 * Dashboard Window Container
     * Instantiate window container component
     */
    this.directive('prefixDashboardWindowContainer', () => {
      return dashboardWindowContainerDirective;
    });
  }
}
/**
 * Description
 * @type {{asd: string}}
 */
let asd = {
	asd: 'asd'
}

asd.asd = 'asd';

export {DashboardDefault};