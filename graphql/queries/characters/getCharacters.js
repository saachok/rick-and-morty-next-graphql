import { gql } from 'graphql-request';

const getCharactersQuery = gql`
  query GetCharactersQuery {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export default getCharactersQuery;
