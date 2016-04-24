        jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('.tabs_2.pref > ul > li').length;
	var slideWidth = $('.tabs_2.pref > ul > li').width();
	var slideHeight = $('.tabs_2.pref > ul > li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.tabs_2.pref').css({ width: slideWidth, height: slideHeight });
	
	$('.tabs_2.pref > ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.tabs_2.pref > ul > li:last-child').prependTo('.tabs_2.pref > ul');

    function moveLeft() {
        $('.tabs_2.pref > ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.tabs_2.pref > ul > li:last-child').prependTo('.tabs_2.pref > ul');
            $('.tabs_2.pref > ul').css('left', '');
        });
    };

    function moveRight() {
        $('.tabs_2.pref > ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.tabs_2.pref > ul > li:first-child').appendTo('.tabs_2.pref > ul');
            $('.tabs_2.pref > ul').css('left', '');
        });
    };

    $('.arrs.prev').click(function () {
        moveLeft();
    });

    $('.arrs.next').click(function () {
        moveRight();
    });

});  