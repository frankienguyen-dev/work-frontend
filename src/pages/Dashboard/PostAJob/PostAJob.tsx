import Calendar from '../../../components/Calendar';
import TextArea from '../../../components/TextArea/TextArea.tsx';

export default function PostAJob() {
  return (
    <div className='mt-[48px]'>
      <form>
        <div className='leading-8 text-[24px] font-medium text-[#18191c]'>Post a job</div>
        <div className=' mt-[32px]'>
          <div className='text-[14px] leading-5 text-[#18191c]'>Job Name</div>
          <input
            type='text'
            placeholder='Job Name'
            className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#9199a3] mt-2'
          />
        </div>
        <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c]'>Location</div>
            <input
              type='text'
              placeholder='Location'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2'
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c]'>Quantity</div>
            <input
              type='text'
              placeholder='Quantity'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2'
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c]'>Job Level</div>
            <select
              name='level'
              id='level'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2 hover:cursor-pointer'
            >
              <option value='Intern'>Intern</option>
              <option value='Fresher'>Fresher</option>
              <option value='Junior'>Junior</option>
              <option value='Middle'>Middle</option>
              <option value='Senior'>Senior</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Salary</div>
            <input
              type='text'
              placeholder='Quantity'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
            />
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Start Date</div>
            <div>
              <Calendar />
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>End Date</div>
            <div>
              <Calendar />
            </div>
          </div>
        </div>
        <div className='mt-[32px]'>
          <div className='text-[18px] leading-7 text-[#18191c] font-medium mb-5'>
            Description & Responsibility
          </div>

          <div>
            <TextArea />
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
  );
}
