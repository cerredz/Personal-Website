// plays the clicking sound
const clickSound = (volume) => {
  const audio = new Audio("/sounds/click.mp3");
  audio.volume = parseFloat(volume).toFixed(2);
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

export { clickSound, toggleSound, playSong };
