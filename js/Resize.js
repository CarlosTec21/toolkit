$(document).ready(function(){  
   resizeContent();
  //attach on resize event
   $(window).resize(function() {
       resizeContent();
    });
});
function resizeContent()
{
   $('#content').attr('height', $(window).height() - $('#header').height() - $('#footer').height();
}