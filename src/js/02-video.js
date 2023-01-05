import Vimeo from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onTimeUpdate = function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', onTimeUpdate);
