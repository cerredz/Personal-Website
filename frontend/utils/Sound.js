// plays the clicking sound
const clickSound = (volume) => {
  const audio = new Audio("/sounds/click.mp3");
  console.log(volume);
  audio.volume = parseFloat(volume).toFixed(2);
  audio.play();
};

// plays the sound when switching to dark mode
const toggleSound = (volume) => {
  const audio = new Audio("/sounds/toggle-whoosh.mp3");
  audio.volume = parseFloat(volume).toFixed(2);
  audio.play();
};

// plays a background song based on the passed in category
const playSong = (category, volume) => {
  try {
    //const allAudioFiles = document.querySelectorAll("audio");
    //allAudioFiles.forEach((file) => file.pause());
    const audio2 = new Audio("/sounds/toggle-whoosh.mp3");
    audio2.volume = parseFloat(volume).toFixed(2);
    audio2.play();
    const audio = new Audio(`/sounds/${category}.mp3`);
    audio.volume = parseFloat(volume).toFixed(2);
    audio.play();
    console.log(category + ", " + volume);
    console.log("🟢 Successfully Starting Playing Background Music");
  } catch {
    console.log("🔴 Error: Failed to Play Background Music");
  }
};

export { clickSound, toggleSound, playSong };
