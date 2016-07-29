import {
	mswCoreDirectives
} from '../../msw.core/index.js';
//from 'milenstanev/msw.core';

import {NavBottomDefault as NavBottom} from './navBottom/navBottomDefault/navBottomDefault.js';
import {NavTopDefault as NavTop} from './navTop/navTopDefault/navTopDefault.js';
import {NavDefault as Navigation} from './navigation/navDefault/navDefault.js';
import {LayoutDefault as Layout} from './layoutDefault/LayoutDefault.js';
import Dashboard from './dashboard/dashboard.js';

new NavTop('prefix.navTop', []);
new NavBottom('prefix.navBottom', []);
new Navigation('prefix.mainNav', []);
new Dashboard('prefix.dashboard', []);

let layout = new Layout('prefix.layout', [
	'prefix.navTop',
	'prefix.navBottom',
	'prefix.mainNav',
	'prefix.dashboard',
	mswCoreDirectives.name
]);

console.log('asd')

export { layout };
