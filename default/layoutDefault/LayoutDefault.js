import {
  DirectiveHelper,
  AngularModuleHelper
} from 'milenstanev/msw.core';

/*
 const lessPath = 'app/less/';
 System.import(`${lessPath}layoutt.css!`).catch(() => {
 console.info('They are not custom css, the system is loading local one');
 System.import('./layout.css!');
 });
 */
import './layout.css!';
import layoutHtml from './layout.html!text';


class LayoutContentService {
  constructor() {
    this.height = 0;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }
}

class LayoutContentController {
  constructor($window, $scope, layoutContentService) {
    this.domEl = undefined;
    this.$window = $window;
    this.$scope = $scope;
    this.service = layoutContentService;

    this.init();
  }

  init() {
    let self = this,
      timeout;

    function callLayoutChange() {
      if(timeout) {
        self.$window.clearTimeout(timeout);
      }

      timeout = self.$window.setTimeout((self) => {
        self.layoutChange();
      }, 300, self);
    }

    this.$window.addEventListener('resize', callLayoutChange);

    this.$scope.$on('$destroy', () => {
      this.$window.removeEventListener('resize', callLayoutChange);
    });
  }

  layoutChange() {
    this.service.height = this.$window.innerHeight - this.domEl.previousElementSibling.offsetHeight - this.domEl.nextElementSibling.offsetHeight;
    this.domEl.style.height =  `${this.service.height}px`;
  }
}
LayoutContentController.$inject = ['$window', '$scope', 'layoutContentService'];

class LayoutDefault extends AngularModuleHelper {
  constructor(moduleName, moduleDependencies) {
    super(moduleName, moduleDependencies);

    this.service('layoutContentService', LayoutContentService);
    this.directive('prefixLayout', this.constructor.prefixLayout);
    this.directive('prefixLayoutContent', this.constructor.prefixLayoutContent);
  }

  //region Module directives
  /**
   * Instatiate Directive
   * @returns {*}
   */
  static prefixLayout() {
    return new DirectiveHelper(layoutHtml);
  }
  /**
   * Instatiate Directive
   * @returns {*}
   */
  static prefixLayoutContent() {
    let directive = new DirectiveHelper();

    directive.controller = LayoutContentController;

    directive.link = (scope, element, attrs, ctrl) => {
      ctrl.domEl = element[0];

      ctrl.layoutChange();
    };

    return directive;
  }
  //endregion

}

export {LayoutDefault};