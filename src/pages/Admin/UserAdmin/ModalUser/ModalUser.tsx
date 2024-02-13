import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import UploadFileInput from '../../../../components/UploadFileInput';
import Calendar from '../../../../components/Calendar';
import TextArea from '../../../../components/TextArea';

const custom: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden'
      },
      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl'
      },
      positions: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start'
      }
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]'
    },
    body: {
      base: 'p-6 flex-1 overflow-auto',
      popup: 'pt-0'
    },
    header: {
      base: 'flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5',
      popup: 'p-2 border-b-0',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5'
      }
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t'
    }
  }
};

interface Props {
  closeModal: () => void;
  isEdit: boolean;
}

export default function ModalUser({ closeModal, isEdit }: Props) {
  const { register, setValue } = useForm();
  return (
    <>
      <Flowbite theme={{ theme: custom }}>
        <Modal size='7xl' show={true} position='center' onClose={closeModal}>
          <Modal.Header>{!isEdit ? 'Create New Company' : 'Edit Company'}</Modal.Header>
          <Modal.Body>
            <form noValidate>
              <div className='grid grid-cols-12 gap-x-[24px]'>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Logo</div>
                  <UploadFileInput />
                </div>
                <div className='col-span-8'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Upload Banner</div>
                  <UploadFileInput />
                </div>
              </div>
              <div className='grid grid-cols-12 gap-x-[20px] mt-[30px]'>
                <div className='col-span-4'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Company Name</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
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
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Year of Establishment</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Email</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Location</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Phone Number</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C]'>Company Website</div>
                  <input
                    type='text'
                    className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
                  />
                </div>
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2'>Industry Type</div>
                  <Calendar register={register} name='startDate' setValue={setValue} />
                </div>
                <div className='col-span-4 mt-[20px]'>
                  <div className='text-[14px] leading-5 text-[#18191C] mb-2 '>Industry Type</div>
                  <Calendar register={register} name='endDate' setValue={setValue} />
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className='rounded-[4px]' onClick={closeModal}>
              {!isEdit ? 'Create' : 'Save'}
            </Button>
            <Button className='rounded-[4px]' color='gray' onClick={closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Flowbite>
    </>
  );
}
