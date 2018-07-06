const svgContainer = document.querySelector('.svg-container');

const animation = bodymovin.loadAnimation({
  container: svgContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
});

const svgContainer2 = document.querySelector('.svg-container-2');

const animation2 = bodymovin.loadAnimation({
  container: svgContainer2,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'spinner.json'
});