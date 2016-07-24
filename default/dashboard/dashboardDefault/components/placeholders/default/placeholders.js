import {
	DirectiveHelper,
	AngularModuleHelper
} from 'milenstanev/msw.core';

class WidgetPlaceholdersDataModel {
	constructor() {
		this.name = 'The Name 1';
		this.content =  'Content 1';

	}
}

class WidgetGridDataModel extends WidgetBasicDataModel {
	constructor() {
		super();
		this.widgetType = 'grid';
	}
}

class WidgetWindowDataModel extends WidgetBasicDataModel {
	constructor() {
		super();
		this.type = 'window';
	}
}

class WidgetPlaceholdersService {
	constructor() {
		this.widgets = [];
	}

	add() {
		let newWidget = new WidgetsDataModel();

		this.widgets.push(newWidget);
	}

	remove(name) {
		let len = this.widgets.length;

		while (len--) {
			if(this.widgets[len].name === name) {
				this.widgets.splice(len, 1);
			}
		}
	}
}

class WidgetPlaceholdersDefault extends AngularModuleHelper {
	constructor() {
		super();

		this.service('widgetsService', WidgetsService);
	}
}