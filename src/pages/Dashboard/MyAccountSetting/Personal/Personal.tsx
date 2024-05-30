import UploadFileInput from '../../../../components/UploadFileInput';
import { userSchema, UserSchema } from '../../../../utils/rules.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import userApi from '../../../../apis/user.api.ts';
import { UpdateUser } from '../../../../types/user.type.ts';
import ModalExpiredToken from '../../../../components/ModalExpiredToken';
import { clearAccessTokenFromLocalStorage, clearRoleToLocalStorage } from '../../../../utils/auth.ts';
import { isAxiosUnauthorizedError } from '../../../../utils/utils.ts';
import { ErrorResponse } from '../../../../types/utils.type.ts';

interface FileWithSize {
  id: string;
  fileName: string;
  fileType: string;
  size: number;
  uploadTime: string;
}

type UnauthorizedError = {
  message: string;
};

type FormData = Pick<UserSchema, 'fullName' | 'title' | 'experience' | 'education' | 'avatar'>;
const personalSchema = userSchema.pick(['fullName', 'title', 'experience', 'education', 'avatar']);
export default function Personal() {
  const [avatarImage, setAvatarImage] = useState<string>('');
  const [isOpenModalUnauthorized, setIsOpenModalUnauthorized] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(personalSchema),
    defaultValues: {
      fullName: '',
      title: '',
      education: '',
      experience: '',
      avatar: {}
    }
  });
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['profileData'],
    queryFn: () => userApi.getProfile()
  });
  const profileData = data?.data.data;
  console.log('check profile: ', profileData);
  const handleAvatarUpload = (avatarId: string) => {
    setAvatarImage(avatarId);
  };
  const userId = profileData?.id;
  const updatePersonalMutation = useMutation({
    mutationFn: (body: UpdateUser) => userApi.updateUser(userId as string, body)
  });
  const roleName =
    profileData &&
    profileData.roles.map((role) => ({
      name: role.name
    }));
  const onSubmit = handleSubmit((data) => {
    const format = {
      ...data,
      avatar: {
        id: data.avatar?.id ? data.avatar.id : avatarImage
      },
      fullName: data.fullName,
      title: data.title,
      experience: data.experience,
      education: data.education
    };
    const finalFormSubmit = {
      ...format,
      email: profileData?.email as string,
      phoneNumber: profileData?.phoneNumber as string,
      gender: profileData?.gender as string,
      title: profileData?.title as string,
      age: profileData?.age as number,
      company: {
        name: profileData?.company?.name as string
      },
      address: profileData?.address as string,
      roles: roleName as { name: string }[]
    };
    updatePersonalMutation.mutate(finalFormSubmit, {
      onSuccess: (data) => {
        queryClient
          .invalidateQueries({
            queryKey: ['profileData']
          })
          .then();
        console.log('check data success: ', data);
      },
      onError: (error) => {
        if (isAxiosUnauthorizedError<ErrorResponse<UnauthorizedError>>(error)) {
          clearAccessTokenFromLocalStorage();
          setIsOpenModalUnauthorized(true);
        }
      }
    });
    console.log('check submit: ', finalFormSubmit);
  });

  useEffect(() => {
    if (profileData) {
      setValue('avatar', profileData.avatar || ({} as FileWithSize));
      setValue('fullName', profileData.fullName);
      setValue('title', profileData.title);
      setValue('education', profileData.education);
      setValue('experience', profileData.experience);
    }
  }, [setValue, profileData]);
  return (
    <div className='mt-[32px]'>
      <div className='text-[18px] leading-7 font-medium text-[#18191c]'>Basic Information</div>
      <form noValidate onSubmit={onSubmit}>
        <div className='mt-[18px]'>
          <div className='grid grid-cols-12 gap-[48px]'>
            <div className='col-span-4'>
              <div className='mb-2'>Profile Picture</div>
              <UploadFileInput
                register={register}
                name='avatar'
                errorMessage={errors.avatar?.message}
                setValue={setValue}
                setError={setError}
                onImageUpload={handleAvatarUpload}
                valueFromServer={profileData?.avatar}
              />
            </div>
            <div className='col-span-8'>
              <div className='grid grid-cols-2 gap-[18px]'>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Full Name</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                    {...register('fullName')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.fullName?.message}</span>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Title</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                    {...register('title')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.title?.message}</span>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-[18px] mt-[10px]'>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Experience</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                    {...register('experience')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.experience?.message}</span>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='text-[14px] leading-5 text-[#18191c]'>Education</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                    {...register('education')}
                  />
                  <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
                    <span className='font-medium'>{errors.education?.message}</span>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 mt-[16px]'>
                <button
                  className='w-[175px] h-[56px] bg-[#0b65cc] rounded-[4px] text-white text-[16px]
                    leading-6 font-semibold'
                  type='submit'
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {isOpenModalUnauthorized && (
        <ModalExpiredToken
          closeModal={() => {
            window.location.reload();
            clearRoleToLocalStorage();
            setIsOpenModalUnauthorized(false);
          }}
          heading='Credential session has expired, please sign in again.'
          textButtonYes='OK'
          icon={
            <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1848 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1848 5.96858 19.7572 5.10571 18.8943Z'
                stroke='#0d7490'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M16.125 9.75L10.625 15L7.875 12.375'
                stroke='#0d7490'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
        />
      )}
    </div>
  );
}
