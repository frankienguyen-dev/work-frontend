import { CustomFlowbiteTheme, Datepicker, Flowbite } from 'flowbite-react';
import { RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { formatISO } from 'date-fns';

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
    },
    popup: {
      footer: {
        button: {
          base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300',
          today: 'bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700',
          clear:
            'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
        }
      }
    },
    views: {
      days: {
        header: {
          base: 'grid grid-cols-7 mb-1',
          title:
            'dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400'
        },
        items: {
          base: 'grid w-64 grid-cols-7',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ',
            selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
            disabled: 'text-gray-500'
          }
        }
      },
      months: {
        items: {
          base: 'grid w-64 grid-cols-4',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
            selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
            disabled: 'text-gray-500'
          }
        }
      },
      years: {
        items: {
          base: 'grid w-64 grid-cols-4',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
            selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
            disabled: 'text-gray-500'
          }
        }
      },
      decades: {
        items: {
          base: 'grid w-64 grid-cols-4',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
            selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
            disabled: 'text-gray-500'
          }
        }
      }
    }
  }
};

interface Props {
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  name: string;
  setValue: UseFormSetValue<any>;
}

export default function Calendar({ errorMessage, register, rules, name, setValue }: Props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    register(name, rules);
  }, [register, name, rules]);

  const handleChangeDate = (editorState: Date) => {
    console.log('Selected Date:', editorState);
    const isoDateString = formatISO(editorState);
    console.log('ISO Date String:', isoDateString);
    setValue(name, isoDateString);
    console.log('Value after setValue:', isoDateString);
    setDate(editorState);
  };

  return (
    <div>
      <Flowbite theme={{ theme: custom }}>
        <Datepicker
          minDate={new Date()}
          defaultDate={date}
          onSelectedDateChanged={handleChangeDate}
        />
      </Flowbite>
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
        <span className='font-medium'>{errorMessage}</span>
      </div>
    </div>
  );
}
