//---------------- skillbar js--------------------

$(window).scroll(function(){
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
     
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('.skillbar-wrapper')) {
    	   		console.log('here');
      	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
    }
});

// $("#scoll_top").click(function () {
//    //1 second of animation time
//    //html works for FFX but not Chrome
//    //body works for Chrome but not FFX
//    //This strange selector seems to work universally
//    $("html, body").animate({scrollTop: 0}, 1000);
// });

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});