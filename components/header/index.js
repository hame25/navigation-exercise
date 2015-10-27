import Navigation from '../cat-nav/';
import MyAccount from '../my-account/';
import Basket from '../basket/';
import Search from '../search/';

class Header {

	constructor () {
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
		this.myAccount.close();
		this.basket.close();
	}

	openMyAccount () {
		this.nav.close();
		this.basket.close();
	}

	openBasket () {
		this.nav.close();
		this.myAccount.close();
	}
	openSearch () {
		this.nav.close();
		this.myAccount.close();
		this.basket.close();
	}

	getHeaderHeight () {

	}
}

export default Header;