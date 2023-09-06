import { gql } from 'graphql-request';

const getCharactersQuery = gql`
  query getCharactersQuery($page: Int) {
    characters(page: $page) {
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
