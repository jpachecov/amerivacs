		if($(window).width() < 650){
			$('.menu').css('margin-top','8%');
			$('.menu').css('margin-bottom','8%');
		} else {
			$('.menu').css('margin-top','0%');
			$('.menu').css('margin-bottom','0%');

		}
$(document).ready(function(){

	$(window).resize(function(){
		if($(window).width() < 970){
			$('#formu').css('position','relative');
		} else {
			$('#formu').css('position','absolute');
		}

		if($(window).width() < 650){
			$('.menu').css('margin-top','8%');
			$('.menu').css('margin-bottom','8%');
		} else {
			$('.menu').css('margin-top','0%');
			$('.menu').css('margin-bottom','0%');

		}

	})
});