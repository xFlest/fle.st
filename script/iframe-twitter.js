function changeTwitterWidgetDesign() {
  var $twitter_widget = $('iframe.twitter-timeline');
  $twitter_widget_contents = $twitter_widget.contents();

  if ($twitter_widget.length > 0 && $twitter_widget[0].contentWindow.document.body.innerHTML !== "") {
    $twitter_widget_contents.find('head').append(`
    <link href="/style/iframe-twitter.css" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost&family=Zen+Maru+Gothic&display=swap" rel="stylesheet">
    `);
    setFillHeighti();
  }
  else {
    setTimeout(function() {
      changeTwitterWidgetDesign();
    }, 350);
  }
}
function setFillHeighti() {
  const vh = $(window).height();
  const vw = $(window).width();
  $twitter_widget_contents.find(':root').css("--vh",`${vh}px`);
  if (vw > vh) {
    $twitter_widget_contents.find(':root').css('--vmin', `${vh}px`);
  } else {
    $twitter_widget_contents.find(':root').css('--vmin', `${vw}px`);
  }
}
$(window).resize(setFillHeighti);
changeTwitterWidgetDesign();
