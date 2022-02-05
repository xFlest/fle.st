const redrect = () => {
  const pathnam = location.pathname;
  if (pathnam = 'tweet') {
    location.replace('https://fle.st');
  } else {
    location.href('https://google.com');
  }
};
redrect();
