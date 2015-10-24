import $ from 'jquery';

function Navigation () {
	this.container = $('.navigation');
	this.menu = this.container.find('.nav-menu');
	this.bindEvents();
}

Navigation.prototype.bindEvents = function () {
	this.container.find('.nav-open-link').on('click', this.toggleMenu.bind(this));
}

Navigation.prototype.toggleMenu = function () {
	this.menu.toggleClass('open');
}


export default Navigation;