const setFillHeight = () => {
  const vh = $(window).height();
  $(':root').css('--vh',`${vh}px`);
}
$(window).resize(setFillHeight);
setFillHeight();


$(window).on('touchstart',function(e){
  const touchObject = e.touches[0];
  startY = touchObject.pageY;
  objectHeight = $('.tweet-container').height();
});
$(window).on('touchmove', function(e) {
  const touchObject = e.touches[0];
  moveY = touchObject.pageY;
  const Y = startY - moveY;
  const height = $(window).height();
  const Y2 = objectHeight + Y;
  const tlHeight = $('.twitter-timeline').height() + height*0.1;
  $('.tweet-container').css('max-height', `${tlHeight}px`)
  $('.tweet-container:not(.tc-100vh)').css('height',`${Y}px`);
  $('.tweet-container.tc-100vh').css('height', `${Y2}px`);
});
$(window).on('touchend', function() {
  const tc = $('.tweet-container').height();
  const windowHeight = $(window).height();
  const thisHeight = windowHeight + 100;
  if ($('.tweet-container').hasClass('tc-100vh')) {
    tch = windowHeight*0.85;
  } else {
    tch = windowHeight*0.15;
  };
  if (tc >= windowHeight) {} else if (tc > tch) {
    $('.tweet-container').animate({height:`${thisHeight}`}, 500, 'swing', function(){
      $('.tweet-container').addClass('tc-100vh');
    });
  } else {
    $('.tweet-container').animate({height:0}, 500, 'swing', function(){
      $('.tweet-container').removeClass('tc-100vh');
    });
  };
});
