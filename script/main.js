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
  $('.prf').css('opacity',`${intervalRatio}`);
  if (intervalRatio <= 0) {
    $('.prf').css('pointer-events','none');
    history.pushState({}, '', '/tweet');
  } else {
    $('.prf').css('pointer-events','auto');
    history.pushState({}, '', '/index.html');
  }
};
$('.content-scroller').scroll(function(){
  hideCard();
});
