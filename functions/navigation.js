export const createQueryString = (searchParams, name, value) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);
  return params.toString();
};

export const getEpisodePath = (season, episode) => {
  return `/episodes/${season}/${episode.slice(3).toLowerCase()}`;
};
