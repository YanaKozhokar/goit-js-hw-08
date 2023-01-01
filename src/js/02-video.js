import Vimeo from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const timeupdate = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', timeupdate);
