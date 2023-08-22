import { client } from '../../graphql/graphql-client';
import getCharactersQuery from '@/graphql/queries/characters/getCharacters';
import CharacterCard from '@/components/characters/CharacterCard';

import styles from '../../public/styles/characters/CharactersPage.module.scss';

export default async function Characters() {
  const data = await client.request(getCharactersQuery);
  const { results } = data.characters;

  return (
    <main className={styles.container}>
      {results ? (
        results.map(({ id, name, image, species }) => (
          <CharacterCard key={id} {...{ name, image, species }} />
        ))
      ) : (
        <h1>That&apos;s Characters page!</h1>
      )}
    </main>
  );
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Query {
//         characters {
//           results {
//             id
//             name
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       characters: data.characters.results,
//     },
//   };
// }
