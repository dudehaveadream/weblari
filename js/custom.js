

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