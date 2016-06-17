$(function(){
	$(".oy").slideToggle();
		//jangan lupa kalo ngambil ID-nya SVG, ' ama " perhatiiin yak, contohnya dibawah
		$("[id='ID.AC']").click(function(){
	});
	
	/* tabs */
	function tabs1() {
		$(".tab-bottom a").click(function(event) {
			event.preventDefault();
			$(this).parent().addClass("current active deskripsi-aktif");
			$(this).parent().siblings().removeClass("current active deskripsi-aktif");
			
			var tab = $(this).attr("href");
			$(".tab-deskripsi").not(tab).css("display", "none");
			$(tab).fadeIn();
		});
	}
	
	tabs1();
	
	$(window).on("load resize", tabs1);
	
	$('#cell').hover(function(){
		$('#icon-cell').animate({
			'margin-left':'125px'
		});
		$('#crime').animate({
			'margin-top':'-70px'
		});
	}, function(){
		$('#icon-cell').animate({
			'margin-left':0
		});
		$('#crime').animate({
			'margin-top':'70px'
		});
	});
});