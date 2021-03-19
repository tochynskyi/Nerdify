$(document).ready(function () {
	$('.slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		autoplay: true,
		infinite: true,
		speed: 1000,
		dots: true,
		initialSlide: 0,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	})
});

