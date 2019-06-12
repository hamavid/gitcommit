---
layout: page.html
outdirs: '..'
title: RSVP
---
<h1>RSVP</h1>


<div class="rsvp info">
	<p>Please enter the 5-character code from your invitation to unlock your RSVP form.</p>
	<p class='broken'>Lost your code or this isn't working? <a href='../rsvp-alt'>Click here instead.</a></p>
	<div class="search-container">
	  	<form >
	      <input id='namesinput' type="text" placeholder="Enter code">
	      <button id='findnames' type="search"><i class="fa fa-key"></i></button>
	    </form>
	</div>
	<div id='result'></div>
	<div id='confirm-buttons'><button id='indeed'></button><button id='notso'>Nope... try again</button></div>
	<br>

	<div id="rsvp-form">
		<form method="POST" action="https://formspree.io/itsawedding.fyi@gmail.com">
		<!-- attendance and optional diet sections for each possible guest up to 4 in party
		number that are shown depends on script -->
	      <section id="att0">
	      	  <input type="text" value="" name="name0" readonly><br>
		      <input type="radio" name="att0" class="willAttend" value="willAttend" required>
		      <label for="willAttend">Will attend</label><br>
		      <input type="radio" name="att0" class="willNotAttend" value="willNotAttend" required>
		      <label for="willNotAttend">Will not attend</label>
		  </section>
	   	  <section id="diet0" hidden>
	   	  	<div></div>
	   	  	<textarea name="diet0" placeholder="Enter allergies/dietary restrictions, or anything else you want to tell us!" rows="4" cols="35"></textarea>
	   	  </section>

	   	  <section id="name1"></section>
	   	  <section id="att1">
	   	  	  <input type="text" value="" name="name1" readonly><br>
		      <input type="radio" name="att1" class="willAttend" value="willAttend" required>
		      <label for="willAttend">Will attend</label><br>
		      <input type="radio" name="att1" class="willNotAttend" value="willNotAttend" required>
		      <label for="willNotAttend">Will not attend</label>
		  </section>
	   	  <section id="diet1" hidden>
	   	  	<div></div>
	   	  	<textarea name="diet1" placeholder="Enter allergies/dietary restrictions, or anything else you want to tell us!" rows="4" cols="35"></textarea>
	   	  </section>

	   	  <section id="name2"></section>
	   	  <section id="att2">
	   	  	  <input type="text" value="" name="name2" readonly><br>
		      <input type="radio" name="att1" class="willAttend" value="willAttend" required>
		      <label for="willAttend">Will attend</label><br>
		      <input type="radio" name="att1" class="willNotAttend" value="willNotAttend" required>
		      <label for="willNotAttend">Will not attend</label>
		  </section>
	   	  <section id="diet2" hidden>
	   	  	<div></div>
	   	  	<textarea name="diet2" placeholder="Enter allergies/dietary restrictions, or anything else you want to tell us!" rows="4" cols="35"></textarea>
	   	  </section>

	   	  <section id="name3"></section>
	   	  <section id="att3">
	   	  	  <input type="text" value="" name="name3" readonly><br>
		      <input type="radio" name="att3" class="willAttend" value="willAttend" required>
		      <label for="willAttend">Will attend</label><br>
		      <input type="radio" name="att1" class="willNotAttend" value="willNotAttend" required>
		      <label for="willNotAttend">Will not attend</label>
		  </section>
	   	  <section id="diet3" hidden>
	   	  	<div></div>
	   	  	<textarea name="diet3" placeholder="Enter allergies/dietary restrictions, or anything else you want to tell us!" rows="4" cols="35"></textarea>
	   	  </section>

	      <button type="submit">Submit</button>
	    </form>
	</div>

</div>
