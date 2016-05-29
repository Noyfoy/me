$(function () {
    // nav
    $('#nav-icon1').click(function(){
  		$('#nav-icon1').toggleClass('open');
      if($('#nav-icon1').hasClass('open')){
        $('#nav-foooo').fadeIn();
      } else {
        $('#nav-foooo').fadeOut();
      }
  	});

    $('.do a').click(function () {
      $('#nav-foooo').fadeOut();
    })

    // nav

    // scroll one
   $(window).scroll(function () {
      var $scroll = $(window).scrollTop();
      if ($scroll >= 500) {
        $(".left-part").transition({
          x: '0',
          y:'0'
        },700);

        $(".trick-1 span:first-child").delay(300).transition({
          x : '0',
          y :'0',
          rotate: '-51deg'
        },700);

        $(".trick-1 span:last-child").delay(800).transition({
          x : '0',
          y :'0',
          rotate: '-51deg'
        },700)
      }
      if ($scroll >= 1745){
        $(".trick span:first-child").delay(300).transition({
          x : '0',
          y :'0',
          rotate: '-51deg'
        },700);

      }

    })
    // scroll

})
