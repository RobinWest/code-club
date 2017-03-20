"use strict";

function toggleBackground(){
	if($('body').hasClass('alternative')){
		$('body').removeClass('alternative');

	} else {
		$('body').addClass('alternative');
	}
};

// Set things up when the "document" has finished loading, otherwise some stuff might not be there
$(document).ready(function(){
	$('#change-background').on('click', function(event){
		console.log(event);

		toggleBackground();

		// $('#change-background').off('click');
	});

	// $('#add-item').on('click', function(event){
	// 	console.log(event);

	// 	$('.container').append('<div>An item</div>');
	// });

});
