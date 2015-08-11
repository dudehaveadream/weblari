

// Search func
$('#toggleSearch').click(function(){
	$('.search-holder .search-inner').slideToggle();
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