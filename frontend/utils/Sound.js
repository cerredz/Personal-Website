// plays the clicking sound
const clickSound = (volume) => {
  const audio = new Audio("/sounds/click.mp3");
  audio.volume = volume;
  audio.play();
};

// plays the sound when switching to dark mode
const toggleSound = (volume) => {
  const audio = new Audio("/sounds/toggle-whoosh.mp3");
  audio.volume = volume;
  audio.play();
};

export { clickSound, toggleSound };
