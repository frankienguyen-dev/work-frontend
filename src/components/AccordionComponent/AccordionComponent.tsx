import { Accordion, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import ToggleSwitchComponent from '../ToggleSwitchComponent';
import { useForm } from 'react-hook-form';
import { roleSchema, RoleSchema } from '../../utils/rules.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import permissionApi from '../../apis/permission.api.ts';
import useQueryParams from '../../hooks/useQueryPrams.tsx';
import useQueryConfig from '../../hooks/useQueryConfig.tsx';
import classNames from 'classnames';

const custom: CustomFlowbiteTheme = {
  accordion: {
    root: {
      base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
      flush: {
        off: 'rounded-lg border',
        on: 'border-b'
      }
    },
    content: {
      base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg'
    },
    title: {
      arrow: {
        base: 'h-6 w-6 shrink-0',
        open: {
          off: '',
          on: 'rotate-180'
        }
      },
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
      flush: {
        off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
        on: 'bg-transparent dark:bg-transparent'
      },
      heading: '',
      open: {
        off: '',
        on: 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white'
      }
    }
  }
};

type FormData = RoleSchema;

interface Props {
  onAccordionChange: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleChange: (name: string) => void;
}

export default function AccordionComponent({ onAccordionChange, onToggleChange }: Props) {
  const [isSwitch, setSwitch] = useState<boolean>(false);
  const queryConfig = useQueryConfig();
  const queryConfigPermission = {
    pageSize: '100'
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(roleSchema)
  });

  const { data } = useQuery({
    queryKey: ['permissionList', queryConfigPermission],
    queryFn: () => permissionApi.getALlPermissions(queryConfigPermission)
  });
  const permissionDataList = data?.data.data.data;
  // const handleSwitchChange = () => {
  //   const newValue = !isSwitch;
  //   setSwitch(newValue);
  //   onAccordionChange(newValue); // Gửi giá trị mới tới parent component
  // };

  return (
    <Flowbite theme={{ theme: custom }}>
      <Accordion collapseAll alwaysOpen>
        <Accordion.Panel>
          <Accordion.Title>Users</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'USERS' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Companies</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'COMPANIES' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Invitations</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'INVITATIONS' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Permissions</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'PERMISSIONS' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Roles</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'ROLES' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Jobs</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'JOBS' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Resumes</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'RESUMES' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Subscribers</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'SUBSCRIBERS' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Categories</Accordion.Title>
          <Accordion.Content>
            <div className='grid grid-cols-12 gap-[40px]'>
              {permissionDataList &&
                permissionDataList.map(
                  (permission) =>
                    permission.module === 'CATEGORIES' && (
                      <div className='col-span-6' key={permission.id}>
                        <div className='flex items-center gap-[20px]'>
                          <ToggleSwitchComponent
                            name={permission.name}
                            onChangeToggle={onToggleChange}
                          />
                          <div>
                            <div className='font-medium text-[16px]'>{permission.name}</div>
                            <div className='mt-2 flex items-center gap-[10px]'>
                              <div
                                className={classNames('font-bold text-[17px]', {
                                  'text-[#ffe47d]': permission.method === 'POST',
                                  'text-[#6bdc99]': permission.method === 'GET',
                                  'text-[#c0a8e1]': permission.method === 'PATCH',
                                  'text-[#f7998e]': permission.method === 'DELETE'
                                })}
                              >
                                {permission.method}
                              </div>
                              <div className='text-[16px]'>{permission.path}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Flowbite>
  );
}
