export const getCapitalizedString = inputString => {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

export const getTrailerID = (id, trailers) => {
  const trailer = trailers.find(elem => elem.seasonId === id).youtubeId;
  return trailer;
};
