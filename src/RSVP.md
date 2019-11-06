---
layout: page.html
outdirs: '..'
title: RSVP
cssfile: rsvp
jsfile: rsvp
---
<h1>RSVP</h1>


<div class="rsvp info fadeygreen">
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
		<!--<form method="POST" action="https://formspree.io/itsawedding.fyi@gmail.com"> Commenting out post-wedding -->
		<form>
		<input id='subjwho' type="hidden" name="_subject" value="" />
		<!-- code builds attendance and optional diet/comment sections for each guest in party-->
		<div id='friexp'>You are invited to the wedding on 10/26, and a casual Friday evening gathering on 10/25. Please RSVP below for each event. If you plan to attend the Friday gathering, please enter an email address so we can update you about the event location.</div>
	    </form>
	</div>
	<div id="oldsuberror"><p class='highlight'>Sorry, the wedding already happened! No more RSVPs can be submitted</p></div>

</div>
