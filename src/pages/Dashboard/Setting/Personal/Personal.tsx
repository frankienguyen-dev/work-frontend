import UploadFileInput from '../../../../components/UploadFileInput';

export default function Personal() {
  return (
    <div className='mt-[32px]'>
      <div className='text-[18px] leading-7 font-medium text-[#18191c]'>Basic Information</div>
      <div className='mt-[18px]'>
        <div className='grid grid-cols-12 gap-[48px]'>
          <div className='col-span-4'>
            <div className='mb-2'>Profile Picture</div>
            <UploadFileInput />
          </div>
          <div className='col-span-8'>
            <form>
              <div className='grid grid-cols-2 gap-[18px]'>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Full Name</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Title</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-[18px] mt-[34px]'>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Experience</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Educations</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
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
        </div>
      </div>
    </div>
  );
}
