import $ from 'jquery';
import EventTarget from '../../utility/eventTarget.js'

class Navigation extends EventTarget {

	constructor () {
		super();
		this.container = $('.navigation');
		this.menu = this.container.find('.nav-menu');
		this.bindEvents();
	}

	bindEvents () {
		this.container.find('.nav-open-link').on('click', this.toggleMenu.bind(this));
	}

	toggleMenu () {
		if(this.menu.hasClass('open')) {
			this.close();
		} else {
			this.open();
		}
	}

	close () {
		this.menu.removeClass('open');
	}

	open () {
		this.menu.addClass('open');
		this.fire('navigation:open');
	}
}

export default Navigation;