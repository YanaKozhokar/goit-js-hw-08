import Vimeo from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onTimeUpdate = function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', onTimeUpdate);
