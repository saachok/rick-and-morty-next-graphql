import { gql } from 'graphql-request';

const getSeasonEpisodesQuery = gql`
  query GetSeasonEpisodesQuery($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export default getSeasonEpisodesQuery;
