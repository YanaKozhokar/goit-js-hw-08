import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onVideoPlayer, 1000));

function onVideoPlayer(event) {
  let dataString = event.seconds;
  localStorage.setItem(STORAGE_KEY, dataString);
}

const savedSeconds = localStorage.getItem(STORAGE_KEY);

if (savedSeconds) {
  player
    .setCurrentTime(savedSeconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}

// import Vimeo from '@vimeo/player';
// const iframe = document.querySelector('iframe');
// const player = new Vimeo(iframe);

// const onTimeUpdate = function (event) {
//   localStorage.setItem('videoplayer-current-time', event.seconds);
// };

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// player.on('timeupdate', onTimeUpdate);
