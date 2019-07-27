$('#toggle').click(function() {
	$('#toggle .bar').toggleClass('animate');
	$('#page').toggleClass('overlay');
});
baguetteBox.run('.compact-gallery', { animation: 'slideIn'});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel-4').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('.owl-carousel-5').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 700);
});