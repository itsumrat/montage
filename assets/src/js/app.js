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