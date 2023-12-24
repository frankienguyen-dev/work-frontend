import { Link } from 'react-router-dom';

export default function RegisterAccount() {
  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='py-[100px]'>
          <div className='grid grid-cols-2 gap-[24px]'>
            <div className='p-[50px] bg-[#e4e5e8] rounded-[12px]'>
              <h3 className='text-[32px] text-[#191F33] leading-10 font-medium'>
                Become a Candidate
              </h3>
              <p className='mt-[16px] text-[#636A80] text-[16px] leading-6 max-w-[350px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor
                convallis efficitur.
              </p>
              <Link
                to='/register'
                className='mt-[26px] w-[200px] h-[48px] rounded-[3px] bg-white
              text-[#0A65CC] text-[16px] font-semibold leading-6 flex items-center
              justify-center gap-[12px] px-[24px] py-[12px] hover:bg-[#0A65CC] hover:text-white'
              >
                Register Now
                <div>
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
                </div>
              </Link>
            </div>
            <div className='p-[50px] bg-[#0A65CC] rounded-[12px]'>
              <h3 className='text-[32px] text-white leading-10 font-medium'>Become a Employers</h3>
              <p className='mt-[16px] text-white text-[16px] leading-6 max-w-[350px]'>
                Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur
                dolor. Pelque augue risus, aliqu.
              </p>
              <Link
                to='/register'
                className='mt-[26px] w-[200px] h-[48px] rounded-[3px] bg-white
              text-[#0A65CC] text-[16px] font-semibold leading-6 flex items-center
              justify-center gap-[12px] px-[24px] py-[12px] hover:bg-[#e4e5e8] hover:text-[#0A65CC]'
              >
                Register Now
                <div>
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
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
