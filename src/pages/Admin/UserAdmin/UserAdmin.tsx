import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import useQueryConfig from '../../../hooks/useQueryConfig.tsx';
import userApi from '../../../apis/user.api.ts';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../../contexts/app.context.tsx';
import Loading from '../../../components/Loading/Loading.tsx';
import SvgOops from '../../../components/SvgOops';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { searchSchemaUser, searchUserSchema } from '../../../utils/rules.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { omit } from 'lodash';
import ModalCreateUser from './ModalUser/ModalCreateUser';
import ModalUpdateUser from './ModalUser/ModalUpdateUser';
import useQueryParams from '../../../hooks/useQueryPrams.tsx';

type FormData = Pick<searchSchemaUser, 'email'>;
const searchUserAdminSchema = searchUserSchema.pick(['email']);

export default function UserAdmin() {
  const [isSearch, setSearch] = useState<boolean>(false);
  const [isOpenModalCreateUser, setOpenModalCreateUser] = useState<boolean>(false);
  const [isOpenModalUpdateUser, setOpenModalUpdateUser] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const { isAuthenticated } = useContext(AppContext);
  const queryConfig = useQueryConfig();
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const queryConfigUserAdmin = {
    ...queryConfig,
    sortBy: 'createdAt',
    sortDir: 'desc',
    pageSize: '10'
  };
  const pageNo = Number(queryConfigUserAdmin.pageNo);
  const pageSize = Number(queryConfigUserAdmin.pageSize);
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(searchUserAdminSchema)
  });
  const { data: listUserData, isLoading: loadingUserList } = useQuery({
    queryKey: ['allUsersData', queryConfigUserAdmin],
    queryFn: () => (isAuthenticated ? userApi.getAllUsers(queryConfigUserAdmin) : null),
    placeholderData: keepPreviousData
  });
  const totalPagesData = Number(listUserData?.data.data.meta.totalPages);
  const { data: listUserSearchData, isLoading: loadingSearch } = useQuery({
    queryKey: ['allUsersSearchData', queryParams],
    queryFn: () => (isAuthenticated ? userApi.searchUser(queryParams) : null),
    enabled: isSearch,
    placeholderData: keepPreviousData
  });
  const totalPagesSearchData = Number(listUserSearchData?.data.data.meta.totalPages);
  console.log('Check data search: ', listUserSearchData);
  const onSubmit = handleSubmit((data) => {
    setSearch(true);
    navigate({
      pathname: '/admin/user',
      search: createSearchParams(
        omit({
          ...queryConfigUserAdmin,
          email: data.email as string,
          pageNo: '1'
        })
      ).toString()
    });
    console.log('check handle submit: ', data);
  });

  const handleClickButtonEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    userId: string
  ) => {
    setUserId(userId);
    setOpenModalUpdateUser(true);
    event.preventDefault();
  };
  return (
    <div className='my-[54px]'>
      <div className='text-[18px] leading-7 font-medium text-[#18191c]'>Users</div>
      <div className='py-[18px]'>
        <div className='flex items-center justify-end gap-[16px]'>
          <div className='border-[2px] p-[2px] w-[300px] border-[#E4E5E8] rounded-[6px] h-[48px]'>
            <form noValidate onSubmit={onSubmit}>
              <div className='relative'>
                <div className='absolute left-[18px] top-[50%] translate-y-[-50%]'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                      stroke='#0066FF'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M21 21L16.65 16.65'
                      stroke='#0066FF'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  placeholder='Search user'
                  className='w-full h-[40px] pl-[54px] border-none border-transparent
                  focus:border-transparent focus:ring-0 leading-5 text-[14px] text-[#18191C]'
                  {...register('email')}
                />
              </div>
            </form>
          </div>
          <Link
            onClick={() => {
              setOpenModalCreateUser(true);
            }}
            to=''
            className='bg-[#0A65CC] py-[14px] px-[18px] rounded-[6px] h-[48px] flex items-center
            justify-center text-[14px] leading-5 text-white font-semibold gap-[4px] group'
          >
            Add User
          </Link>
          <Link
            onClick={() => {
              setValue('email', '');
              setSearch(false);
              navigate({
                pathname: '/admin/user',
                search: createSearchParams({
                  ...queryConfigUserAdmin
                }).toString()
              });
            }}
            to=''
            className='bg-[#0A65CC] py-[14px] px-[18px] rounded-[6px] h-[48px] flex items-center
            justify-center text-[14px] leading-5 text-white font-semibold gap-[4px] group'
          >
            Reload
          </Link>
        </div>
      </div>
      <div className='mt-[24px]'>
        <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
          <div className='col-span-1 text-center text-[12px] text-[#535860]'>Index</div>
          <div className='col-span-3 text-[12px] text-[#535860]'>Name</div>
          <div className='col-span-3 text-[12px] text-[#535860]'>Email</div>
          <div className='col-span-2 text-[12px] text-[#535860]'>Role Account</div>
          <div className='col-span-2 text-[12px] text-[#535860]'>Created At</div>
          <div className='col-span-1 text-center text-[12px] text-[#535860]'>Actions</div>
        </div>
      </div>
      <div className='mt-2 h-[530px]'>
        {loadingUserList ? (
          <div className='h-[530px] flex items-center justify-center  '>
            <Loading />
          </div>
        ) : isSearch ? (
          loadingSearch ? (
            <div className='h-[530px] flex items-center justify-center  '>
              <Loading />
            </div>
          ) : listUserSearchData?.data.data.data &&
            listUserSearchData?.data.data.data.length > 0 ? (
            listUserSearchData?.data.data.data.map((user, index) => (
              <div
                key={user.id}
                className='grid grid-cols-12 px-[20px] py-[10px] items-center border-b
        hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
              >
                <div className='col-span-1 text-center text-[16px] text-[#535860]'>
                  {(pageNo - 1) * pageSize + index + 1}
                </div>

                <div className='col-span-3 text-[16px] text-[#535860]'>{user.fullName}</div>
                <div className='col-span-3 text-[16px] text-[#535860] truncate w-[200px]'>
                  {user.email}
                </div>
                <div className='col-span-2 text-[16px] text-[#535860]'>
                  {user.roles.map((role) => role.name)}
                </div>
                <div className='col-span-2 text-[16px] text-[#535860]'>
                  {moment(user.createdAt).format('DD MMM, YYYY')}
                </div>
                <div
                  className='col-span-1 text-center text-[16px] text-[#535860] flex justify-center
          items-center gap-[6px]'
                >
                  <button
                    onClick={(event) => handleClickButtonEdit(event, user.id)}
                    className='group p-[6px] hover:bg-[#f1f2f4] rounded-[3px] hover:cursor-pointer'
                  >
                    <svg
                      className='group-hover:text-[#FFA500] text-[#939AAD]'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V15.3107C3.75 15.2122 3.7694 15.1147 3.80709 15.0237C3.84478 14.9327 3.90003 14.85 3.96967 14.7803L15.2197 3.53034C15.3603 3.38969 15.5511 3.31067 15.75 3.31067C15.9489 3.31067 16.1397 3.38969 16.2803 3.53034L20.4697 7.71968C20.6103 7.86033 20.6893 8.0511 20.6893 8.25001C20.6893 8.44892 20.6103 8.63969 20.4697 8.78034L9 20.25Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12.75 6L18 11.25'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M20.25 20.25H9.00001L3.79773 15.0477'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                  <button className='group p-[6px] hover:bg-[#f1f2f4] rounded-[3px] hover:cursor-pointer'>
                    <svg
                      className='group-hover:text-[#E05151] text-[#939AAD]'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.2495 5.25L3.74951 5.25001'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9.75 9.75V15.75'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14.25 9.75V15.75'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <SvgOops />
              <div className='font-medium text-[20px] leading-7'>
                Oops! The user does not exist.
              </div>
            </div>
          )
        ) : listUserData?.data.data.data && listUserData?.data.data.data.length > 0 ? (
          listUserData?.data.data.data.map((user, index) => (
            <div
              key={user.id}
              className='grid grid-cols-12 px-[20px] py-[10px] items-center border-b
        hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
            >
              <div className='col-span-1 text-center text-[16px] text-[#535860]'>
                {(pageNo - 1) * pageSize + index + 1}
              </div>

              <div className='col-span-3 text-[16px] text-[#535860]'>{user.fullName}</div>
              <div className='col-span-3 text-[16px] text-[#535860] truncate w-[200px]'>
                {user.email}
              </div>
              <div className='col-span-2 text-[16px] text-[#535860]'>
                {user.roles.map((role) => role.name)}
              </div>
              <div className='col-span-2 text-[16px] text-[#535860]'>
                {moment(user.createdAt).format('DD MMM, YYYY')}
              </div>
              <div
                className='col-span-1 text-center text-[16px] text-[#535860] flex justify-center
          items-center gap-[6px]'
              >
                <button
                  onClick={(event) => handleClickButtonEdit(event, user.id)}
                  className='group p-[6px] hover:bg-[#f1f2f4] rounded-[3px] hover:cursor-pointer'
                >
                  <svg
                    className='group-hover:text-[#FFA500] text-[#939AAD]'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V15.3107C3.75 15.2122 3.7694 15.1147 3.80709 15.0237C3.84478 14.9327 3.90003 14.85 3.96967 14.7803L15.2197 3.53034C15.3603 3.38969 15.5511 3.31067 15.75 3.31067C15.9489 3.31067 16.1397 3.38969 16.2803 3.53034L20.4697 7.71968C20.6103 7.86033 20.6893 8.0511 20.6893 8.25001C20.6893 8.44892 20.6103 8.63969 20.4697 8.78034L9 20.25Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.75 6L18 11.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20.25 20.25H9.00001L3.79773 15.0477'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
                <button className='group p-[6px] hover:bg-[#f1f2f4] rounded-[3px] hover:cursor-pointer'>
                  <svg
                    className='group-hover:text-[#E05151] text-[#939AAD]'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.2495 5.25L3.74951 5.25001'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.75 9.75V15.75'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.25 9.75V15.75'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <SvgOops />
            <div className='font-medium text-[20px] leading-7'>
              Oops! There are no users in the list.
            </div>
          </div>
        )}
      </div>
      {loadingUserList || loadingSearch ? (
        <div className='mt-[30px] flex items-center justify-end gap-x-[20px]'>
          <span className=''>Previous</span>
          <span className=''>Next</span>
          <div className='w-[100px]'>Page {pageNo} / 1</div>
        </div>
      ) : (
        <div className='mt-[30px] flex items-center justify-end gap-x-[20px]'>
          {isSearch ? (
            <>
              {pageNo === 1 ? (
                <span>Previous</span>
              ) : (
                <Link
                  className='text-[#0b65cc]'
                  to={{
                    pathname: '/admin/user',
                    search: createSearchParams({
                      ...queryConfigUserAdmin,
                      pageNo: (pageNo - 1).toString()
                    }).toString()
                  }}
                >
                  Previous
                </Link>
              )}
              {pageNo === totalPagesSearchData ? (
                <span className=''>Next</span>
              ) : (
                <Link
                  className='text-[#0b65cc]'
                  to={{
                    pathname: '/admin/user',
                    search: createSearchParams({
                      ...queryConfigUserAdmin,
                      pageNo: (pageNo + 1).toString()
                    }).toString()
                  }}
                >
                  Next
                </Link>
              )}
              <div className='w-[100px]'>
                Page {pageNo} / {totalPagesSearchData}
              </div>
            </>
          ) : (
            <>
              {pageNo === 1 ? (
                <span>Previous</span>
              ) : (
                <Link
                  className='text-[#0b65cc]'
                  to={{
                    pathname: '/admin/user',
                    search: createSearchParams({
                      ...queryConfigUserAdmin,
                      pageNo: (pageNo - 1).toString()
                    }).toString()
                  }}
                >
                  Previous
                </Link>
              )}
              {pageNo === totalPagesData ? (
                <span className=''>Next</span>
              ) : (
                <Link
                  className='text-[#0b65cc]'
                  to={{
                    pathname: '/admin/user',
                    search: createSearchParams({
                      ...queryConfigUserAdmin,
                      pageNo: (pageNo + 1).toString()
                    }).toString()
                  }}
                >
                  Next
                </Link>
              )}
              <div className='w-[100px]'>
                Page {pageNo} / {totalPagesData}
              </div>
            </>
          )}
        </div>
      )}

      {isOpenModalCreateUser && (
        <ModalCreateUser
          closeModal={() => {
            setOpenModalCreateUser(false);
          }}
        />
      )}
      {isOpenModalUpdateUser && (
        <ModalUpdateUser
          userId={userId}
          closeModal={() => {
            setOpenModalUpdateUser(false);
          }}
        />
      )}
    </div>
  );
}
