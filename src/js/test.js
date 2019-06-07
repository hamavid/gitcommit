$(document).ready(function(){

	var people = ['Yvonne','Dylan','Aviva','Jake','Jim','Jacob','Karen','Ellen','Evie'];
		
		/*array['Yvonne'] = 'Yvonne','Dylan';
		array['Dylan'] = 'Yvonne','Dylan';
		array['Aviva'] = 'Aviva','Jake';
		array['Jake'] = 'Aviva','Jake';*/

var rsvpform = $('#rsvp-form');
autocomplete(rsvpform, people);
// function to automplete names based on text field element and an array of possible autocompleted values:
function autocomplete(inp, array) {
  var currentFocus;
  // execute a function when someone writes in the text field:
  //inp.addEventListener("input", function(e) {
    inp.keyup(function() {
      var val = $(this).val();
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      // for each possible guest...
      for (i = 0; i < array.length; i++) {
        // check if the guest name starts with the same letters as the text field value:
        if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          //create a DIV element for each matching element:
          var currentlist=$('#autocomplete-list').html();
          var possname = '<div class="option"><strong>'+ array[i].substr(0, val.length) + '<strong>' + array[i].substr(val.length) + '<input type="hidden" value="' + array[i] + '">';
          $('#autocomplete-list').html(currentlist + possname);
         // a.appendChild(b);
        }
      }
  });
      // execute a function when someone clicks on the item value (DIV element):
            $('.option').on("click", function(e) {
              //insert the value for the autocomplete text field:
              inp.val() = $(this).find("input").val();
              // Now close the list of autocompleted values,(or any other open lists of autocompleted values:
              closeAllLists();
            });

/*  // execute a function if user presses a key on the keyboard:
  inp.on("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        // If the arrow DOWN key is pressed, increase the currentFocus variable:
        currentFocus++;
        // and and make the current name more visible:
        addActive(x);
      } else if (e.keyCode == 38) { //up
        // If the arrow UP key is pressed, decrease the currentFocus variable:
        currentFocus--;
        // and and make the current name more visible:
        addActive(x);
      } else if (e.keyCode == 13) {
        // If the ENTER key is pressed, prevent the form from being submitted,
        e.preventDefault();
        if (currentFocus > -1) {
          // and simulate a click on the "active" name:
          if (x) x[currentFocus].click();
        }
      }
  });*/
  
  function addActive(x) {
    // a function to classify an name as "active":
    if (!x) return false;
    // start by removing the "active" class on all names:
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    // add class "autocomplete-active":
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    // a function to remove the "active" class from all autocomplete items:
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    // close all autocomplete lists in the document, except the one passed as an argument:
    var x = document.getElementsByClassName("option");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
// execute a function when someone clicks in the document:
/*document.on("click", function (e) {
    closeAllLists(e.target);
});*/
}

});