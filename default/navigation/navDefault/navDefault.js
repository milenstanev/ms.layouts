import {
	DirectiveHelper,
	AngularModuleHelper
} from 'milenstanev/msw.core';

import NavigationService from './NavigationService.js';
import navDefaultTpl from './navDefault.html!text';

class NavigationDirectiveCtrl {
	constructor(prefixNavigationService) {
		this.navCategories = prefixNavigationService.navCategories;
	}

	toggleActive(navCat) {
		for(let key in this.navCategories) {
			if(navCat.guid === key) {
				navCat.isActive = !navCat.isActive;
			}
		}
	}

	method() {
		console.log('asd');
	}
}
NavigationDirectiveCtrl.$inject = ['prefixNavigationService'];

class NavDefault extends AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		super(moduleName, moduleDependencies);

		this.service('prefixNavigationService', NavigationService);
		this.directive('prefixNavigation', this.constructor.prefixNavigation);
	}

	static prefixNavigation() {
		let directive = new DirectiveHelper(navDefaultTpl);

		directive.controller = NavigationDirectiveCtrl;

		return directive;
	}
}

export { NavDefault };
