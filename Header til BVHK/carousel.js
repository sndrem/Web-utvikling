$(document).ready(function(){

	$("#BVHK-slideshow").owlCarousel( {
		loop: true,
		items: 1,
		nav: true,
		dots: true,
		dotsEach: true,
		margin: 10,
		autoplay: true,
		autoplaySpeed: 10000,
		autoplayHoverPause: true,
		navText: ['Forrige', 'Neste'],
		animateIn: 'fadeOutLeft'
		
		});

});
