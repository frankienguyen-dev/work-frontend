import useQueryParams from './useQueryPrams.tsx';
import { JobListConfig } from '../types/job.type.ts';

export type QueryConfig = {
  [key in keyof JobListConfig]: string;
};

export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = {
    pageNo: queryParams.pageNo || '0',
    pageSize: queryParams.pageSize || '10',
    sortBy: queryParams.sortBy,
    sortDir: queryParams.sortDir,
    location: queryParams.location,
    name: queryParams.name,
    salary: queryParams.salary
  };
  return queryConfig;
}
