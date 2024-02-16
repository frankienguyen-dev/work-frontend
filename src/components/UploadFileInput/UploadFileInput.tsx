import { FileInput, Label } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import {
  RegisterOptions,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue
} from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import uploadApi from '../../apis/upload.api.ts';
import { getLogoUrl, isAxiosPayloadLargeError } from '../../utils/utils.ts';

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: UseFormSetError<any>;
  valueFromServer?: any;
  onImageUpload: (image: string) => void;
}

type PayloadLargeError = {
  detail: string;
};
export default function UploadFileInput({
  name,
  register,
  rules,
  setValue,
  errorMessage,
  setError,
  onImageUpload,
  valueFromServer
}: Props) {
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (valueFromServer) {
      setSelectedImage(getLogoUrl(valueFromServer));
    }
  }, [valueFromServer]);

  const uploadImageMutation = useMutation({
    mutationFn: (body: FormData) => uploadApi.uploadImage(body)
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = event.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
      const formData = new FormData();
      formData.append('file', image);
      console.log(formData.get('file'));
      uploadImageMutation.mutate(formData, {
        onSuccess: (data) => {
          console.log('check data upload image: ', data);
          // setImageId(data.data.data.id);
          if (name === 'banner') {
            onImageUpload(data.data.data.id);
          }
          if (name === 'logo') {
            onImageUpload(data.data.data.id);
          }
        },
        onError: (error) => {
          if (isAxiosPayloadLargeError<PayloadLargeError>(error)) {
            console.log(error);
            const formError = error?.response?.data.detail;
            if (formError) {
              setError(name, {
                message: formError
              });
            }
          }
        }
      });
      setValue(name, image);
    }
  };
  return (
    <div>
      <div className='flex w-full items-center justify-center'>
        <Label
          htmlFor={`dropzone-file-${name}`}
          className='dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          {selectedImage ? (
            <img src={selectedImage} alt='' className='w-full h-full object-cover rounded-lg' />
          ) : (
            <div className='flex flex-col items-center justify-center pb-6 pt-5'>
              <svg
                className='mb-4 h-8 w-8 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>

              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>Click to upload</span> or drag and drop
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or JPEG</p>
            </div>
          )}
          <FileInput
            accept='.jpg, .jpeg, .png, .svg'
            {...register(name, rules)}
            id={`dropzone-file-${name}`}
            className='hidden'
            onChange={handleFileChange}
          />
        </Label>
      </div>

      <div className='mt-1 min-h-[1.25rem] text-[12px] text-red-600 dark:text-red-500'>
        <span className='font-medium'>{errorMessage}</span>
      </div>
    </div>
  );
}
