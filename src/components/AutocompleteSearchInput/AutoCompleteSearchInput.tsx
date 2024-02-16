import { useQuery } from '@tanstack/react-query';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import companyApi from '../../apis/company.api.ts';
import React, { useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface Props {
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  name: string;
  setCompany: React.Dispatch<React.SetStateAction<{ name: string }>>;
}

export default function AutoCompleteSearchInput({
  setCompany,
  register,
  name,
  rules,
  errorMessage
}: Props) {
  const [companyName, setCompanyName] = useState({ name: '' });
  const [isSearch, setSearch] = useState<boolean>(false);
  console.log('check is search: ', isSearch);
  const queryParams = useQueryParams();
  const { data: searchCompanyData } = useQuery({
    queryKey: ['searchCompanyList', { ...queryParams, name: companyName, pageSize: '20' }],
    queryFn: () =>
      companyApi.searchCompany({ ...queryParams, name: companyName.name, pageSize: '20' }),
    enabled: isSearch
  });
  console.log('check company name state: ', companyName);
  console.log('check search length: ', searchCompanyData?.data.data.data.length);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(true);
    setCompanyName({ name: event.target.value });
  };
  const onSearch = (searchTerm: { name: string }) => {
    setSearch(false);
    setCompanyName(searchTerm);
    setCompany(searchTerm);
  };
  return (
    <div>
      <div>
        <input
          {...register(name, rules)}
          value={companyName.name}
          type='text'
          onChange={onChange}
          className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
        />
        {isSearch &&
          searchCompanyData?.data.data.data &&
          searchCompanyData?.data.data.data.length > 0 && (
            <div className=' p-4 bg-white text-black shadow-2xl w-[280px] absolute h-[100px] overflow-y-auto rounded-xl  flex flex-col gap-2 z-[999]'>
              {searchCompanyData.data.data.data
                .filter((companyFilter) => {
                  const searchTerm = companyName.name.toLowerCase();
                  const name = companyFilter.name.toLowerCase();
                  console.log('check searchTerm: ', searchTerm);
                  console.log('check name: ', name);
                  console.log('check filter: ', searchTerm && name.startsWith(searchTerm));
                  return searchTerm && name.startsWith(searchTerm);
                })
                .map((company) => (
                  <Link
                    to=''
                    className='px-[4px] py-[8px]'
                    onClick={() => onSearch({ name: company.name })}
                    key={company.id}
                  >
                    {company.name}
                  </Link>
                ))}
            </div>
          )}
      </div>
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
        <span className='font-medium'>{errorMessage}</span>
      </div>
    </div>
  );
}
