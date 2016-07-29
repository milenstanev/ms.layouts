import {
  DirectiveHelper,
  AngularModuleHelper
} from 'milenstanev/msw.core';

import DashboardWindowContainerCtrl from  './DashboardWindowContainerCtrl.js';
import directiveTpl from './dashboardWindowContainer.html!text';

let dashboardWindowContainerDirective = new DirectiveHelper();

dashboardWindowContainerDirective.scope = {
	widgetsProvider: '='
}
dashboardWindowContainerDirective.template = directiveTpl;
dashboardWindowContainerDirective.controller = DashboardWindowContainerCtrl;

export default dashboardWindowContainerDirective;
