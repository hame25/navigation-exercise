import Navigation from '../cat-nav/';
import MyAccount from '../my-account/';

class Header {

	constructor () {
		this.nav = new Navigation();
		this.myAccount = new MyAccount();
		this.bindEvents();
	}

	bindEvents () {
		this.nav.addListener('navigation:open', this.openNavigation.bind(this));
		this.myAccount.addListener('myAccount:open', this.openMyAccount.bind(this));
		
	}

	openNavigation () {
		this.myAccount.close();
	}

	openMyAccount () {
		this.nav.close();
	}
}

export default Header;