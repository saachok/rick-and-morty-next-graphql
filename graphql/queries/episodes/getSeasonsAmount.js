import { gql } from 'graphql-request';

const getSeasonsAmount = gql`
  query {
    episodes(filter: { episode: "e01" }) {
      results {
        episode
      }
    }
  }
`;

export default getSeasonsAmount;
