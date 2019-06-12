$(document).ready(function(){

/* ///////////// Functions to find names and confirm which guests are responding //////////////*/
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
    "LMZDZ": "Bradford Swing, Tim Harbold",
    "X97ER": "Test guest, Another Tester",
  }

  // functions to find names by code (key) and report it in the result div when the key button is clicked
  $('.search-container button').click(function(e){
    // change all css back to how it is when page is loaded // NOTE: THERE IS MORE, THINK THIS THROUGH
    $('.broken').removeClass('highlight');
    $('#result, #rsvp-form div').html('');
    $('#rsvp-form, #rsvp-form section').hide();
    $('#rvsp-form input').val('');
    e.preventDefault();
    // deal with input text
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


/* ///////////// Functions to toggle sections depending on num guests and responses for each guest //////////////*/
// If 'nope try again' button is clicked, clear text field, result field, and highlight the link to alt-rsvp page in red
    $('#notso').click(function(){
      $('#namesinput').val('');
      $('#result, #rsvp-form div').html('');
      $('#rsvp-form, #rsvp-form section').hide();
      $('#rvsp-form input').val('');
      $('.broken, .broken a').addClass('highlight');
    });

    // If 'yes that's me/us!' button is clicked, show appropriate number of will/won't attends and populate name field
    $('#indeed').click(function(){
      // deal with input text
      var input = $('#namesinput').val().toUpperCase();
      if (names[input] === undefined) {
        var result = "Hmmm that doesn't look right. Check that your code is 5 characters long and contains only letters and numbers.";
        $('#result').html(result);
        return;
      } else {
        var respondingfor=names[input];
        var numppl = respondingfor.split(', ').length;
        // show rsvp form
        $('#rsvp-form').show();
        // show attendance options for each possible guest
        for (var i=0;i<numppl;i++) {
          $('#att'+i).show();
          $('input[name="name'+i+'"').val(respondingfor.split(', ')[i]);
        }
      }
    })



// Show food restrictions section for each person if they click 'will attend'
  $('.willNotAttend').click(function(e) {
    var guestnum = $(this).attr('name').substr(-1);
    $('#diet'+guestnum).hide();
  });
  $('.willAttend').click(function(e){
    var guestnum = $(this).attr('name').substr(-1);
    var guestname = $('#att'+guestnum+' input[name="name'+guestnum+'"').val().split(' ');
    $('#diet'+guestnum+' div').html('Please let us know about food allergies or dietary restrictions for '+guestname[0]);
    $('#diet'+guestnum).show();
  })


});