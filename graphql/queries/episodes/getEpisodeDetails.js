import { gql } from 'graphql-request';

const getEpisodeDetails = gql`
  query GetEpisodeDetails($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        name
        id
        episode
        created
        air_date
        characters {
          id
          image
          name
          gender
          species
          status
          type
          created
        }
      }
    }
  }
`;

export default getEpisodeDetails;
