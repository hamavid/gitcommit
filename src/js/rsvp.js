$(document).ready(function(){

/* use http://www.convertcsv.com/csv-to-json.htm to get guestlist csv to json format */
/* ///////////// Functions to find names and confirm which guests are responding //////////////*/
  //$.getJSON( "../data/testnames.json", function(names) {
  $.ajax({
    dataType: 'json',
    //url: "../data/testnames.json", 
    //success:function(names) {
    url: "../data/namesandfri.json",
    success:function(namesandfri) {


    // reactivate search button if text box is clicked
    $('.search-container input').click(function(e){
      $('.search-container button, #indeed').removeClass('inactivebutton');
    });

    // functions to find names by code (key) and report it in the result div when the key button is clicked
    $('.search-container button').click(function(e){
      // change all css back to how it would be on refresh // NOTE: IS THERE MORE? THINK THIS THROUGH
      $('.broken').removeClass('highlight');
      $('#confirm-buttons').css('display','none');
      $('#result').html('');
      $('section, button[type=submit]').remove();
      $('#rsvp-form, #friexp').hide();
      $('.search-container button, #indeed').removeClass('inactivebutton');
      $('#notso').show();
      e.preventDefault();
      // deal with input text
      var input = $('#namesinput').val().toUpperCase();
      var foundit=-1;
      for (var i = 0; i < namesandfri.length; i++) {
        if (namesandfri[i].code === input) {var foundit=i;}
      }
      //if (names[input] === undefined) {
      if (foundit === -1) {
        var result = "Hmmm that doesn't look right. Check that your code is 5 characters long and contains only letters and numbers.";
        $('#result').html(result);
      } else {
        //getnames(input);
        getnames(foundit);
      }
    });


      function getnames(inp) {
        //var respondingfor=names[inp];
        var respondingfor = namesandfri[inp].names;
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
      $('#rsvp-form, #friexp').hide();
      $('section, button[type=submit]').remove();
      $('.search-container button, #indeed').removeClass('inactivebutton');
      $('.broken, .broken a').addClass('highlight');
    });

    // If 'yes that's me/us!' button is clicked, show appropriate number of will/won't attends and populate name field
    $('#indeed').click(function(){
      // make this button and search button not do anything, hide notso, and empty out rsvp form
      $('section, button[type=submit]').remove();
      $('.search-container button, #indeed').addClass('inactivebutton');
      $('#notso').hide();
      // deal with input text
      var input = $('#namesinput').val().toUpperCase(); //uppercase it in case people were inconsistent
      var foundit=-1;
      for (var i = 0; i < namesandfri.length; i++) {
        if (namesandfri[i].code === input) {var foundit=i;}
      }
      // if there is no guestlist entry for this code, display error message
      //if (names[input] === undefined) {
      if (foundit === -1) {
        var result = "Hmmm that doesn't look right. Check that your code is 5 characters long and contains only letters and numbers.";
        $('#result').html(result);
        return;
      // if guestlist entry is found, continue
      } else {
        //var respondingfor=names[input];
        var respondingfor = namesandfri[foundit].names;
        var fri = namesandfri[foundit].friyorn;
        var numppl = respondingfor.split(', ').length;
        // show rsvp form
        $('#rsvp-form').show();
        // enter names as the subject line for the email
        $('#subjwho').val('RSVP: '+respondingfor);
        // if fri is y, add explanation in appropriate div and make it visible
        if (fri === 'y') {$('#friexp').show();}
        // create attendance options and comment/diet fields for each possible guest and customize to the guest
        for (var x=0;x<numppl;x++) {
          var w = x+1
          console.log(w);
          buildform(w, fri);
          var guestname = respondingfor.split(', ')[x];
          console.log(guestname);
          $('input[name="id'+w+'"]').val(guestname);
          //$('#diet'+i+' div').html('Optional: Tell us something!<br>If '+guestname.split(' ')[0]+' <em>will</em> be attending, please let us know if they have any food allergies or dietary restrictions.');
          $('#email'+w+' div').html('Enter your email address (optional). We\'ll send you a confirmation within 24 hours and maybe some updates or details.');
          $('#diet'+w+' div').html('Please let us know about any food allergies or dietary restrictions for ' + guestname.split(' ')[0] + ', or anything else you want to tell us!');
          $('#diet'+w).show();
        }
        $('#rsvp-form form').append('<button type="submit">Submit</button>');
      }
    });

      // Function to build Friday section and customize wedding vs Fri rsvp explanations
      function frisec(i) {
        var fri_section = $('<section></section>').attr('id','fri'+i).css('margin-top','1em');
        $('#rsvp-form form').append(fri_section);
        fri_section.append('<label><input type="radio" name="fri'+i+'" class="willAttendFri" value="willAttendFri" required />Will attend Friday gathering</label><br>');
        fri_section.append('<label><input type="radio" name="fri'+i+'" class="willNotAttendFri" value="willNotAttendFri" required />Will not attend Friday gathering</label><br>');
      }


      // Function to build an RSVP section per guest
      function buildform(i, fri){
        console.log(i);
        if (fri === 'y') {var wed=' wedding';}else{var wed='';}
        var att_section = $('<section></section>').attr('id', 'att'+i);
        $('#rsvp-form form').append(att_section);
        att_section.append('<input type="text" value="" name="id'+i+'" readonly /><br>');
        att_section.append('<label><input type="radio" name="att'+i+'" class="willAttend" value="willAttend" required />Will attend'+wed+'</label><br>');
        att_section.append('<label><input type="radio" name="att'+i+'" class="willNotAttend" value="willNotAttend" required />Will not attend'+wed+'</label><br>');
        if (fri === 'y') {frisec(i);}
        var email_section = $('<section></section>').attr('id', 'email'+i);
        $('#rsvp-form form').append(email_section);
        email_section.append('<div></div>');
        email_section.append('<input type="email" name="email'+i+'" placeholder="Your email" />');
        //email_section.append('<input type="text" name="_replyto" placeholder="Your email" />');
        var comment_section = $('<section></section').attr('id', 'diet'+i);
        $('#rsvp-form form').append(comment_section);
        comment_section.append('<div></div>');
        comment_section.append('<textarea name="diet'+i+'" placeholder="Enter allergies/dietary restrictions, or anything else you want to tell us!" rows="4"></textarea>');
      }
    },
    error: function(errorObject) {
      console.error(errorObject);
    }
  });

});
  






