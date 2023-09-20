'use client';

import { useFetchData } from '@/hooks/useFetchData';
import { fetchCharacterInfo } from '@/functions/dataFetching';

import styles from '../../../public/styles/characters/CharacterDetails.module.scss';
import CharacterInfo from '@/components/characters/CharacterInfo';
import CharacterInfoSkeleton from '@/components/UI/skeletons/CharacterInfoSkeleton';

const CharacterDetails = props => {
  const getId = async () => {
    const { id } = await props.params;
    return id;
  };

  const { isLoading, data: character } = useFetchData(
    async () => await fetchCharacterInfo(await getId())
  );

  return (
    <main className={styles.container}>
      {!isLoading ? (
        <CharacterInfo {...character} />
      ) : (
        <CharacterInfoSkeleton />
      )}
    </main>
  );
};

export default CharacterDetails;
