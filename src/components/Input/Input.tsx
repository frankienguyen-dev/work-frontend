import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  autoComplete?: string;
  isCheckbox?: boolean;
}

export default function Input({
  className,
  placeholder,
  name,
  type,
  errorMessage,
  rules,
  autoComplete,
  register,
  isCheckbox = false
}: Props) {
  return (
    <div className={className}>
      {isCheckbox ? (
        <>
          <div className='flex items-center h-5'>
            <input
              type={type}
              className='w-4 h-4 border hover:cursor-pointer border-gray-300 rounded
               bg-gray-50 focus:ring-3 focus:ring-blue-300'
              {...register(name, rules)}
            />
            <span className='text-gray-500 ml-[10px]'>
              I have read and agree with your{' '}
              <Link className='text-blue-500' to={'/'}>
                Terms of Services
              </Link>
            </span>
          </div>

          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
            <span className='font-medium'>{errorMessage}</span>
          </div>
        </>
      ) : (
        <>
          <input
            type={type}
            className=' border border-gray-300 text-gray-900 text-md rounded-[5px]
                   focus:ring-blue-500 focus:border-blue-500 block w-full h-[48px] p-3.5 '
            placeholder={placeholder}
            {...register(name, rules)}
            autoComplete={autoComplete}
          />
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
            <span className='font-medium'>{errorMessage}</span>
          </div>
        </>
      )}
    </div>
  );
}
