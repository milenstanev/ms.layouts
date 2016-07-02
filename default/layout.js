import {NavBottomDefault as NavBottom} from './navBottom/navBottomDefault/navBottomDefault.js';
import {NavTopDefault as NavTop} from './navTop/navTopDefault/navTopDefault.js';
import {NavDefault as Navigation} from './navigation/navDefault/navDefault.js';
import {LayoutDefault as Layout} from './layoutDefault/LayoutDefault.js';
import {DashboardDefault as Dashboard} from './dashboard/dashboardDefault/dashboardDefault.js';

new NavTop('prefix.navTop', []);
new NavBottom('prefix.navBottom', []);
new Navigation('prefix.mainNav', []);
new Dashboard('prefix.dashboard', []);

let layout = new Layout('prefix.layout', [
	'prefix.navTop',
	'prefix.navBottom',
	'prefix.mainNav',
	'prefix.dashboard'
]);

export { layout };