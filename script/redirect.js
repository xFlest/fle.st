const redrect = () => {
  const url = location.href;
  if (url = 'https://fle.st/tweet') {
    location.replace('https://fle.st');
  } else {
    location.replace('https://google.com');
  }
};
redrect();
