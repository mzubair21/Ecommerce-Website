/* hovering link-image to highlight title*/
	$('.link-image').mouseover(function () {
		$(this).siblings('.title').addClass('link');
	});
	$('.link-image').mouseleave(function () {
		$(this).siblings('.title').removeClass('link');
	});
	/*End of Hover image in banner*/