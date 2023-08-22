import { gql } from 'graphql-request';

const getSeasonEpisodesQuery = gql`
  query GetSeasonEpisodesQuery($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export default getSeasonEpisodesQuery;
