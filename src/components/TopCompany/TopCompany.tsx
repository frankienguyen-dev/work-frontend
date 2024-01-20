import { Link } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import { useQuery } from '@tanstack/react-query';
import companyApi from '../../apis/company.api.ts';
import { getLogoUrl } from '../../utils/utils.ts';

export default function TopCompany() {
  const queryParams = useQueryParams();
  const { data: companyData } = useQuery({
    queryKey: ['CompanyList', queryParams],
    queryFn: () => {
      return companyApi.getAllCompanies(queryParams);
    }
  });
  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='py-[100px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[40px] font-medium leading-[48px] text-[#18191C]'>Top companies</h1>
            <div className='flex gap-[16px] items-center'>
              <Link
                to=''
                className='w-[48px] h-[48px] bg-[#E7F0FA] items-center
              justify-center flex rounded-[5px] text-[#0A65CC] hover:bg-[#0A65CC]
              hover:text-white duration-[0.25s] ease-in'
              >
                <svg
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
              </Link>
              <Link
                to=''
                className='w-[48px] h-[48px] bg-[#E7F0FA] items-center
              justify-center flex rounded-[5px] text-[#0A65CC] hover:bg-[#0A65CC]
              hover:text-white duration-[0.25s] ease-in'
              >
                <svg
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
              </Link>
            </div>
          </div>
          <div className='mt-[50px]'>
            <div className='grid grid-cols-4 gap-[24px]'>
              {companyData &&
                companyData.data.data.data.slice(0, 8).map((company) => (
                  <Link
                    to={`/company/${company.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    key={company.id}
                    className='bg-white p-8 border border-[#EDEFF5] rounded-[12px] hover:cursor-pointer
                  hover:shadow-2xl hover:transition hover:ease-in-out hover:duration-[0.25s] h-[200px]'
                  >
                    <div className='flex items-center gap-[16px]'>
                      <img
                        src={getLogoUrl(company?.logo?.fileName)}
                        alt=''
                        className='w-[56px] h-[56px] object-cover rounded-[4px]'
                      />
                      <div>
                        <div>
                          <h3 className='text-[18px] text-[#191F33] font-medium leading-7'>
                            Tiktok
                          </h3>
                        </div>
                        <div className='flex mt-[6px] gap-[6px] items-center'>
                          <svg
                            width='22'
                            height='22'
                            viewBox='0 0 22 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M19.25 9.16675C19.25 15.5834 11 21.0834 11 21.0834C11 21.0834 2.75 15.5834 2.75 9.16675C2.75 6.97871 3.61919 4.88029 5.16637 3.33312C6.71354 1.78594 8.81196 0.916748 11 0.916748C13.188 0.916748 15.2865 1.78594 16.8336 3.33312C18.3808 4.88029 19.25 6.97871 19.25 9.16675Z'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M11 11.9167C12.5188 11.9167 13.75 10.6855 13.75 9.16675C13.75 7.64797 12.5188 6.41675 11 6.41675C9.48122 6.41675 8.25 7.64797 8.25 9.16675C8.25 10.6855 9.48122 11.9167 11 11.9167Z'
                              stroke='#C5C9D6'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          <div className='text-[14px] leading-5 text-[#939AAD]'>
                            {company.address}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-[32px]'>
                      <button
                        className='bg-[#E7F0FA] min-w-[248px] h-[48px] rounded-[3px] text-[16px]
                      leading-6 text-[#0A65CC] font-semibold flex items-center justify-center
                      hover:bg-[#0A65CC] hover:text-white'
                      >
                        Open Position
                      </button>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
