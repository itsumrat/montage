jQuery(document).ready(function($){

	var navigation = $('#nav-main').okayNav();

	// Circle
	$("#bluecircle").percircle({
		progressBarColor: "#30bae7",
		secs: 15,
		timeUpText: 'Finally!'
	});
	$("#yellowcircle").percircle({
		progressBarColor: "#d74680"
	});
	$("#redcircle").percircle({
		progressBarColor: "#15c7a8"
	});
	$("#blackcircle").percircle({
		progressBarColor: "#eb7d4b"
	});

	// credit where credit's due; http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design
	var element, circle, d, x, y;
	$(".btn").click(function(e){
	  
		element = $(this);
	  
		if(element.find(".circle").length == 0)
			element.prepend("<span class='circle'></span>");
			
		circle = element.find(".circle");
		circle.removeClass("animate");
		
		if(!circle.height() && !circle.width())
	  {
			d = Math.max(element.outerWidth(), element.outerHeight());
			circle.css({height: d, width: d});
		}
		
		x = e.pageX - element.offset().left - circle.width()/2;
		y = e.pageY - element.offset().top - circle.height()/2;
		
		circle.css({top: y+'px', left: x+'px'}).addClass("animate");
	})

});


//Change Navbar color when scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 150) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");
    }
});