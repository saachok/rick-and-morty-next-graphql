import Link from 'next/link';
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
          <Link key={id} href={`/characters/${id}`}>
            <CharacterCard {...{ name, image, species }} />
          </Link>
        ))
      ) : (
        <h1>That&apos;s Characters page!</h1>
      )}
    </main>
  );
}
