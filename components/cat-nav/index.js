import $ from 'jquery';
import EventTarget from '../../utility/eventTarget.js'

class Navigation extends EventTarget {

	constructor () {
		super();
		this.isOpen = false;
		this.container = $('.navigation');
		this.menu = this.container.find('.nav-menu');
		this.bindEvents();
	}

	bindEvents () {
		this.container.find('.nav-open-link').on('click', this.toggleMenu.bind(this));
		this.menu.on('click', 'li > a', this.taxonomyClick.bind(this));
		this.menu.on('click', '.nav-back-link', this.backLinkClick.bind(this));
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
		this.reset();
		this.isOpen = false;
		this.fire('navigation:close');
	}

	open () {
		this.menu.addClass('open');
		this.isOpen = true;
		this.fire('navigation:open');
	}

	taxonomyClick (e) {
		let element = e.currentTarget;
		if(this.hasSiblingMenu(element)) {
			element.parentNode.className = 'open';
			e.preventDefault();
		}
	}

	hasSiblingMenu (element) {
		return element.nextSibling;
	}

	backLinkClick (e) {
		let element = $(e.currentTarget);
		element.closest('li').removeClass('open');
		e.preventDefault();
	}

	reset () {
		this.menu.find('li.open').removeClass('open');
	}
}

export default Navigation;