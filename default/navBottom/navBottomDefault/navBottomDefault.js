import {
	DirectiveHelper,
	AngularModuleHelper
} from 'msw.core';


import navBottomTpl from './navBottomDefault.html!text';

class NavBottomCtrl {
	constructor() {
		this.navList = [
			'item1', 'item2', 'item3'
		];
	}
}

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