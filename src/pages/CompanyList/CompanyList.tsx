import { Link } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import { useQuery } from '@tanstack/react-query';
import companyApi from '../../apis/company.api.ts';

export default function CompanyList() {
  const queryParams = useQueryParams();
  const { data: companyData } = useQuery({
    queryKey: ['CompanyList', queryParams],
    queryFn: () => {
      return companyApi.getAllCompanies(queryParams);
    }
  });

  return (
    <div className='mt-[54px] '>
      <div className='mt-[30px]'>
        <div className='flex items-center justify-between'>
          <div className='text-[18px] font-medium leading-7 text-[#18191c]'>List Companies</div>
          <div>
            <Link
              to=''
              className='flex items-center gap-[6px] group hover:text-[#0A65CC] text-[#474c54]'
            >
              <div>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 5V19'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5 12H19'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className='font-medium text-[16px] leading-5 text-[currentColor]'>
                Add New Company
              </div>
            </Link>
          </div>
        </div>
      </div>
      {companyData && (
        <div>
          <div className='mt-[54px]'>
            <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
              <div className='col-span-1 text-center text-[14px] text-[#535860]'>Index</div>
              <div className='col-span-5 text-center text-[14px] text-[#535860]'>ID</div>
              <div className='col-span-2 text-center text-[14px] text-[#535860]'>Name</div>
              <div className='col-span-2 text-center text-[14px] text-[#535860]'>Address</div>
              <div className='col-span-2 text-center text-[14px] text-[#535860]'>Action</div>
            </div>
          </div>
          <div className='mt-[10px]'>
            {companyData.data.data.data.slice(0, 8).map((company, index) => (
              <div
                key={company.id}
                className='grid grid-cols-12 p-[20px] items-center border-b border-b-[#e4e5e8]
           solid hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
              >
                <div className='col-span-1 text-center text-[16px] leading-6 font-medium text-[#e05150]'>
                  {index + 1}
                </div>
                <div
                  className='col-span-5 text-center text-[16px] leading-6 text-[#5e6670]
              hover:text-[#0A65CC]'
                >
                  {company.id}
                </div>
                <div className='col-span-2 text-center text-[16px] leading-6 font-medium text-[#18191c]'>
                  {company.name}
                </div>
                <div className='col-span-2 text-center text-[16px] leading-6 text-[#07a02b]'>
                  {company.address}
                </div>
                <div className='col-span-2 flex items-center gap-[20px] justify-center'>
                  <Link to=''>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 20H21'
                        stroke='#fbbc0a'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M16.5 3.5C16.8978 3.10218 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04016C19.0692 3.14676 19.303 3.30302 19.5 3.5C19.697 3.69698 19.8532 3.93084 19.9598 4.18821C20.0665 4.44558 20.1213 4.72143 20.1213 5C20.1213 5.27858 20.0665 5.55443 19.9598 5.8118C19.8532 6.06917 19.697 6.30302 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z'
                        stroke='#fbbc0a'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                  <Link to=''>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3 6H5H21'
                        stroke='#e05150'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z'
                        stroke='#e05150'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14 11V17'
                        stroke='#e05150'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10 11V17'
                        stroke='#e05150'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
