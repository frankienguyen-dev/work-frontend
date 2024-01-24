import useQueryParams from './useQueryPrams.tsx';
import { JobListConfig } from '../types/job.type.ts';
import { isUndefined, omitBy } from 'lodash';

export type QueryConfig = {
  [key in keyof JobListConfig]: string;
};

export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      pageNo: queryParams.pageNo || '1',
      pageSize: queryParams.pageSize || '8',
      sortBy: queryParams.sortBy,
      sortDir: queryParams.sortDir,
      location: queryParams.location,
      name: queryParams.name,
      salary: queryParams.salary
    },
    isUndefined
  );
  return queryConfig;
}
