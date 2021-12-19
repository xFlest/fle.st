const setFillHeight = () => {
  const vh = $(window).height();
  $(':root').css('--vh',`${vh}px`);
}
$(window).resize(setFillHeight);
setFillHeight();
