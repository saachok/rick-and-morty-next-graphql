'use client';

import { useFetchData } from '@/hooks/useFetchData';
import { fetchLocationInfo } from '@/functions/dataFetching';

import LocationInfo from '@/components/locations/LocationInfo';
import LocationInfoSkeleton from '@/components/UI/skeletons/LocationInfoSkeleton';

const LocationDetails = props => {
  const getId = async () => {
    const { id } = await props.params;
    return id;
  };

  const { isLoading, data: location } = useFetchData(
    async () => await fetchLocationInfo(await getId())
  );

  return (
    <main>
      {!isLoading ? <LocationInfo {...location} /> : <LocationInfoSkeleton />}
    </main>
  );
};

export default LocationDetails;
