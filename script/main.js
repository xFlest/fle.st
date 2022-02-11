const setFillHeight = () => {
  const vh = $(window).height();
  $(':root').css('--vh', `${vh}px`);
}
$(window).resize(setFillHeight);
setFillHeight();


const Interval = () => {
  const cardPosition = $('.prf').offset();
  const cardHeight = $('.prf').height();
  const cardBottomY = cardPosition.top + cardHeight;
  const contentPosition = $('.content-top-wave').offset();
  const ccInterval = contentPosition.top - cardBottomY;
  return ccInterval;
};
const firstInterval = Interval();
const hideCard = () => {
  const nowInterval = Interval();
  const intervalRatio = nowInterval / firstInterval;
  $('.prf').css('opacity', `${intervalRatio}`);
  if (intervalRatio <= 0) {
    $('.prf').css('pointer-events', 'none');
  } else {
    $('.prf').css('pointer-events', 'auto');
  }
};
$('.content-scroller').scroll(function() {
  hideCard();
});

const linkListScroll = () => $('.link-list').scrollLeft();
const llScrollL = () => {
  const itemWidth = $('.link-list li').width();
  const gapWidth = $('.link-list').width() * 0.025;
  const scroll = itemWidth + gapWidth;
  return scroll;
};
$('.lln-left').on('click',function(){
  const scrollTo = linkListScroll() - llScrollL();
  $('.link-list').scrollLeft(scrollTo)
});
$('.lln-right').on('click', function() {
  const scrollTo = linkListScroll() + llScrollL();
  $('.link-list').scrollLeft(scrollTo)
});
const hideLlNav = () => {
  if(linkListScroll() == 0){
    $('.lln-left').addClass('hide-llnav')
  } else if (linkListScroll() > 0) {
    $('.lln-left').removeClass('hide-llnav')
  }
  const listWidth = $('.link-list').width();
  const linkListScrollRight = linkListScroll() + listWidth;
  const llScrollWidth = $('.link-list').get(0).scrollWidth;
  if (linkListScrollRight >= llScrollWidth-1) {
    $('.lln-right').addClass('hide-llnav')
  } else if (linkListScrollRight < llScrollWidth-1) {
    $('.lln-right').removeClass('hide-llnav')
  }
}
$('.link-list').scroll(function(){
  hideLlNav();
});
hideLlNav();
