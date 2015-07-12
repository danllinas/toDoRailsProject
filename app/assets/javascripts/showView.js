
var main = function(){
  $('.showView').hover(function(){
    $('a').css("fontSize", "20px");
  },
  function(){
    $('a').css("fontSize", "16px");
  });
}

$(document).ready(main);
