
// open small nav menu on navbar click and show overlay, close when overlay is clicked or navbars are clicked again
	function togglemenu() {
		$('.smallnavlinks').slideToggle();$('#overlaybkgrnd').fadeToggle();
	};

// take away background image on touch screens
	function touchcheck(){
		$('body').style('background-image','none');
	}
	window.addEventListener('touchstart', function onFirstTouch() {
	    touchcheck();
	    window.removeEventListener('touchstart', onFirstTouch, false);
	}, false);

	//$('.navbar-bars, .overlay').click(togglemenu());

// swipe up to close menu
 	/*$('.smallnavlinks, .overlay').touchwipe({
      wipeUp: function() {togglemenu()},
      min_move_x: 20,min_move_y: 20,preventDefaultEvents: true
    });
*/


