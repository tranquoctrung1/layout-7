// Main
$(document).ready(function () {
	// Phần Slider
	$('.banner .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText:['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right " ></i>'],
		items: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		autoplayHoverPause: true,
		responsive:
		{
			767:
			{
				dots: true,
				nav: false,
			}
		}
	})
	$('.ngoctrinh .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText:['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right " ></i>'],
		items: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		autoplayHoverPause: true,
	})
	$('.slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 50,
		nav: true,
		navText:['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right " ></i>'],
		items: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			768:{
				items: 2,
			}
		}
	})
	
});
