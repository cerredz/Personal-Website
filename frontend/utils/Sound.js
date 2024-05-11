// plays the clicking sound
const clickSound = (volume) => {
  const audio = new Audio("/sounds/click.mp3");
  audio.volume = parseFloat(volume).toFixed(2);
  audio.play();
};

//plays the woosh sound effect
const whooshSound = () => {
  const audio = new Audio("/sounds/whoosh.mp3");
  audio.volume = 0.5;
  audio.play();
};

// plays the sound when switching to dark mode
const toggleSound = (volume) => {
  const audio = new Audio("/sounds/toggle-whoosh.mp3");
  audio.volume = parseFloat(volume).toFixed(2);
  audio.play();
};

const playSong = async (category, volume) => {
  try {
    // Create a new audio element with the class "background-music"
    const audio = new Audio(`/sounds/${category}.mp3`);
    audio.classList.add("background-music");
    audio.volume = parseFloat(volume).toFixed(2);
    audio.loop = true;
    return audio;
  } catch (error) {
    console.log("🔴 Error: Failed to Play Background Music", error);
  }
};

// plays the sound effect when you click a navbar link
const navLinkClick = () => {
  const audio = new Audio("/sounds/navLinkClick.mp3");
  audio.volume = 0.5;
  audio.play();
};

//plays the sound effect when you hover a navbar link
const navLinkHover = () => {
  const audio = new Audio("/sounds/navLinkHover.mp3");
  audio.volume = 0.5;
  audio.play();
};

export {
  clickSound,
  toggleSound,
  playSong,
  whooshSound,
  navLinkClick,
  navLinkHover,
};
