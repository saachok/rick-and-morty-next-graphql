import getCharactersQuery from '@/graphql/queries/characters/getCharacters';
import getCharacterDetailsQuery from '@/graphql/queries/characters/getCharacterDetails';
import getSeasonsAmount from '@/graphql/queries/episodes/getSeasonsAmount';
import getSeasonEpisodesQuery from '@/graphql/queries/episodes/getSeasonEpisodes';
import { client } from '@/graphql/graphql-client';

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

export const fetchCharacters = async pageNumber => {
  const data = await client.request(getCharactersQuery, {
    page: pageNumber ? +pageNumber : 1,
  });
  return data.characters;
};

export const fetchCharacterInfo = async id => {
  const { character } = await client.request(getCharacterDetailsQuery, {
    characterId: id,
  });
  return character;
};

export const fetchSeasons = async () => {
  const data = await client.request(getSeasonsAmount);
  return data.episodes.results;
};

export const getEpisodes = async season => {
  const { episodes } = await client.request(getSeasonEpisodesQuery, {
    filter: { episode: season },
  });
  return episodes.results;
};
