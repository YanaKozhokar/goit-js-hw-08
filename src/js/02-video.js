import Vimeo from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

if (localStorage.getItem('videoplayer-current-time') === undefined) {
  return;
} else {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

const onTimeUpdate = function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', onTimeUpdate);
