import Navigation from '../cat-nav/';
import MyAccount from '../my-account/';
import Basket from '../basket/';
import Search from '../search/';
import BackgroundMask from '../background-mask/';

class Header {

	constructor () {
		this.mask = new BackgroundMask();
		this.nav = new Navigation();
		this.myAccount = new MyAccount();
		this.basket = new Basket();
		this.search = new Search();
		this.bindEvents();
	}

	bindEvents () {
		this.nav.addListener('navigation:open', this.openNavigation.bind(this));
		this.myAccount.addListener('myAccount:open', this.openMyAccount.bind(this));
		this.basket.addListener('basket:open', this.openBasket.bind(this));
		this.search.addListener('search:open', this.openSearch.bind(this));
	}

	openNavigation () {
		this.closeOpenMenus([this.myAccount, this.basket]);
	}

	openMyAccount () {
		this.closeOpenMenus([this.nav, this.basket]);
	}

	openBasket () {
		this.closeOpenMenus([this.nav, this.myAccount]);
	}
	openSearch () {
		this.closeOpenMenus([this.myAccount, this.basket, this.nav]);
	}

	closeOpenMenus (menus) {
		menus.map((menu) => {
			this.closeMenu(menu);
		});
	}

	closeMenu (menu) {
		if(menu.isOpen) {
			menu.close();
		}
	}
}

export default Header;