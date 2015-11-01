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
		this.nav.addListener('navigation:open', this.menuOpen.bind(this, 'nav'));
		this.nav.addListener('navigation:close', this.menuClosed.bind(this));
		this.myAccount.addListener('myAccount:open', this.menuOpen.bind(this, 'myAccount'));
		this.myAccount.addListener('myAccount:close', this.menuClosed.bind(this));
		this.basket.addListener('basket:open', this.menuOpen.bind(this, 'basket'));
		this.basket.addListener('basket:close', this.menuClosed.bind(this));
		this.search.addListener('search:open', this.menuOpen.bind(this, 'search'));
		this.search.addListener('search:close', this.menuClosed.bind(this));
	}

	isMenuOpen () {
		return (this.nav.isOpen || this.myAccount.isOpen || this.basket.isOpen || this.search.isOpen)
	}

	menuOpen (menu) {
		let menuArray = []
		switch(menu) {
			case 'nav':
				menuArray = [this.myAccount, this.basket];
				break;
			case 'myAccount':
				menuArray = [this.nav, this.basket];
				break;
			case 'basket':
				menuArray = [this.nav, this.myAccount];
				break;
			case 'search':
				menuArray = [this.myAccount, this.basket, this.nav];
				break;
		}
		this.closeOpenMenus(menuArray);
		this.showMask();
	}

	menuClosed () {
		if(!this.isMenuOpen()) {
			this.mask.hide();
		}
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

	showMask () {
		if(!this.mask.isVisible) {
			this.mask.show();
		}
	}
}

export default Header;