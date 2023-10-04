import { gql } from 'graphql-request';

const getLocations = gql`
  query ($page: Int) {
    locations(page: $page) {
      info {
        pages
      }
      results {
        created
        dimension
        name
        type
        id
      }
    }
  }
`;

export default getLocations;
