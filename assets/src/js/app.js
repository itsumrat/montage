jQuery(document).ready(function($){

	$(window).scroll(function() {
		var theta = $(window).scrollTop() / 600 % Math.PI;
		$('.site-logo').css({ transform: 'rotate(' + theta + 'rad)' });
	});

	var navigation = $('#nav-main').okayNav();

	$('.intro-text').parallax({
		calibrateX: true,
		calibrateY: true,
		scalarX: 12,
		scalarY: 12,
		frictionX: 0.1,
		frictionY: 0.1,
		originX: 0.5,
		originY: 0.5
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

	// Work
	
	$('.filter a').click(function(e) {
	  e.preventDefault();
	  var a = $(this).attr('href');
	  a = a.substr(1);
	  $('.sets a').each(function() {
	    if (!$(this).hasClass(a) && a != 'all')
	      $(this).addClass('hide');
	    else
	      $(this).removeClass('hide');
	  });

	});

	$('.sets a').click(function(e) {
	  e.preventDefault();
	  var $i = $(this);
	  $('.sets a').not($i).toggleClass('pophide');
	  $i.toggleClass('pop');
	});


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