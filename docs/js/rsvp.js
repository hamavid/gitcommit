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
    "X97ER": "Test Guest, Another Tester",
  }

  // reactivate search button if text box is clicked
  $('.search-container').click(function(e){
    $('.search-container button, #indeed').removeClass('inactivebutton');
  });

  // functions to find names by code (key) and report it in the result div when the key button is clicked
  $('.search-container button').click(function(e){
    // change all css back to how it would be on refresh // NOTE: IS THERE MORE? THINK THIS THROUGH
    $('.broken').removeClass('highlight');
    $('#confirm-buttons').css('display','none');
    $('#result').html('');
    $('section, button[type=submit]').remove();
    $('#rsvp-form').hide();
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
    $('#confirm-buttons').css('display','none');
    $('#result').html('');
    $('#rsvp-form').hide();
    $('section, button[type=submit]').remove();
    $('.broken, .broken a').addClass('highlight');
  });

  // If 'yes that's me/us!' button is clicked, show appropriate number of will/won't attends and populate name field
  $('#indeed').click(function(){
    // make this button and search button not do anything and empty out anything currently in the rsvp form
    $('section, button[type=submit]').remove();
    $('.search-container button, #indeed').addClass('inactivebutton');
    // deal with input text
    var input = $('#namesinput').val().toUpperCase(); //uppercase it in case people were inconsistent
    // if there is no guestlist entry for this code, display error message
    if (names[input] === undefined) {
      var result = "Hmmm that doesn't look right. Check that your code is 5 characters long and contains only letters and numbers.";
      $('#result').html(result);
      return;
    // if guestlist entry is found, continue
    } else {
      var respondingfor=names[input];
      var numppl = respondingfor.split(', ').length;
      // show rsvp form
      $('#rsvp-form').show();
      // create attendance options and comment/diet fields for each possible guest and customize to the guest
      for (var i=0;i<numppl;i++) {
        buildform(i);
        var guestname = respondingfor.split(', ')[i];
        $('input[name="name'+i+'"]').val(guestname);
        //$('#diet'+i+' div').html('Optional: Tell us something!<br>If '+guestname.split(' ')[0]+' <em>will</em> be attending, please let us know if they have any food allergies or dietary restrictions.');
        $('#diet'+i+' div').html('Optional: Please let us know about any food allergies or dietary restrictions for ' + guestname.split(' ')[0] + ', or anything else you want to tell us!');
        $('#diet'+i).show();
      }
      $('#rsvp-form form').append('<button type="submit">Submit</button>');
    }
  })

  // Function to build an RSVP section per guest
  function buildform(i){
    var att_section = $('<section></section>').attr('id', 'att'+i);
    $('#rsvp-form form').append(att_section);
    att_section.append('<input type="text" value="" name="name'+i+'" readonly><br>');
    att_section.append('<input type="radio" name="att'+i+'" class="willAttend" value="willAttend" required>');
    att_section.append('<label for="willAttend">Will attend</label><br>');
    att_section.append('<input type="radio" name="att'+i+'" class="willNotAttend" value="willNotAttend" required>');
    att_section.append('<label for="willNotAttend">Will not attend</label><br>');
    var comment_section = $('<section></section').attr('id', 'diet'+i);
    $('#rsvp-form form').append(comment_section);
    comment_section.append('<div></div>');
    comment_section.append('<textarea name="diet'+i+'" placeholder="Enter allergies/dietary restrictions, or anything else you want to tell us!" rows="4"></textarea>');
  }


});