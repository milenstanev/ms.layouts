import {
  DirectiveHelper,
  AngularModuleHelper
} from 'milenstanev/msw.core';

import DashboardWindowContainerCtrl from  './DashboardWindowContainerCtrl.js';

let dashboardWindowContainerDirective = new DirectiveHelper();

dashboardWindowContainerDirective.scope = {
	widgetsProvider: '='
}
dashboardWindowContainerDirective.template = '<div ng-repeat="windows in ctrl.windowContainer">{{windows.name}}</div>';
dashboardWindowContainerDirective.controller = DashboardWindowContainerCtrl;

export default dashboardWindowContainerDirective;
