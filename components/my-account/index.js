import $ from 'jquery';
import EventTarget from '../../utility/eventTarget.js'

class MyAccount extends EventTarget {

	constructor () {
		super();
		this.isOpen = false;
		this.container = $('.header-my-account');
		this.menu = this.container.find('.header-my-account-menu');
		this.bindEvents();
	}

	bindEvents () {
		this.container.find('.my-account-open-link').on('click', this.toggleMenu.bind(this));
	}

	toggleMenu () {

		if(this.menu.hasClass('open')) {
			this.close();
		} else {
			this.open();
		}
	}

	open () {
		this.menu.addClass('open');
		this.isOpen = true;
		this.fire('myAccount:open');
	}

	close () {
		this.menu.removeClass('open');
		this.isOpen = false;
		this.fire('myAccount:close');
	}
}

export default MyAccount;

