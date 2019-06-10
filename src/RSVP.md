---
layout: page.html
outdirs: '..'
title: RSVP
---
<h1>RSVP</h1>


<div class="rsvp">
	<p>RSVP for yourself and/or other members of your party.</p>
	<div class="search-container">
	  	<form >
	      <input type="text" placeholder="Search for your name to RSVP!" name="search" size="30">
	      <button type="search"><i class="fa fa-search"></i></button>
	    </form>
	</div>
	<div><br></div>
	<div class="rsvp-form" id="rsvp-form">
		<form method="POST" action="https://formspree.io/itsawedding.fyi@gmail.com" target="_blank">
	      <section>
	      	<label for="respondent">Responding for:<br></label>
	      	<input type="text" value="name_of_person_responding" placeholder="name_of_person_responding" id="respondent" name="responding_person" readonly size="25">
	      </section>
	      <section><br></section>
	      <section class="attending">
		      <input type="radio" name="attending" id="willAttend" value="willAttend">
		      <label for="willAttend">Will attend</label>
		      <input type="radio" name="attending" id="willNotAttend" value="willNotAttend">
		      <label for="willNotAttend">Will not attend</label>
	   	  </section>
	   	  <br>
	   	  <section class="diet-restrictions" id="diet-restrictions" hidden>
	   	  	<label for="diet">Do you have any dietary restrictions?<br>Please fill them out below.<br><br></label>
	   	  	<textarea name="diet" id="diet" placeholder="Fill out dietary restrictions" rows="4" cols="35"></textarea>
	   	  </section>
	   	  <!-- Just kidding Hannah, you can remove the heart if you want!! ;) -->
	      <button type="submit">Submit <i class="fa fa-heart"></i></button>
	    </form>
	</div>

</div>
</div>


<!-- 

Full name
Will attend/won't attend

If you're not - bummer
If you are - great, fill out the rest

Dietary restrictions (text field)



----

Possibly implement this:

(have it be optional to rsvp for more people, and then have the attend/not attend show up for each person)

Plus ones?

 -->

