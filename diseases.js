const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

$(document).ready(function() {
	var panelOne = $('.form-panel.two').height(),
	  panelTwo = $('.form-panel.two')[0].scrollHeight;
  
	$('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
	  e.preventDefault();
  
	  $('.form-toggle').addClass('visible');
	  $('.form-panel.one').addClass('hidden');
	  $('.form-panel.two').addClass('active');
	  $('.form').animate({
		'height': panelTwo
	  }, 200);
	});
  
	$('.form-toggle').on('click', function(e) {
	  e.preventDefault();
	  $(this).removeClass('visible');
	  $('.form-panel.one').removeClass('hidden');
	  $('.form-panel.two').removeClass('active');
	  $('.form').animate({
		'height': panelOne
	  }, 200);
	});
  });