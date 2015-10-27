import $ from 'jquery';
import EventTarget from '../../utility/eventTarget.js'

class Search extends EventTarget {

	constructor () {
		super();
		this.container = $('.header-search');
		this.searchForm = this.container.find('.search-form');
		this.bindEvents();
	}

	bindEvents () {
		this.container.find('.search-open-link').on('click', this.toggleMenu.bind(this));
		this.container.find('.close-search').on('click', this.close.bind(this));
	}

	toggleMenu () {
		if(this.searchForm.hasClass('open')) {
			this.close();
		} else {
			this.open();
		}
	}

	open () {
		this.searchForm.addClass('open');
		this.fire('search:open');
	}

	close () {
		this.searchForm.removeClass('open');
	}
}

export default Search;

