$(document).ready(function () {

let accordion = $('.accordion');

accordion.click(function(){
  let accordionId = $(this).attr('id');

  if($('#'+accordionId+'').hasClass("close"))
  {

      $("[data-toggle='"+accordionId+"']").show("2000");
      $('#'+accordionId+'').removeClass("close");
      $('#'+accordionId+'').addClass("open");

  }
  else if($('#'+accordionId+'').hasClass("open"))
  {

      $("[data-toggle='"+accordionId+"']").hide("3000");
      $('#'+accordionId+'').removeClass("open");
      $('#'+accordionId+'').addClass("close");

  }


});

});
