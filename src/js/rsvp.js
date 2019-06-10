$(document).ready(function(){
	$("#willNotAttend").click(function() {
		$("#diet-restrictions").hide();
	});
	$("#willAttend").click(function(){
		$("#diet-restrictions").show();
	})
});




/*
document.getElementById("testing").addEventListener("click", myFunction); 


function myFunction() {
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$(document).ready(function(){
	$.fn.myFunction = function(){
		var x = $( "#myDIV" )
		x.css( "border", "3px solid red" );
		$("#testing").click(function() {
			$("#myDIV").hide();
		});
	}
	$(".call-btn").click(function(){
		$.fn.myFunction();
	});
});

*/