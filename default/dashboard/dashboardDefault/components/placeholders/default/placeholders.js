import {
	DirectiveHelper,
	AngularModuleHelper
} from 'milenstanev/msw.core';

class WidgetPlaceholdersDataModel {
	constructor() {
		this.name = '';
		this.content =  ''; //probably will be directive

	}
}

class WidgetGridDataModel extends WidgetPlaceholdersDataModel {
	constructor() {
		super();
		this.type = 'grid';
	}
}

class WidgetWindowDataModel extends WidgetPlaceholdersDataModel {
	constructor() {
		super();
		this.type = 'window';
	}
}

class WidgetPlaceholdersService {
	constructor() {

		this.allowedTypes = {
			grid: WidgetGridDataModel,
			window: WidgetWindowDataModel
		};

		this.widgets = [];
	}

	add(type, name, content) {
		let newWidget;

		if(this.allowedTypes.hasOwnProperty(type)) {
			newWidget = new this.allowedTypes[type]();

			newWidget.name = name;
			newWidget.content = content;
			this.widgets.push(newWidget);
		} else {
			throw new Error('placeholdersDataModels dosen\'t contain such type');
		}
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


export default WidgetPlaceholdersService;