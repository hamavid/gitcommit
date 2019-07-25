$(document).ready(function(){

	linkstyle();
	function linkstyle() {
		$('.text a').attr('target','_blank');
	}

	function touched() {
		console.log('touched');
		$('.middle').addClass('altmiddle');
		$('.text').addClass('alttext');
		$('.container').addClass('altcontainer');
	}
	function hovered() {
		console.log('hovered');
		$('.middle').removeClass('altmiddle');
		$('.text').removeClass('alttext');
		$('.container').removeClass('altcontainer');
	}

// Check if user can hover - will decide if hover area shows up based on results
  function hovercheck(sign){
    if (sign === 1){hovered();}
    if (sign === -1){touched();}
  }
	window.addEventListener('mouseover', function onFirstHover() {
	    hovercheck(1);
	    window.removeEventListener('mouseover', onFirstHover, false);
	  }, false);
	  window.addEventListener('touchstart', function onFirstTouch() {
	    hovercheck(-1);
	    window.removeEventListener('touchstart', onFirstTouch, false);
	  }, false);

});