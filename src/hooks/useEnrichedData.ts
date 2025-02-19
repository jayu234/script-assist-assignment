import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEnrichedData } from '../services/swapi';

export const useEnrichedData = (urls: string | string[], enabled: boolean) => {
  const [prevData, setPrevData] = useState<any>(null);
  
  const { data, isLoading } = useQuery({
    queryKey: ['enriched', urls],
    queryFn: () => fetchEnrichedData(urls),
    enabled,
    onSuccess: (data) => setPrevData(data),
  });

  return { data: data || prevData, isLoading };
};