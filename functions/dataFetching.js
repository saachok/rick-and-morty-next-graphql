export const encodeName = inputString => {
  return inputString.toLowerCase().split(' ').join('-');
};

export const decodeName = inputString => {
  const words = inputString.split('-');
  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const modifiedString = capitalizedWords.join(' ');
  return modifiedString;
};
