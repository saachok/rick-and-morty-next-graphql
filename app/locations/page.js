'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { createQueryString } from '@/functions/navigation';
import { fetchLocations } from '@/functions/dataFetching';

import PaginationMenu from '@/components/UI/pagination/PaginationMenu';

import LocationCard from '@/components/locations/LocationCard';
import LocationCardSkeleton from '@/components/UI/skeletons/LocationCardSkeleton';

import styles from '@/public/styles/locations/LocationsPage.module.scss';

const INITIAL_STATE = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Locations = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [totalPages, setTotalPages] = useState();
  let pageNumber = +searchParams.get('page') ? +searchParams.get('page') : 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, info } = await fetchLocations(pageNumber);
        setLocations(results);
        setTotalPages(info.pages);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

  const goToPage = pageNumber => {
    router.push(
      pathname + '?' + createQueryString(searchParams, 'page', pageNumber)
    );
  };

  if (pageNumber < 1) goToPage(1);

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {!isLoading && locations.length ? (
          <>
            {locations.map(({ id, ...rest }) => (
              <LocationCard key={id} href={`location/${id}`} {...rest} />
            ))}
          </>
        ) : (
          INITIAL_STATE.map(({ id }) => <LocationCardSkeleton key={id} />)
        )}
      </div>
      {!isLoading && (
        <PaginationMenu
          pagesTotal={totalPages}
          pageNumber={pageNumber}
          goToPage={goToPage}
        />
      )}
    </main>
  );
};

export default Locations;
