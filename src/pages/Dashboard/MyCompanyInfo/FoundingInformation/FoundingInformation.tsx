import Calendar from '../../../../components/Calendar';
import { useForm } from 'react-hook-form';
import TextArea from '../../../../components/TextArea';

export default function FoundingInformation() {
  const { register, setValue } = useForm();
  return (
    <div>
      <form>
        <div className='grid grid-cols-12 gap-x-[20px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Industry Type</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Team Size</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Year of Establishment</div>
            <Calendar register={register} name='foundedDate' setValue={setValue} />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Email</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Location</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Phone Number</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
        </div>
        <div className='mt-[20px]'>
          <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Company Vision</div>
          <TextArea
            placeholder='Tell us about your company vision...'
            register={register}
            name='companyVision'
            setValue={setValue}
          />
        </div>
        <div>
          <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Company Benefit</div>
          <TextArea
            placeholder='Tell us about your company benefit...'
            register={register}
            name='companyBenefit'
            setValue={setValue}
          />
        </div>
        <div className='mt-[32px] mb-[100px]'>
          <button
            className='min-w-[193px] h-[56px] rounded-[4px] bg-[#0A65CC] text-white text-[16px]
          font-semibold leading-6 flex items-center justify-center gap-[12px]'
          >
            Save & Finish
          </button>
        </div>
      </form>
    </div>
  );
}
