import { gql } from 'graphql-request';

const getLocationInfo = gql`
  query ($locationId: ID!) {
    location(id: $locationId) {
      name
      id
      residents {
        id
        image
        name
        species
      }
      type
      dimension
      created
    }
  }
`;

export default getLocationInfo;
