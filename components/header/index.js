import Navigation from '../cat-nav/';
import MyAccount from '../my-account/';
class Header {

	constructor () {
		this.nav = new Navigation();
		this.myAccount = new MyAccount();
	}
}

export default Header;