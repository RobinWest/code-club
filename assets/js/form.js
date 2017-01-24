"use strict";

function validateName(value){
	if(value && value.length > 3)
		return true;

	return false;
};

function validateEmail(value){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(!value)
		return false;

	return regex.test(value);
};

$(document).ready(function(){
	$('#sign-up').on('blur', 'input', function(e){
		console.log(e);
		$(e.target).removeClass('invalid empty');

		if(!e.target.value.length)
			$(e.target).addClass('invalid empty');
	}).on('blur', '#name', function(e){
		$(e.target).removeClass('short');

		var val = e.target.value || '';

		if(!validateName(val))
			$(e.target).addClass('invalid short');

	}).on('blur', '#email', function(e){
		$(e.target).removeClass('pattern');

		var val = e.target.value || '';

		if(!validateEmail(val))
			$(e.target).addClass('invalid pattern');

	});

});
