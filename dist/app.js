$(function(){
	$('html').click(function(e){
		if(e.target == document.documentElement){
			$('html').removeClass('open-sidebar');
		}
	});
	
	$("#view").load("dashboard.html", function(){
				
	});
		
});

	