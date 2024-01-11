import { Link } from 'react-router-dom';

export default function AccountSetting() {
  return (
    <div className='mt-8'>
      <div className='grid grid-cols-2 gap-[50px] mt-[30px]'>
        <div className='col-span-1'>
          <div className='text-[18px] leading-5 text-[#18191c] font-medium'>Change Password</div>
          <form className='mt-[18px]'>
            <div>
              <div className='text-[14px] leading-5 text-[#18191c]'>Current Password</div>
              <input
                type='password'
                placeholder='Current Password'
                className='w-full py-[12px] px-[18px] mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              />
            </div>
            <div className='mt-8'>
              <div className='text-[14px] leading-5 text-[#18191c]'>New Password</div>
              <input
                type='password'
                placeholder='New Password'
                className='w-full py-[12px] px-[18px] mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
              leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              />
            </div>
            <div className='mt-8'>
              <div className='text-[14px] leading-5 text-[#18191c]'>Confirm Password</div>
              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full py-[12px] px-[18px] mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
              leading-6 text-[#111827]   focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              />
            </div>
            <div className='grid grid-cols-1 mt-[34px]'>
              <button
                className='w-[175px] h-[56px] bg-[#0b65cc] rounded-[4px] text-white text-[16px]
                    leading-6 font-semibold'
                type='submit'
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className='col-span-1'>
          <div className='text-[18px] leading-5 text-[#18191c] font-medium'>
            Delete Your Account
          </div>
          <div className='mt-[18px] text-[18px] text-[#767f8c]'>
            After deleting the account, we will still retain your account. You can reactivate your
            account at any time by signing in.
          </div>
          <Link to='' className='mt-[18px] flex items-center gap-[8px]'>
            <div>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                  stroke='#E05151'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                />
                <path
                  d='M15 9L9 15'
                  stroke='#E05151'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15 15L9 9'
                  stroke='#E05151'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='text-[18px] font-medium text-[#E05151]'>Delete Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
