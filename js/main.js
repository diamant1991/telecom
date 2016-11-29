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