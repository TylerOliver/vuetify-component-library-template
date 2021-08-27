import successAudio from '@/assets/audio/success.flac';
import failureAudio from '@/assets/audio/failure.mp3';
import pauseAudio from '@/assets/audio/smb_pause.flac';
import completeAudio from '@/assets/audio/grunt_birthday_party.flac';

const success = async () => {
  const audio = new Audio(successAudio);
  await audio.play();
};

const failure = async () => {
  const audio = new Audio(failureAudio);
  await audio.play();
};

const pause = async () => {
  const audio = new Audio(pauseAudio);
  await audio.play();
};

const complete = async () => {
  const audio = new Audio(completeAudio);
  await audio.play();
};

export default {
  success,
  failure,
  pause,
  complete,
};
