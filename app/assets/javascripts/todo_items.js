// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
 $(document).ready(function() {
  $('#type').on('mouseenter', function(){
    $('#slider').slideToggle();
  });

  $('td').on('mouseenter', function(){
    $(this).find('a').addClass('pulse');
  });
  $('td').on('mouseleave', function(){
    $(this).find('a').removeClass('pulse');
  });

  setInterval(function(){
    $('.shake').effect('shake', {direction: 'right'});
  },
  15000
  );



});
