export interface Resource {
  name?: string;
  title?: string;
  [key: string]: any;
}

export interface EnrichmentConfig {
  field: string;
  label: string;
  icon: JSX.Element;
  type: string;
}

export type ResourceType = 'people' | 'planets' | 'starships' | 'vehicles' | 'species';

export interface SWAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}

export type SortState = {
  column: string;
  direction: 'asc' | 'desc';
};