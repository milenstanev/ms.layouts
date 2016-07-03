import {
  DirectiveHelper,
  AngularModuleHelper
} from 'milenstanev/msw.core';

import DashboardGridCtrl from  './DashboardGridCtrl.js';
import directiveTpl from './dashboardGrid.html!text';

let dashboardGridDirective = new DirectiveHelper();

dashboardGridDirective.controller = DashboardGridCtrl;
dashboardGridDirective.template = directiveTpl;

export default dashboardGridDirective;
