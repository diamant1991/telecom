if (window.matchMedia("(max-width: 767px)").matches){
	$('.header-left').before($('.logo'));
}

$('.cat-btn').click(function(event) {
	var catalog = $(this).next();
	if(catalog.is(':hidden')){
		catalog.slideDown(250)
	}
	else{
		catalog.slideUp(250)
	}
});

if($('#main-slider').length){
	$('#main-slider').bxSlider({
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: '',
	  prevText: '',
	  mode: 'fade',
	  pager: false
	});
}
if ($('#card-slider').length) {
	$('#card-slider').bxSlider({
	  nextSelector: '#card-next',
	  prevSelector: '#card-prev',
	  nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	  mode: 'fade'
	});
}

var mydivs=new Array('#column','#list');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}
$('.view-btn').click(function(event) {
	$('.view-btn').removeClass('active');
	$(this).addClass('active')
});

$('.article-tab a').click(function(e) {
	$('.article-tab a').removeClass('active');
	$(this).addClass('active')
});
$(document).ready(function() {
	$(".fancy-modal").fancybox({
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'fade',
		openSpeed: 350,
		closeEffect	: 'none'
	});
});
$('.toggle-menu').click(function(e) {
	e.preventDefault()
	var nav = $('#nav');
	nav.fadeIn(300);
	$('body').addClass('open-menu');
});
$('.modal-close').click(function(event) {
	$('#nav').fadeOut(300)
	$('body').removeClass('open-menu');
});

$('.top-btn').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
	return false;
});


$(document).ready(function(){
	if(window.matchMedia('(min-width: 992px)').matches){
		var $header = $(".header_main");

	  $(window).scroll(function(){
	    if ( $(this).scrollTop() > 300 ){
	        $header.addClass("fixed");
	    } 
	    else if($(this).scrollTop() <= 300) {
	       $header.removeClass("fixed")
	    }
	  });
	}
	if(window.matchMedia('(max-width: 767px)').matches){
		$('.drop-item').click(function(e) {
			e.preventDefault();
			var drop = $(this).next();
			if(drop.is(':hidden')){
				drop.slideDown(250)
				$(this).addClass('active')
			}
			else{
				drop.slideUp(250)
				$(this).removeClass('active')
			}
		});
	}
});

$(document).ready(function() {
	if (window.matchMedia("(min-width: 768px)").matches){
		var servPos, winPosMain, sidebarWidth;
	  function refreshServ() {
	    servPos = $('.sidebar').offset().top;
	    sidebarWidth = $('.sidebar').width()
	  }

	  refreshServ();
	  $(window).resize(refreshServ);
	    
	  $(window).scroll(function() {
	    winPosMain = $(window).scrollTop();
	    
	    if (winPosMain >= servPos) {
	      $('.sidebar').addClass('fixed')
	      $('.sidebar').css('width', sidebarWidth + 'px');
	    }  
	    else {
	    	$('.sidebar').removeClass('fixed')
	    	$('.sidebar').css('width', '100%');
	    }
	  });
	}
});
  