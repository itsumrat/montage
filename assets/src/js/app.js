jQuery(document).ready(function($){

	var navigation = $('#nav-main').okayNav();


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

});


//Change Navbar color when scroll
/*$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");
    }
});*/