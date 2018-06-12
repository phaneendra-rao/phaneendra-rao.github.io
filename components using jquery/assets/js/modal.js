$(document).ready(function () {

let modal = $('.customModal');

modal.click(function(){
  let modalId = $(this).attr('id');

  if($('#'+modalId+'').hasClass("modalClose"))
  {

      $("[data-modal='"+modalId+"']").fadeIn();
      $('#'+modalId+'').removeClass("modalClose");
      $('#'+modalId+'').addClass("modalOpen");

  }
});

let closeClass = $('.close');

closeClass.click(function(){

  let dataModalClose = $(this).attr('data-modal-close');
  $("[data-modal='"+dataModalClose+"']").fadeOut();
  $('.customModal').removeClass('modalOpen');
  $('.customModal').addClass('modalClose');

});

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];
//
// window.onclick = function(event) {
//   let modal = $('.customModal');
//   if(event.modal.hasClass("modalOpen"))
//   {
//     let modalId = event.modal.attr('id');
//     alert(modalId);
//
//   }
//
// }

});
