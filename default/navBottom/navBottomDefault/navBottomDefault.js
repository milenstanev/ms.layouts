import {
	DirectiveHelper,
	AngularModuleHelper
} from 'milenstanev/msw.core';

import './navBottomDefault.css!';
import navBottomTpl from './navBottomDefault.html!text';

class NavBottomCtrl {
	constructor(dashboardService) {
		this.dashboardService = dashboardService;
		this.dashboards = dashboardService.getDashboards();
	}

	addNewDashboard() {
		this.dashboardService.add(`Dashboard ${this.dashboards.length + 1}`, true);
	}
}
NavBottomCtrl.$inject = ['dashboardService'];

class NavBottomDefault extends AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		super(moduleName, moduleDependencies);

		this.directive('prefixNavBottom', this.constructor.prefixNavigation);
	}

	static prefixNavigation() {
		let directive = new DirectiveHelper(navBottomTpl);
		directive.controller = NavBottomCtrl;

		return directive;
	}
}

export {NavBottomDefault};