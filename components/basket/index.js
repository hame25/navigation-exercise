import $ from 'jquery';
import EventTarget from '../../utility/eventTarget.js'

class Basket extends EventTarget {

	constructor () {
		super();
		this.container = $('.header-basket');
		this.menu = this.container.find('.header-basket-menu');
		this.bindEvents();
	}

	bindEvents () {
		this.container.find('.basket-open-link').on('click', this.toggleMenu.bind(this));
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
		this.fire('basket:open');
	}
}

export default Basket;