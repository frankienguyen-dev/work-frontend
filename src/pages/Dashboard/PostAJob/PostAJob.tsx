import TextArea from '../../../components/TextArea/TextArea.tsx';
import { jobSchema, postJobSchema } from '../../../utils/rules.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Calendar from '../../../components/Calendar';
import { useMutation, useQuery } from '@tanstack/react-query';
import jobApi from '../../../apis/job.api.ts';
import TagInputComponent from '../../../components/TagInputComponent';
import userApi from '../../../apis/user.api.ts';
import { PostJob } from '../../../types/job.type.ts';

export type FormPostJobData = postJobSchema;

export default function PostAJob() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormPostJobData>({
    resolver: yupResolver(jobSchema)
  });

  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => userApi.getProfile()
  });

  const profile = data?.data.data;
  const postJobMutation = useMutation({
    mutationFn: (body: PostJob) => jobApi.postJob(body)
  });

  const onSubmitPostJob = handleSubmit(
    (data) => {
      const postJobData = {
        ...data,
        company: {
          name: data.company
        },

        startDate: data.startDate.toISOString(),
        endDate: data.endDate.toISOString()
      };
      console.log('check data post job:', postJobData);
      postJobMutation.mutate(postJobData, {
        onSuccess: (data) => {
          console.log('check data on Success: ', data);
        }
      });
    },
    (error) => {
      console.log('check error post job: ', error);
    }
  );

  return (
    <div className='mt-[48px]'>
      <form noValidate onSubmit={onSubmitPostJob}>
        <div className='leading-8 text-[24px] font-medium text-[#18191c]'>Post a job</div>
        <div className=' mt-[32px]'>
          <div className='text-[14px] leading-5 text-[#18191c]'>Job Name</div>
          <input
            type='text'
            placeholder='Job Name'
            className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#9199a3] mt-2'
            {...register('name')}
          />
          <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
            <span className='font-medium'>{errors.name?.message}</span>
          </div>
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
              {...register('location')}
            />
            <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.location?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c]'>Quantity</div>
            <input
              type='text'
              placeholder='Quantity'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2'
              {...register('quantity')}
            />
            <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.quantity?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c]'>Job Level</div>
            <select
              id='level'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] mt-2 hover:cursor-pointer'
              {...register('level')}
              defaultValue='Select...'
            >
              <option disabled value='Select...'>
                Select...
              </option>
              <option value='Intern'>Intern</option>
              <option value='Fresher'>Fresher</option>
              <option value='Junior'>Junior</option>
              <option value='Middle'>Middle</option>
              <option value='Senior'>Senior</option>
            </select>
            <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.level?.message}</span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Salary</div>
            <input
              type='text'
              placeholder='Salary'
              className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
              {...register('salary')}
            />
            <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
              <span className='font-medium'>{errors.salary?.message}</span>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Start Date</div>
            <div>
              <Calendar
                name='startDate'
                setValue={setValue}
                register={register}
                errorMessage={errors.startDate?.message}
              />
            </div>
          </div>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>End Date</div>
            <div>
              <Calendar
                name='endDate'
                setValue={setValue}
                register={register}
                errorMessage={errors.endDate?.message}
              />
            </div>
          </div>
        </div>
        <div className='mt-[32px]'>
          <div className='text-[18px] leading-7 font-medium text-[#18191C]'>
            Advance Information
          </div>
          <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
            <div className='col-span-3'>
              <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Education</div>
              <input
                type='text'
                placeholder='Education'
                className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                {...register('education')}
              />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.education?.message}</span>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Experience</div>
              <input
                type='text'
                placeholder='Experience'
                className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                {...register('experience')}
              />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.experience?.message}</span>
              </div>
            </div>

            <div className='col-span-3'>
              <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Job Type</div>
              <input
                type='text'
                placeholder='Job Type'
                className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827]'
                {...register('jobType')}
              />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.jobType?.message}</span>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Company</div>
              <select
                id='company'
                className='w-full h-[48px] border-[2px] solid border-[#e4e5e8] rounded-[5px]
          focus:outline-none focus:border-[#9099a3] focus:ring-0 py-[12px] px-[18px]
          text-[16px] leading-6 text-[#111827] hover:cursor-pointer'
                {...register('company')}
                defaultValue='Select...'
              >
                <option disabled value='Select...'>
                  Select...
                </option>
                {profile && profile?.company?.id ? (
                  <option value={profile?.company?.name}>{profile?.company?.name}</option>
                ) : (
                  <option disabled value=''>
                    {'No Company '}
                  </option>
                )}
              </select>
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.company?.message}</span>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-[18px] mt-[18px]'>
            <div className='col-span-12'>
              <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Skills</div>
              <TagInputComponent register={register} name='skills' setValue={setValue} />
              <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.skills?.message}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-[32px]'>
          <div className='text-[18px] leading-7 text-[#18191c] font-medium'>
            Description & Responsibility
          </div>
          <div className='mt-[18px] text-[14px] leading-5 text-[#18191C]'>Description</div>
          <div className='mt-[8px]'>
            <TextArea
              errorMessage={errors.description?.message}
              name='description'
              setValue={setValue}
              register={register}
              placeholder='Add your description'
            />
          </div>

          <div className='mt-[18px] text-[14px] leading-5 text-[#18191C]'>Responsibility</div>
          <div className='mt-[8px]'>
            <TextArea
              errorMessage={errors.responsibility?.message}
              name='responsibility'
              setValue={setValue}
              register={register}
              placeholder='Add your responsibility'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 mt-[34px] mb-[100px]'>
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
