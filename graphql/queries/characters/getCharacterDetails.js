import { gql } from 'graphql-request';

const getCharacterDetailsQuery = gql`
  query GetCharacterDetailsQuery($characterId: ID!) {
    character(id: $characterId) {
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
`;

export default getCharacterDetailsQuery;
