$(document).ready(function(){

  var names = {
    "G5LJM": "Pam Swing, Marty Plotkin",
    "LMJGU": "Anna Plotkin-Swing",
    "WH3TH": "Ellen Davidson",
    "N7UE2": "Jim Hammerman, Maggie Leary",
    "A5UU4": "Aviva Hamavid, Jake Patterson",
    "DMESP": "Henry Plotkin",
    "G2SM3": "Helen Plotkin, Richard Schuldenfrei",
    "HN28S": "Miriam Schuldenfrei, Manse Jennings",
    "WZ86A": "Sarah Schuldenfrei, Matt Donaldson",
    "LMZDZ": "Bradford Swing, Tim Harbold"
  }

  // functions to find names by code (key) and report it in the result div when the key button is clicked
  $('.search-container button').click(function(e){
    // change css back if necessary
    $('.broken').removeClass('highlight');
    e.preventDefault();
    var input = $('#namesinput').val().toUpperCase();
    if (names[input] === undefined) {
      var result = "Hmmm that doesn't look right. Check that your code is 5 characters long and contains only letters and numbers.";
      $('#result').html(result);
    } else {
      getnames(input);
    }
  });
  function getnames(inp) {
    var respondingfor=names[inp];
    var numppl = respondingfor.split(', ').length;
    $('#result').html('Looks like you are responding for: <br><p id="respondents">' + parsenames_pretty(respondingfor) + '</p>');
    // populate yes button depending on num ppl
    if (numppl > 1) {$('#indeed').html("Yes, that's us!");}
    else {$('#indeed').html("Yes, that's me!");}
    // show confirmation buttons
    $('#confirm-buttons').css('display','block');
  };

  // function to add ands where appropriate in name lists
  function parsenames_pretty(namelist) {
    var lastcomma=namelist.lastIndexOf(', ', namelist.length);
    if (lastcomma > 0) {
      var newnames = namelist.substr(0,lastcomma) + ' and' + namelist.substr(lastcomma+1);
      return newnames;
    }
    else {return namelist;}
  }

  // If 'nope try again' button is clicked, clear text field, result field, and highlight the link to alt-rsvp page in red
  $('#notso').click(function(){
    $('#namesinput').val('');
    $('#result').html('');
    $('.broken, .broken a').addClass('highlight');
  });




});