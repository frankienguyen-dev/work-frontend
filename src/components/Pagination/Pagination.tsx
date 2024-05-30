// import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { QueryConfig } from '../../hooks/useQueryConfig.tsx';
import { createSearchParams, Link } from 'react-router-dom';

interface Props {
  queryConfig: QueryConfig;
  totalPages: number;
  pathname: string;
}

const RANGE = 2;

export default function Pagination({ queryConfig, totalPages, pathname }: Props) {
  const pageNo = Number(queryConfig.pageNo);
  const renderPagination = () => {
    let dotAfter = false;
    let dotBefore = false;
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <span
            key={index}
            className='w-[48px] h-[48px] rounded-[50px]  text-[14px] leading-5 font-medium
            text-[#18191c] flex items-center justify-center'
          >
            ...
          </span>
        );
      }
      return null;
    };

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <span
            key={index}
            className='w-[48px] h-[48px] rounded-[50px] text-[14px] leading-5 font-medium
            text-[#18191c] flex items-center justify-center'
          >
            ...
          </span>
        );
      }
      return null;
    };
    return Array(totalPages)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (pageNo <= RANGE * 2 + 1 && pageNumber > pageNo + RANGE && pageNumber < totalPages - RANGE + 1) {
          return renderDotAfter(index);
        } else if (pageNo > RANGE * 2 + 1 && pageNo < totalPages - RANGE * 2) {
          if (pageNumber < pageNo - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (pageNumber > pageNo + RANGE && pageNumber < totalPages - RANGE + 1) {
            return renderDotAfter(index);
          }
        } else if (pageNo >= RANGE * 2 && pageNumber > RANGE && pageNumber < pageNo - RANGE) {
          return renderDotBefore(index);
        }
        return (
          <Link
            onClick={() => {
              scrollTo(0, 0);
            }}
            to={{
              pathname: pathname,
              search: createSearchParams({
                ...queryConfig,
                pageNo: pageNumber.toString()
              }).toString()
            }}
            className={classNames(
              'w-[48px] h-[48px] rounded-[50px] text-[14px] leading-5 flex items-center justify-center' +
                ' font-medium',

              {
                'bg-[#0b65cc] text-white hover:bg-[#0b65cc] hover:text-white': pageNo === pageNumber,
                'bg-white hover:bg-[#f1f2f4] hover:text-[#18191c] text-[#18191c]': pageNo !== pageNumber
              }
            )}
            key={index}
          >
            {pageNumber}
          </Link>
        );
      });
  };
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {pageNo === 1 ? (
        <span className=' p-[12px] w-[48px] h-[48px] rounded-[84px] group ml-[8px]'>
          <svg
            className='text-[#99C2FF]'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M19 12H5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
              d='M12 5L5 12L12 19'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      ) : (
        <Link
          onClick={() => scrollTo(0, 0)}
          to={{
            pathname: pathname,
            search: createSearchParams({
              ...queryConfig,
              pageNo: (pageNo - 1).toString()
            }).toString()
          }}
          className='p-[12px] w-[48px] h-[48px] hover:bg-[#e7f0fa] rounded-[84px] group mr-[8px]'
        >
          <svg
            className='text-[#99C2FF] group-hover:text-[#0A65CC]'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M19 12H5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
              d='M12 5L5 12L12 19'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      )}
      {renderPagination()}
      {pageNo === totalPages ? (
        <span className=' p-[12px] w-[48px] h-[48px] rounded-[84px] group ml-[8px]'>
          <svg
            className='text-[#99C2FF]'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5 12H19' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
              d='M12 5L19 12L12 19'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      ) : (
        <Link
          onClick={() => scrollTo(0, 0)}
          to={{
            pathname: pathname,
            search: createSearchParams({
              ...queryConfig,
              pageNo: (pageNo + 1).toString()
            }).toString()
          }}
          className='p-[12px] w-[48px] h-[48px] hover:bg-[#e7f0fa] rounded-[84px] group ml-[8px]'
        >
          <svg
            className='text-[#99C2FF] group-hover:text-[#0A65CC]'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5 12H19' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
              d='M12 5L19 12L12 19'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
