$(document).ready(function() {
	$('main').css('opacity',0).fadeTo(400,1);
	$('.fade').css('opacity',0).fadeTo(1500,1);

	//fotorama API
  	$(function () {
   		var $fotoramaDiv = $('#cfp').fotorama();
    	var fotorama = $fotoramaDiv.data('fotorama');

  		function beginning() {
  			fotorama.show(0);
  		}

  		$('#cfphotoLink').click(function(){
			event.preventDefault();
			beginning();
		});
	});

	$(function () {
   		var $fotoramaDiv = $('#photobooth').fotorama();
    	var fotorama = $fotoramaDiv.data('fotorama');

  		function beginning() {
  			fotorama.show(0);
  		}

  		$('#photoboothLink').click(function(){
			event.preventDefault();
			beginning();
		});
	});

/*	$(function () {
   		var $fotoramaDiv = $('#friendsphotos').fotorama();
    	var fotorama = $fotoramaDiv.data('fotorama');

  		function beginning() {
  			fotorama.show(0);
  		}

  		$('#friendsphotoLink').click(function(){
			event.preventDefault();
			beginning();
		});
	});
*/
	$(function () {
   		var $fotoramaDiv = $('#family').fotorama();
    	var fotorama = $fotoramaDiv.data('fotorama');

  		function beginning() {
  			fotorama.show(0);
  		}

  		$('#familyPhotosLink').click(function(){
			event.preventDefault();
			beginning();
		});
	});

	$('#family').on('fotorama:ready', function() {
		$('.photo').delay(100).hide(0);
		$('#cfp-wrapper').show(0);
		$('#cfphotoLink').css('color','rgb(255,58,46)');
	});

	$('#cfphotoLink').click(function(){
		event.preventDefault();
		$('.photo').hide(0);
		$('#cfp-wrapper').show(0);
		$(this).css('color','rgb(255,58,46)');
		$('#photoboothLink').css('color','rgb(79,135,255)');
		$('#friendsphotoLink').css('color','rgb(79,135,255)');
		$('#familyPhotosLink').css('color','rgb(79,135,255)');
		$('#videoLink').css('color','rgb(79,135,255)');
		player1.stopVideo();
		player2.stopVideo();
		player3.stopVideo();
		player4.stopVideo();
		player5.stopVideo();
//		player6.stopVideo();
	});

	$('#photoboothLink').click(function(){
		event.preventDefault();
		$('.photo').hide(0);
		$('#photobooth').show(0);
		$('.photoLink').css('color','rgb(79,135,255)');
		$(this).css('color','rgb(255,58,46)');
		player1.stopVideo();
		player2.stopVideo();
		player3.stopVideo();
		player4.stopVideo();
		player5.stopVideo();
//		player6.stopVideo();
	});

	$('#friendsphotoLink').click(function(){
		event.preventDefault();
		$('.photo').hide(0);
		$('#friends-wrapper').show(0);
		$('.photoLink').css('color','rgb(79,135,255)');
		$(this).css('color','rgb(255,58,46)');
		player1.stopVideo();
		player2.stopVideo();
		player3.stopVideo();
		player4.stopVideo();
		player5.stopVideo();
//		player6.stopVideo();
	});

	$('#familyPhotosLink').click(function(){
		event.preventDefault();
		$('.photo').hide(0);
		$('#family').show(0);
		$('.photoLink').css('color','rgb(79,135,255)');
		$(this).css('color','rgb(255,58,46)');
		player1.stopVideo();
		player2.stopVideo();
		player3.stopVideo();
		player4.stopVideo();
		player5.stopVideo();
//		player6.stopVideo();
	});

	$('#videoLink').click(function(){
		event.preventDefault();
		$('.photo').hide(0);
		$('#videos').show(0);
		$('.photoLink').css('color','rgb(79,135,255)');
		$(this).css('color','rgb(255,58,46)');
		player1.seekTo(3,true);
		player1.playVideo();
		player2.stopVideo();
		player3.stopVideo();
		player4.stopVideo();
		player5.stopVideo();
//		player6.stopVideo();
	});

	$('.fotorama').fotorama({
  		width: '100%',
  		maxwidth: '800px',
  		allowfullscreen: true,
  		nav: 'thumbs',
  		arrows: true,
  		autoplay: '3000',
  		transition: 'crossfade',
  		clicktransition: 'crossfade',
  		loop: true,
  		keyboard: true,
  		navposition: 'bottom',
  		shuffle: false,
  		stopautoplayontouch: false
	});

	$('#photobooth').fotorama({
		maxwidth: '400px',
		transition: 'slide',
		autoplay: '2800'
	});

	for (i=1;i<=148;i++) {
		$('#photobooth').append("<a href='photobooth/photobooth-" + i + ".jpg'></a>");
	}

	for (j=1;j<=214;j++) {
		$('#cfp').append("<a href='cfp/Amy+Oren-" + j + ".jpg'></a>");
	}

	for (k=1;k<=13;k++) {
		$('#family').append("<a href='familyphotos/family-" + k + ".jpg'></a>");
	}


	$('.warning').delay(1600);
	for (i = 0;i < 3; i+=1) {
		$('.warning').fadeOut(200,'linear').fadeIn(400,'linear');
	}

	$('#mountainMan').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Mountain Man',1);
	});

	$('#axisLogo').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'AXIS Logo',1);
	});

	$('#axisLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'AXIS Link',1);
	});

	$('#seafairHotelsLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Seafair Hotels Page Link',1);
	});

	$('#soundTransitHotelsLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'SoundTransit Hotels Page Link',1);
	});

	$('#arcticClubLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Arctic Club Link',1);
	});

	$('#arcticClubImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Arctic Club Image',1);
	});
	
	$('#weddingBlockLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Wedding Block Link',1);
	});

	$('#marriottLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Marriott Link',1);
	});

	$('#marriottImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Marriott Image',1);
	});

	$('#bestWesternLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Best Western Link',1);
	});

	$('#bestWesternImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Best Western Image',1);
	});

	$('#alexisLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Alexis Link',1);
	});

	$('#alexisImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Alexis Image',1);
	});

	$('#hotel1000Link').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Hotel 1000 Link',1);
	});

	$('#hotel1000Img').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Hotel 1000 Image',1);
	});

	$('#silverCloudBroadwayLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Silver Cloud Broadway Link',1);
	});

	$('#silverCloudBroadwayImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Silver Cloud Broadway Image',1);
	});

	$('#silverCloudStadiumLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Silver Cloud Stadium Link',1);
	});

	$('#silverCloudStadiumImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Silver Cloud Stadium Image',1);
	});

	$('#vrboLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'VRBO Link',1);
	});

	$('#airbnbLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'airbnb Link',1);
	});

	$('#seatacLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'SeaTac Link',1);
	});

	$('#soundTransitTransportationLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Sound Transit Transportation Page Link',1);
	});

	$('#uberImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Uber Image',1);
	});

	$('#lyftImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Lyft Image',1);
	});

	$('#taxisImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Taxis Image',1);
	});

	$('#busesImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Buses Image',1);
	});

	$('#soundTransitTransportationImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Sound Transit Transportation Page Image',1);
	});

	$('#bikeMapImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Bike Map Image',1);
	});

	$('#bikeShareImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Bike Share Image',1);
	});

	$('#parkingLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Parking Link',1);
	});

	$('#seafairVisitLink').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Seafair Visit Page Link',1);
	});

	$('#pikePlaceImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Pike Place Image',1);
	});

	$('#starbucksImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Starbucks Image',1);
	});

	$('#spaceNeedleImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Space Needle Image',1);
	});

	$('#chihulyImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Chihuly Image',1);
	});

	$('#gasWorksImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Gas Works Image',1);
	});

	$('#lakeWashingtonImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Lake Washington Image',1);
	});

	$('#japaneseGardenImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Japanese Garden Image',1);
	});

	$('#pioneerSquareImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Pioneer Square Image',1);
	});

	$('#fremontTrollImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Fremont Troll Image',1);
	});

	$('#fremontImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Fremont Image',1);
	});

	$('#greatWheelImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Great Wheel Image',1);
	});

	$('#aquariumImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Aquarium Image',1);
	});

	$('#undergroundTourImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Underground Tour Image',1);
	});

	$('#duckToursImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Duck Tours Image',1);
	});

	$('#restaurantLinks a').on('click', function() {
  		ga('send', 'event', 'link', 'click', 'Restaurant Link (multiple)',1);
	});

	$('#bprImg').on('click', function() {
  		ga('send', 'event', 'img', 'click', 'Blueprint Registry Image',1);
	});
});
	

//YouTube API
	var tag = document.createElement('script');
     	tag.src = "https://www.youtube.com/iframe_api";
      	var firstScriptTag = document.getElementsByTagName('script')[0];
      	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player1;
	var player2;
	var player3;
	var player4;
	var player5;
	var player6;

  	function onYouTubeIframeAPIReady() {
    	player1 = new YT.Player('player1', {
   			playerVars: { 'showinfo': 0, 'rel': 0 },
      		videoId: 'XcLd7U8Ofac'
      		//Breaking the glass (0:15)
    	});

    	player2 = new YT.Player('player2', {
   			playerVars: { 'showinfo': 0, 'rel': 0 },
      		videoId: 'uvCDbeC0Q4M'
      		//Lifting bride and groom in chairs (0:30)
    	});

   		player3 = new YT.Player('player3', {
   			playerVars: { 'showinfo': 0, 'rel': 0 },
      		videoId: 'HpFAHquAS7k'
      		//Oren dancing with mom and sisters (0:48)
    	});

    	player4 = new YT.Player('player4', {
   			playerVars: { 'showinfo': 0, 'rel': 0 },
      		videoId: 'meBOlwp-BP8'
      		//Dancing at the wedding (0:25)
    	});

    	player5 = new YT.Player('player5', {
   			playerVars: { 'showinfo': 0, 'rel': 0 },
      		videoId: 'cHlPiOj-sSE'
      		//Professional wedding video (38:21)
    	});

 //   	player6 = new YT.Player('player6', {
 //  			playerVars: { 'showinfo': 0, 'rel': 0 },
 //     		videoId: ''
      		//Wedding ceremony by Andre Dick (0:00)
 //  	});

}
