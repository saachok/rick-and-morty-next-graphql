import { client } from '../../../graphql/graphql-client';
import getCharacterDetailsQuery from '@/graphql/queries/characters/getCharacterDetails';
import styles from '../../../public/styles/characters/CharacterDetails.module.scss';
import CharacterInfo from '@/components/characters/CharacterInfo';

const CharacterDetails = async props => {
  const { id } = props.params;
  const { character } = await client.request(getCharacterDetailsQuery, {
    characterId: id,
  });

  return (
    <main className={styles.container}>
      <CharacterInfo {...character} />
    </main>
  );
};

export default CharacterDetails;
