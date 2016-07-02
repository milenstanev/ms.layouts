import {
	DirectiveHelper,
	AngularModuleHelper
} from 'msw.core';

import navTopDefaultTpl from './navTopDefault.html!text';

class NavTopDefaultCtrl {
	constructor() {
		this.title = 'Title';
	}
}

class NavTopDefault extends AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		super(moduleName, moduleDependencies);

		this.directive('prefixNavTop', this.constructor.prefixNavTop);
	}

	static prefixNavTop() {
		let directive = new DirectiveHelper(navTopDefaultTpl);
		directive.controller = NavTopDefaultCtrl;

		return directive;
	}
}

export {NavTopDefault};