

// Search func
$('#toggleSearch').click(function(){
	$('.search-holder').slideToggle();
	$('.search-holder').toggleClass('collapsed');
	if ($('.search-holder').hasClass('collapsed')) {
		$('body').addClass('body-scroll-disable');
	}
	else {
		$('body').removeClass('body-scroll-disable');
	}
	if ($('#header-categories-collapse').hasClass('in')) {
		$('.search-holder').css({"z-index": "100000"});
	}
	else {
		$('.search-holder').css({"z-index": "70;"});
	}

});


$(".navbar-header .navbar-toggle").click(function(){
	if ($('#header-categories-collapse').hasClass('in')) {
		$('body').removeClass('body-scroll-disable');
	}
	else {
		$('body').addClass('body-scroll-disable');
	}
});

// Subheader collapse func
$('.subheader-collapse #toggleSubheader').click(function(e){
	$(this).parent().hide();
	$('.subheader-collapse .subheader-info-inner').show();
	$('.subheader-collapse').addClass('collapsed');
	e.preventDefault();
});

// Likes
$('.like-link, .like-btn').click(function(e){
	e.preventDefault();
});

// Anchor
$('a[href^="#go"]').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

if($(window).width() < 767)
{
	$('a[href^="#go"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top - 80
	    }, 500);
	    return false;
	});
}


$('.email-page-subheader-collapse #toggleSubheader').click(function(e){
	$(this).parent().hide();
	$('.email-page-subheader-collapse .email-page-subheader-info-inner').show();
	$('.email-page-subheader-collapse').addClass('collapsed');
	e.preventDefault();
});