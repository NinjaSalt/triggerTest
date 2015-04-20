$('#myCarousel').carousel({
  interval: 3000
});
$('#myCarousel2').carousel({
  interval: 5000
});

//carousel navigation
$('.carousel-linked-nav > li > a').click(function() {

    var item = Number($(this).attr('href').substring(1));

    $('#myCarousel').carousel(item - 1);

    $('.carousel-linked-nav .active').removeClass('active');

    $(this).parent().addClass('active');

    return false;
});

// bind 'slid' function
$('#myCarousel').bind('slid', function() {

    // remove active class
    $('.carousel-linked-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});

$('#myCarousel2').bind('slid', function() {


    $('.carousel-linked-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel2 .item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});

$(document).ready(function() {
    
    //Fade in different parts of the site
    $(window).scroll( function(){
    
        $('.hideScroll').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > (bottom_of_object*.9) ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});