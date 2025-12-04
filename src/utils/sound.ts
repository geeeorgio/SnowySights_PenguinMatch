import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let successSound: Sound | null = null;
let bgSound: Sound | null = null;
let inited = false;

export const initSounds = (onBgLoad?: () => void) => {
  if (inited) return;

  inited = true;

  successSound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('success sound load error', e);
      return;
    } else successSound?.setVolume(0.2);
  });

  bgSound = new Sound('bg.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('bg sound load error', e);
      return;
    }
    bgSound?.setNumberOfLoops(-1);
    bgSound?.setVolume(0.15);

    if (onBgLoad) {
      onBgLoad();
    }
  });
};

export const playSuccessSound = (isEnabled: boolean) => {
  if (!isEnabled || !successSound) return;

  if (!successSound) {
    console.log('success sound not ready');
    return;
  }

  successSound.stop();
  successSound.setCurrentTime(0);
  successSound.play((success) => {
    if (!success) {
      console.log('Failed to play success sound');
    }
  });
};

export const playBgSound = (isEnabled: boolean) => {
  if (!isEnabled || !bgSound) return;

  if (bgSound.isPlaying()) return;

  bgSound?.play((success) => {
    if (!success) {
      console.log('bg playback failed');
    }
  });
};

export const stopBgSound = () => {
  if (!bgSound) return;
  bgSound.stop();
};

export const cleanupSounds = () => {
  bgSound?.stop();

  successSound?.release();
  bgSound?.release();

  successSound = null;
  bgSound = null;
  inited = false;
};
