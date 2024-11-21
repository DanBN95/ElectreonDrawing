export const generateRandomLetter = () => {
  const isUppercase = Math.random() < 0.5; // Randomly decides uppercase or lowercase
  const asciiValue = isUppercase
    ? Math.floor(Math.random() * 26) + 65 // ASCII range for 'A' to 'Z'
    : Math.floor(Math.random() * 26) + 97; // ASCII range for 'a' to 'z'
  return String.fromCharCode(asciiValue);
};
