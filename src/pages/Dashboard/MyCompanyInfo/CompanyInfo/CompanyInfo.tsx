import UploadFileInput from '../../../../components/UploadFileInput';
import TextArea from '../../../../components/TextArea';
import { useForm } from 'react-hook-form';
import { companySchema, createCompanySchema } from '../../../../utils/rules.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../contexts/app.context.tsx';
import { useQuery } from '@tanstack/react-query';
import companyApi from '../../../../apis/company.api.ts';
import { useNavigate } from 'react-router-dom';

interface FileWithSize {
  id: string;
  fileName: string;
  fileType: string;
  size: number;
  uploadTime: string;
}

type FormData = Pick<createCompanySchema, 'name' | 'logo' | 'website' | 'banner' | 'description'>;
const updateCompanyInfoSchema = companySchema.pick(['name', 'logo', 'website', 'banner', 'description']);
export default function CompanyInfo() {
  const { setCompanyInfo } = useContext(AppContext);
  const [imageLogoId, setImageLogoId] = useState<string>('');
  const [imageBannerId, setImageBannerId] = useState<string>('');
  const navigate = useNavigate();
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<FormData>({
    resolver: yupResolver(updateCompanyInfoSchema),
    defaultValues: {
      name: '',
      description: '',
      website: '',
      logo: {} as FileWithSize,
      banner: {} as FileWithSize
    }
  });
  const { data: myCompanyInfo } = useQuery({
    queryKey: ['myCompanyData'],
    queryFn: () => companyApi.getMyCompany(),
    gcTime: 0
  });
  const myCompanyInfoData = myCompanyInfo?.data.data;
  console.log('check company info: ', myCompanyInfoData);
  const handleImageLogoUpload = (imageLogoId: string) => {
    setImageLogoId(imageLogoId);
  };

  const handleImageBannerUpload = (imageBannerId: string) => {
    setImageBannerId(imageBannerId);
  };

  const onSubmit = handleSubmit((data) => {
    console.log('check data: ', data);
    const formCompanyInfoData = {
      ...data,
      name: data.name,
      website: data.website,
      description: data.description,
      banner: {
        id: data.banner?.id ? data.banner?.id : imageBannerId
      },
      logo: {
        id: data.logo?.id ? data.logo?.id : imageLogoId
      }
    };
    setCompanyInfo(formCompanyInfoData);
    navigate('founding-info');
    scrollTo(0, 0);
    console.log('check submit: ', formCompanyInfoData);
  });

  useEffect(() => {
    if (myCompanyInfoData) {
      setValue('logo', myCompanyInfoData.logo || ({} as FileWithSize));
      setValue('banner', myCompanyInfoData.banner || ({} as FileWithSize));
      setValue('name', myCompanyInfoData.name);
      setValue('website', myCompanyInfoData.website);
      setValue('description', myCompanyInfoData.description);
    }
  }, [setValue, myCompanyInfoData]);

  return (
    <div>
      <div className='font-medium leading-7 text-[18px] text-[#18191C]'>Logo & Banner Image</div>
      <form noValidate onSubmit={onSubmit}>
        <div className='grid grid-cols-12 gap-x-[24px] mt-[15px]'>
          <div className='col-span-4'>
            <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Logo</div>
            <UploadFileInput
              name='logo'
              setValue={setValue}
              register={register}
              setError={setError}
              errorMessage={errors.logo?.message}
              onImageUpload={handleImageLogoUpload}
              valueFromServer={myCompanyInfoData?.logo}
            />
          </div>
          <div className='col-span-8'>
            <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Banner</div>
            <UploadFileInput
              errorMessage={errors.banner?.message}
              name='banner'
              register={register}
              setValue={setValue}
              setError={setError}
              onImageUpload={handleImageBannerUpload}
              valueFromServer={myCompanyInfoData?.banner}
            />
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
                {...register('name')}
              />
              <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.name?.message}</span>
              </div>
            </div>
          </div>
          <div className='col-span-6'>
            <div className='text-[14px] leading-5 text-[#18191C]'>Company Website</div>
            <div>
              <input
                type='text'
                className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                {...register('website')}
              />
              <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                <span className='font-medium'>{errors.website?.message}</span>
              </div>
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
              errorMessage={errors.description?.message}
              valueFromServer={myCompanyInfoData?.description}
            />
          </div>
        </div>
        <div className='mt-[32px] mb-[100px]'>
          <button
            type='submit'
            className='min-w-[193px] h-[56px] rounded-[4px] bg-[#0A65CC] text-white text-[16px]
          font-semibold leading-6 flex items-center justify-center gap-[12px]'
          >
            Save & Next
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M5 12H19' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
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
