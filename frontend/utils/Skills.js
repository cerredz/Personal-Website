/* SHORTEN THE DESCRIPTION OF THE CONCEPTS / PRACTICES IN THE SKILLS SECTION */
export const shortenedDescription = (text, maxLength) => {
  const words = text.split(" ");

  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  } else {
    return text;
  }
};
