import { CustomFlowbiteTheme, Datepicker, Flowbite } from 'flowbite-react';

const custom: CustomFlowbiteTheme = {
  datepicker: {
    root: {
      input: {
        field: {
          input: {
            withShadow: {
              off:
                'bg-white border-[#e4e5e8] rounded-[5px] focus:outline-none focus:border-[#9099a3] focus:ring-0' +
                ' text-[16px]'
            },
            withRightIcon: {
              off: 'pl-[40px]'
            },
            base:
              'block w-full disabled:cursor-not-allowed disabled:opacity-50' +
              ' border-[2px] hover:cursor-pointer' +
              ' text-sm  h-[48px] ml-[2px] bg-red-500'
          },
          icon: {
            base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center px-[18px] py-[12px]'
          }
        }
      }
    }
  }
};

export default function Calendar() {
  return (
    <Flowbite theme={{ theme: custom }}>
      <Datepicker />
    </Flowbite>
  );
}
