$(function(){
	$('html').click(function(e){
		if(e.target == document.documentElement){
			$('html').removeClass('open-sidebar');
		}
	});

	$('.js-open-sidebar').click(function(){		
		$('html').addClass('open-sidebar');
	})





	//LOADS PAGES
	$("#view").load("dashboard.html", function(){
				
	});
		
});

	