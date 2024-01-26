import UploadFileInput from '../../../../components/UploadFileInput';
import TextArea from '../../../../components/TextArea';
import { useForm } from 'react-hook-form';

export default function CompanyInfo() {
  const {
    register,
    setValue
    // formState: { errors }
  } = useForm();
  return (
    <div>
      <div className='font-medium leading-7 text-[18px] text-[#18191C]'>Logo & Banner Image</div>
      <form>
        <div className='grid grid-cols-12 gap-x-[24px] mt-[15px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Logo</div>
            <UploadFileInput />
          </div>
          <div className='col-span-8'>
            <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Banner</div>
            <UploadFileInput />
          </div>
        </div>
        <div className='mt-[29px] grid grid-cols-12 gap-x-[20px]'>
          <div className='col-span-6'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Company name</div>
            <div>
              <input
                type='text'
                className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              />
            </div>
          </div>
          <div className='col-span-6'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Company Website</div>
            <div>
              <input
                type='text'
                className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
              />
            </div>
          </div>
        </div>
        <div className='mt-[15px]'>
          <div className='text-[14px] leading-5 text-[#18191C]'>About Us</div>
          <div className='mt-2'>
            <TextArea
              placeholder='Write down about your company here. Let the candidate know who we are...'
              register={register}
              name='description'
              setValue={setValue}
            />
          </div>
        </div>
        <div className='mt-[32px] mb-[100px]'>
          <button
            className='min-w-[193px] h-[56px] rounded-[4px] bg-[#0A65CC] text-white text-[16px]
          font-semibold leading-6 flex items-center justify-center gap-[12px]'
          >
            Save & Next
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 12H19'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 5L19 12L12 19'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
