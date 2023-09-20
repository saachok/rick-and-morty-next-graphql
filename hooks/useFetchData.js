import { useState, useEffect } from 'react';

export const useFetchData = loadData => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        const data = await loadData();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return { isLoading, data };
};
