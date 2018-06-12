$(document).ready(function () {

let mainNav = $('#main-nav');
let navbarToggle = $('#navbar-toggle');


navbarToggle.click(()=>{

    if(mainNav.hasClass("open"))
    {
         mainNav.css("display","flex");
         mainNav.removeClass('open');
         mainNav.addClass('close');
    }
    else if(mainNav.hasClass("close"))
    {
        mainNav.css("display","none");
        mainNav.removeClass('close');
        mainNav.addClass('open');
    }



});

});
