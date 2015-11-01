import $ from 'jquery';

class BackgroundMask {

	constructor () {
		this.mask = $('.background-mask');
	}

	show () {
		this.mask.addClass('show');
	}

	hide () {
		this.mask.removeClass('hide');
	}
}

export default BackgroundMask;