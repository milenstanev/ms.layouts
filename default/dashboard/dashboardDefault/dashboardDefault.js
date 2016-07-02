import {
	DirectiveHelper,
	AngularModuleHelper
} from 'milenstanev/msw.core';

import './dashboardDefault.css!';
import defaultDashboardTpl from './defaultDashboard.html!text';

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

/**
 * Dashboard window placeholder
 */
class DashboardWindowContainerCtrl {
	constructor() {}
}

class DashboardDefault extends AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		super(moduleName, moduleDependencies);

		this.directive(
			'prefixDashboard',
			this.constructor.dashboard
		);

		this.directive(
			'prefixDashboardGrid',
			this.constructor.dashboardGrid
		);

		this.directive(
			'prefixDashboardWindowContainer',
			this.constructor.dashboardWindowContainer
		);
	}

	static dashboard() {
		let directive = new DirectiveHelper(defaultDashboardTpl);

		return directive;
	}

	static dashboardGrid() {
		let directive = new DirectiveHelper();

		directive.controller = DashboardGridCtrl;

		return directive;
	}

	static dashboardWindowContainer() {
		let directive = new DirectiveHelper();

		directive.controller = DashboardWindowContainerCtrl;

		return directive;
	}
}

export {DashboardDefault};