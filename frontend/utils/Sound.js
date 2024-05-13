// plays the general clicking sound
const clickSound = (volume) => {
  const audio = new Audio("/sounds/click.mp3");
  audio.volume = 0.5;
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

// play the project tab click sound
const projectTabClickSound = () => {
  try {
    const audio = new Audio("/sounds/projectTabClick.mp3");
    audio.volume = 0.5;
    audio.play();
  } catch (error) {
    console.error("Failed to play the project tab click sound: ", error);
  }
};

// play the github icon click sound
const githubIconClick = () => {
  try {
    const audio = new Audio("/sounds/githubClick.mp3");
    audio.volume = 0.5;
    audio.play();
  } catch (error) {
    console.error("Failed to play the github icon click sound: ", error);
  }
};
// play the dark mode click sound
const darkModeClickSound = () => {
  try {
    const audio = new Audio("/sounds/darkModeClick.mp3");
    audio.volume = 0.5;
    audio.play();
  } catch (error) {
    console.error("Failed to play the dark mode click sound: ", error);
  }
};

export {
  clickSound,
  toggleSound,
  playSong,
  whooshSound,
  projectTabClickSound,
  githubIconClick,
  darkModeClickSound,
};
