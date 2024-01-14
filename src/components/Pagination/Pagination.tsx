import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

interface Props {
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageSize: number;
}

const RANGE = 2;

export default function Pagination({ currentPage, pageSize, setPage }: Props) {
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
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          currentPage <= RANGE * 2 + 1 &&
          pageNumber > currentPage + RANGE &&
          pageNumber < pageSize - RANGE + 1
        ) {
          return renderDotAfter(index);
        } else if (currentPage > RANGE * 2 + 1 && currentPage < pageSize - RANGE * 2) {
          if (pageNumber < currentPage - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (pageNumber > currentPage + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index);
          }
        } else if (
          currentPage >= RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < currentPage - RANGE
        ) {
          return renderDotBefore(index);
        }
        return (
          <button
            className={classNames(
              'w-[48px] h-[48px] rounded-[50px] text-[14px] leading-5 ' + ' font-medium',

              {
                'bg-[#0b65cc] text-white hover:bg-[#0b65cc] hover:text-white':
                  currentPage === pageNumber,
                'bg-white hover:bg-[#f1f2f4] hover:text-[#18191c] text-[#18191c]':
                  currentPage !== pageNumber
              }
            )}
            key={index}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      });
  };
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <button className='p-[12px] w-[48px] h-[48px] hover:bg-[#e7f0fa] rounded-[84px] group mr-[8px]'>
        <svg
          className='text-[#99C2FF] group-hover:text-[#0A65CC]'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19 12H5'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 5L5 12L12 19'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {renderPagination()}
      <button className='p-[12px] w-[48px] h-[48px] hover:bg-[#e7f0fa] rounded-[84px] group ml-[8px]'>
        <svg
          className='text-[#99C2FF] group-hover:text-[#0A65CC]'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 12H19'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 5L19 12L12 19'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
