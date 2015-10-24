import $ from 'jquery';

class MyAccount {

	constructor () {
		this.container = $('.header-my-account');
		this.menu = this.container.find('.header-my-account-menu');
		this.bindEvents();
	}

	bindEvents () {
		this.container.find('.my-account-open-link').on('click', this.toggleMenu.bind(this));
	}

	toggleMenu () {
		this.menu.toggleClass('open');
	}
}

export default MyAccount;