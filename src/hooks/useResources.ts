import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ResourceType, SWAPIResponse } from '../types/resource';

const SWAPI_BASE = 'https://swapi.dev/api/';

export const useResources = (
  resourceType: ResourceType,
  searchQuery: string,
  currentPage: number
) => {
  return useQuery<SWAPIResponse>({
    queryKey: ['resources', resourceType, searchQuery, currentPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `${SWAPI_BASE}${resourceType}/?search=${searchQuery}&page=${currentPage}`
      );
      return data;
    },
    keepPreviousData: true,
  });
};