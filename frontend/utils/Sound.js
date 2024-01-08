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

// plays a background song based on the passed in category
/*
const playSong = async (category, volume) => {
  try {
    var allPlayingAudioFiles = document.getElementsByTagName("audio");
    console.log(allPlayingAudioFiles);
    Array.from(allPlayingAudioFiles).forEach((file) => file.pause());

    // Create a new audio element with the class "background-music"
    const audio = new Audio(`/sounds/${category}.mp3`);
    audio.classList.add("background-music");
    audio.volume = parseFloat(volume).toFixed(2);
    audio.loop = true;
    await audio.play();
  } catch (error) {
    // user not yet interacted with window, add one time event listeners
    ["click", "keydown"].forEach((eventType) =>
      window.addEventListener(eventType, () => playSong(category, volume), {
        once: true,
      })
    );

    console.log("🔴 Error: Failed to Play Background Music", error);
  }
};
*/

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
