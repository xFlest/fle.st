const redrect = () => {
  const url = location.href;
  if (url = 'https://fle.st/tweet') {
    location.href = 'https://fle.st';
  } else {
    location.href = 'https://google.com';
  }
};
redrect();
