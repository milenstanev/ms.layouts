import {
  DirectiveHelper,
  AngularModuleHelper
} from 'milenstanev/msw.core';

import DashboardWindowContainerCtrl from  './DashboardWindowContainerCtrl.js';

let dashboardWindowContainerDirective = new DirectiveHelper();

dashboardWindowContainerDirective.controller = DashboardWindowContainerCtrl;

export default dashboardWindowContainerDirective;
