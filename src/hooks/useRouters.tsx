import { useEffect, useState } from 'react';
import { fetchAllRouters } from '../api/routersService';
import { Router as RouterType } from '../types/types'; // Ensure this file exists or update the path

const useRouters = () => {
  const [routers, setRouters] = useState<RouterType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRouters = async () => {
      try {
        const data = await fetchAllRouters();
        setRouters(data);
      } catch (err) {
        setError('Failed to fetch routers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getRouters();
  }, []);

  return { routers, loading, error };
};

export default useRouters;