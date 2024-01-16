import { Link } from 'react-router-dom';

export default function PopularCategory() {
  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='py-[100px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[40px] font-medium leading-[48px] text-[#18191C]'>
              Popular Category
            </h1>
            <div className='flex gap-[16px] items-center'>
              <button
                className='w-[48px] h-[48px] bg-[#E7F0FA] items-center text-[#0A65CC]
              justify-center flex rounded-[5px] hover:bg-[#0A65CC] hover:text-white duration-[0.25s]
              ease-in'
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
              </button>
              <button
                className='w-[48px] h-[48px] bg-[#E7F0FA] items-center
              justify-center flex rounded-[5px] text-[#0A65CC] hover:bg-[#0A65CC] hover:text-white
              duration-[0.25s] ease-in'
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
              </button>
            </div>
          </div>
          <div className='mt-[50px]'>
            <div className='grid grid-cols-4 gap-[24px]'>
              <Link to='/'>
                <div
                  className='bg-white rounded-[12px] p-6 hover:shadow-2xl hover:transition
                hover:ease-in-out hover:duration-[0.25s] h-[116px]'
                >
                  <div className='flex items-center gap-[16px]'>
                    <div
                      className='bg-[#E7F0FA] rounded-[8px] h-[68px] w-[68px] flex
                    items-center justify-center'
                    >
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          opacity='0.2'
                          d='M24.9996 15.0007L22.2022 7.54114C22.1406 7.37683 22.0368 7.23162 21.9013 7.12011C21.7659 7.00859 21.6034 6.9347 21.4303 6.90586L3.99957 4.00073L6.90472 21.4315C6.93357 21.6045 7.00745 21.767 7.11896 21.9025C7.23047 22.038 7.37567 22.1418 7.53997 22.2034L14.9996 25.0007L24.9996 15.0007ZM12 14.5C12 14.0056 12.1466 13.5222 12.4213 13.1111C12.696 12.7 13.0865 12.3795 13.5433 12.1903C14.0001 12.0011 14.5028 11.9516 14.9877 12.048C15.4727 12.1445 15.9181 12.3826 16.2678 12.7322C16.6174 13.0819 16.8555 13.5273 16.952 14.0123C17.0484 14.4972 16.9989 14.9999 16.8097 15.4567C16.6205 15.9135 16.3 16.304 15.8889 16.5787C15.4778 16.8534 14.9945 17 14.5 17C14.1717 17 13.8466 16.9353 13.5433 16.8097C13.24 16.6841 12.9644 16.4999 12.7322 16.2678C12.5001 16.0356 12.3159 15.76 12.1903 15.4567C12.0647 15.1534 12 14.8283 12 14.5Z'
                          fill='#0A65CC'
                        />
                        <path
                          d='M12 14.5C12 15.8807 13.1193 17 14.5 17C15.8807 17 17 15.8807 17 14.5C17 13.1193 15.8807 12 14.5 12C13.1193 12 12 13.1193 12 14.5Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.99955 4.00073L12.7322 12.7322'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.99961 4.00073L6.90473 21.4314C6.93358 21.6045 7.00747 21.767 7.11898 21.9025C7.23049 22.038 7.37569 22.1418 7.54 22.2034L14.9996 25.0007L24.9996 15.0007L22.2022 7.54112C22.1406 7.37682 22.0369 7.23161 21.9014 7.1201C21.7659 7.00859 21.6034 6.9347 21.4303 6.90585L3.99961 4.00073Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M14.9995 25.0007L18.2924 28.2936C18.3853 28.3865 18.4955 28.4601 18.6169 28.5104C18.7382 28.5607 18.8682 28.5865 18.9995 28.5865C19.1309 28.5865 19.2609 28.5607 19.3822 28.5104C19.5035 28.4601 19.6138 28.3865 19.7066 28.2936L28.2924 19.7078C28.48 19.5203 28.5853 19.2659 28.5853 19.0007C28.5853 18.7355 28.48 18.4812 28.2924 18.2936L24.9995 15.0007'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-[18px] leading-7 font-medium text-[#18191C]'>
                        Graphics & Design
                      </h3>
                      <p className='text-[14px] leading-5 text-[#5E6670] mt-[8px]'>
                        357 Open position
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to='/'>
                <div
                  className='bg-white rounded-[12px] p-6 hover:shadow-2xl hover:transition
                hover:ease-in-out hover:duration-[0.25s] h-[116px]'
                >
                  <div className='flex items-center gap-[16px]'>
                    <div
                      className='bg-[#E7F0FA] rounded-[8px] h-[68px] w-[68px] flex
                    items-center justify-center'
                    >
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          opacity='0.2'
                          d='M24.9996 15.0007L22.2022 7.54114C22.1406 7.37683 22.0368 7.23162 21.9013 7.12011C21.7659 7.00859 21.6034 6.9347 21.4303 6.90586L3.99957 4.00073L6.90472 21.4315C6.93357 21.6045 7.00745 21.767 7.11896 21.9025C7.23047 22.038 7.37567 22.1418 7.53997 22.2034L14.9996 25.0007L24.9996 15.0007ZM12 14.5C12 14.0056 12.1466 13.5222 12.4213 13.1111C12.696 12.7 13.0865 12.3795 13.5433 12.1903C14.0001 12.0011 14.5028 11.9516 14.9877 12.048C15.4727 12.1445 15.9181 12.3826 16.2678 12.7322C16.6174 13.0819 16.8555 13.5273 16.952 14.0123C17.0484 14.4972 16.9989 14.9999 16.8097 15.4567C16.6205 15.9135 16.3 16.304 15.8889 16.5787C15.4778 16.8534 14.9945 17 14.5 17C14.1717 17 13.8466 16.9353 13.5433 16.8097C13.24 16.6841 12.9644 16.4999 12.7322 16.2678C12.5001 16.0356 12.3159 15.76 12.1903 15.4567C12.0647 15.1534 12 14.8283 12 14.5Z'
                          fill='#0A65CC'
                        />
                        <path
                          d='M12 14.5C12 15.8807 13.1193 17 14.5 17C15.8807 17 17 15.8807 17 14.5C17 13.1193 15.8807 12 14.5 12C13.1193 12 12 13.1193 12 14.5Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.99955 4.00073L12.7322 12.7322'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.99961 4.00073L6.90473 21.4314C6.93358 21.6045 7.00747 21.767 7.11898 21.9025C7.23049 22.038 7.37569 22.1418 7.54 22.2034L14.9996 25.0007L24.9996 15.0007L22.2022 7.54112C22.1406 7.37682 22.0369 7.23161 21.9014 7.1201C21.7659 7.00859 21.6034 6.9347 21.4303 6.90585L3.99961 4.00073Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M14.9995 25.0007L18.2924 28.2936C18.3853 28.3865 18.4955 28.4601 18.6169 28.5104C18.7382 28.5607 18.8682 28.5865 18.9995 28.5865C19.1309 28.5865 19.2609 28.5607 19.3822 28.5104C19.5035 28.4601 19.6138 28.3865 19.7066 28.2936L28.2924 19.7078C28.48 19.5203 28.5853 19.2659 28.5853 19.0007C28.5853 18.7355 28.48 18.4812 28.2924 18.2936L24.9995 15.0007'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-[18px] leading-7 font-medium text-[#18191C]'>
                        Graphics & Design
                      </h3>
                      <p className='text-[14px] leading-5 text-[#5E6670] mt-[8px]'>
                        357 Open position
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to='/'>
                <div
                  className='bg-white rounded-[12px] p-6 hover:shadow-2xl hover:transition
                hover:ease-in-out hover:duration-[0.25s] h-[116px]'
                >
                  <div className='flex items-center gap-[16px]'>
                    <div
                      className='bg-[#E7F0FA] rounded-[8px] h-[68px] w-[68px] flex
                    items-center justify-center'
                    >
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          opacity='0.2'
                          d='M24.9996 15.0007L22.2022 7.54114C22.1406 7.37683 22.0368 7.23162 21.9013 7.12011C21.7659 7.00859 21.6034 6.9347 21.4303 6.90586L3.99957 4.00073L6.90472 21.4315C6.93357 21.6045 7.00745 21.767 7.11896 21.9025C7.23047 22.038 7.37567 22.1418 7.53997 22.2034L14.9996 25.0007L24.9996 15.0007ZM12 14.5C12 14.0056 12.1466 13.5222 12.4213 13.1111C12.696 12.7 13.0865 12.3795 13.5433 12.1903C14.0001 12.0011 14.5028 11.9516 14.9877 12.048C15.4727 12.1445 15.9181 12.3826 16.2678 12.7322C16.6174 13.0819 16.8555 13.5273 16.952 14.0123C17.0484 14.4972 16.9989 14.9999 16.8097 15.4567C16.6205 15.9135 16.3 16.304 15.8889 16.5787C15.4778 16.8534 14.9945 17 14.5 17C14.1717 17 13.8466 16.9353 13.5433 16.8097C13.24 16.6841 12.9644 16.4999 12.7322 16.2678C12.5001 16.0356 12.3159 15.76 12.1903 15.4567C12.0647 15.1534 12 14.8283 12 14.5Z'
                          fill='#0A65CC'
                        />
                        <path
                          d='M12 14.5C12 15.8807 13.1193 17 14.5 17C15.8807 17 17 15.8807 17 14.5C17 13.1193 15.8807 12 14.5 12C13.1193 12 12 13.1193 12 14.5Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.99955 4.00073L12.7322 12.7322'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.99961 4.00073L6.90473 21.4314C6.93358 21.6045 7.00747 21.767 7.11898 21.9025C7.23049 22.038 7.37569 22.1418 7.54 22.2034L14.9996 25.0007L24.9996 15.0007L22.2022 7.54112C22.1406 7.37682 22.0369 7.23161 21.9014 7.1201C21.7659 7.00859 21.6034 6.9347 21.4303 6.90585L3.99961 4.00073Z'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M14.9995 25.0007L18.2924 28.2936C18.3853 28.3865 18.4955 28.4601 18.6169 28.5104C18.7382 28.5607 18.8682 28.5865 18.9995 28.5865C19.1309 28.5865 19.2609 28.5607 19.3822 28.5104C19.5035 28.4601 19.6138 28.3865 19.7066 28.2936L28.2924 19.7078C28.48 19.5203 28.5853 19.2659 28.5853 19.0007C28.5853 18.7355 28.48 18.4812 28.2924 18.2936L24.9995 15.0007'
                          stroke='#0A65CC'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-[18px] leading-7 font-medium text-[#18191C]'>
                        Graphics & Design
                      </h3>
                      <p className='text-[14px] leading-5 text-[#5E6670] mt-[8px]'>
                        357 Open position
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
