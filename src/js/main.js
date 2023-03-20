
import 'jquery';
import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);



// function F(a) {document.documentElement.classList.add(a);}

// var A = new Image;
// A.src = 'data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=', A.onload = function () {F('avif');}, A.onerror = function () {
// 	var a = new Image;
// 	a.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==', a.onload = function () {F('webp');};
// };

let catalogSlider1 = null;
let catalogSlider2 = null;
let catalogSlider3 = null;
let mediaQuerySize = 768;

function catalogSliderInit() {
	if (!catalogSlider1) {
		catalogSlider1 = new Swiper('.swiper-row', {
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets'
			},
		});
	}
	if (!catalogSlider2) {
		catalogSlider2 = new Swiper('.swiper-row-2', {
			slidesPerView: 1,

			pagination: {
				el: '.swiper-pagination',
				type: 'bullets'
			},
		});
	}
	if (!catalogSlider3) {
		catalogSlider3 = new Swiper('.swiper-row-3', {
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets'
			},
		});
	}
}

function catalogSliderDestroy() {
	if (catalogSlider1) {
		catalogSlider1.destroy();
		catalogSlider1 = null;
	}
	if (catalogSlider2) {
		catalogSlider2.destroy();
		catalogSlider2 = null;
	}
	if (catalogSlider3) {
		catalogSlider3.destroy();
		catalogSlider3 = null;
	}
}

window.addEventListener('resize', function () {
	// Берём текущую ширину экрана
	let windowWidth = $(this).innerWidth();

	// Если ширина экрана меньше или равна mediaQuerySize(768)
	if (windowWidth <= mediaQuerySize) {
		// Инициализировать слайдер если он ещё не был инициализирован
		catalogSliderInit();
	} else {
		// Уничтожить слайдер если он был инициализирован
		catalogSliderDestroy();
	}
});

window.addEventListener('load', function () {
	// Берём текущую ширину экрана
	let windowWidth = $(this).innerWidth();

	// Если ширина экрана меньше или равна mediaQuerySize(768)
	if (windowWidth <= mediaQuerySize) {
		// Инициализировать слайдер если он ещё не был инициализирован
		catalogSliderInit();
	} else {
		// Уничтожить слайдер если он был инициализирован
		catalogSliderDestroy();
	}
});

$.fn.hyphenate = function () {
	var RusA = '[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]';
	var RusV = '[аеёиоуыэюя]';
	var RusN = '[бвгджзклмнпрстфхцчшщ]';
	var RusX = '[йъь]';
	var Hyphen = '\xAD';

	var re1 = new RegExp('(' + RusX + ')(' + RusA + RusA + ')', 'ig');
	var re2 = new RegExp('(' + RusV + ')(' + RusV + RusA + ')', 'ig');
	var re3 = new RegExp('(' + RusV + RusN + ')(' + RusN + RusV + ')', 'ig');
	var re4 = new RegExp('(' + RusN + RusV + ')(' + RusN + RusV + ')', 'ig');
	var re5 = new RegExp('(' + RusV + RusN + ')(' + RusN + RusN + RusV + ')', 'ig');
	var re6 = new RegExp('(' + RusV + RusN + RusN + ')(' + RusN + RusN + RusV + ')', 'ig');

	this.each(function () {
		var text = $(this).html();
		text = text.replace(re1, '$1' + Hyphen + '$2');
		text = text.replace(re2, '$1' + Hyphen + '$2');
		text = text.replace(re3, '$1' + Hyphen + '$2');
		text = text.replace(re4, '$1' + Hyphen + '$2');
		text = text.replace(re5, '$1' + Hyphen + '$2');
		text = text.replace(re6, '$1' + Hyphen + '$2');
		$(this).html(text);
	});
};

$('p').hyphenate();

// function redirect () {
// 	const body = document.querySelector('body')
// 	let redirect = localStorage.getItem('redirect');

// 	if (window.navigator.language !== 'ru' && !body.classList.contains('en') && !redirect) {
// 		localStorage.setItem('redirect', 'true');
// 		window.location.href = "en/index-en.html";
// 	} else if (window.navigator.language !== 'ru' && body.classList.contains('en')) {
// 		localStorage.setItem('redirect', 'true');
// 	}
// }

// redirect ();

// let date = new Date().getFullYear();
// document.querySelector('.current-year').innerHTML = date;

// const currentYear = document.querySelector('.current-year');
// currentYear.append((new Date()).getFullYear());
