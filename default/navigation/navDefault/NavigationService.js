import NavigationSectionDataModel from './NavigationSectionDataModel.js';
import NavigationButtonDataModel from './NavigationButtonDataModel.js';

class NavigationService {
	constructor() {
		/**
		 * Navigation categories data provider
		 */
		this.navCategories = {};
		/**
		 * Instantiate default navigation
		 * @type {NavigationSectionDataModel}
		 */
		this.defaultNavCategory = this.addCategory('Default Section', true, true);
    
		this.addCategory('Test Cat');
		this.addButton(undefined, 'Тест бутон', '', angular.noop, true);
		//console.log(this.navCategories);
	}

	static getGuid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}

		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	}

	addCategory(name, isActive, isDefault) {
		let newCat = new NavigationSectionDataModel();

		newCat.name = name;
		newCat.isActive = newCat.isActive || isActive;
		newCat.isDefault = newCat.isDefault || isDefault;
		newCat.guid = this.constructor.getGuid();

		this.navCategories[newCat.guid] = newCat;

		return newCat;
	}

	addButton(navSectionGuid, text, link, func, isActive) {
		let data = new NavigationButtonDataModel();

		data.text = text;
		data.href = link;
		data.callToAction = func;
		data.isActive = isActive || data.isActive;
		data.guid = this.constructor.getGuid();

		if(navSectionGuid) {
			this.navCategories[navSectionGuid].buttons.push(data);
		} else {
			this.navCategories[this.defaultNavCategory.guid].buttons.push(data);
		}
	}
}

export default NavigationService;