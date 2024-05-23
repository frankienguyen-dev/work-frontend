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
  companyNameFromServer?: string;
}

export default function AutoCompleteSearchInput({
  setCompany,
  register,
  name,
  rules,
  errorMessage,
  companyNameFromServer
}: Props) {
  const [companyName, setCompanyName] = useState({ name: companyNameFromServer || '' });
  const [isSearch, setSearch] = useState<boolean>(false);
  const queryParams = useQueryParams();
  // const inputRef = useRef<HTMLInputElement>(null);
  const { data: searchCompanyData } = useQuery({
    queryKey: ['searchCompanyList', { ...queryParams, name: companyName, pageSize: '20' }],
    queryFn: () =>
      companyApi.searchCompany({ ...queryParams, name: companyName.name, pageSize: '20' }),
    enabled: isSearch
  });
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
      <div className='relative'>
        <input
          value={companyName.name}
          {...register(name, rules)}
          // ref={inputRef}
          type='text'
          autoComplete='off'
          onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // id='search-input'
          placeholder='Search company...'
          className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0
                relative'
        />

        {isSearch &&
          // isSearchInput &&
          companyName.name !== '' &&
          searchCompanyData?.data.data.data &&
          searchCompanyData?.data.data.data.length > 0 && (
            <div
              className='absolute top-full left-0 w-full bg-white border border-gray-300
            rounded-b-lg shadow-lg py-2 z-10 '
            >
              {searchCompanyData.data.data.data
                .filter((companyFilter) => {
                  const searchTerm = companyName.name.toLowerCase();
                  const name = companyFilter.name.toLowerCase();
                  return searchTerm && name.startsWith(searchTerm);
                })
                .map((company) => (
                  <Link
                    to=''
                    className='block px-4 py-2 hover:bg-gray-100'
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
