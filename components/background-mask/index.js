import $ from 'jquery';

class BackgroundMask {

	constructor () {
		this.isVisible = false;
		this.mask = $('.background-mask');
	}

	show () {
		this.mask.addClass('show');
		this.isVisible = true;
	}

	hide () {
		this.mask.removeClass('show');
		this.isVisible = false;
	}
}

export default BackgroundMask;