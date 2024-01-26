import TopBarMyCompany from './TopBarMyCompany';
import { Outlet } from 'react-router-dom';

export default function MyCompanyInfo() {
  return (
    <div className='container mt-[48px]'>
      <div className='text-[24px] font-medium leading-8 text-[#18191C]'>My Company Information</div>
      <div className='mt-[18px]'>
        <div className='flex items-center'>
          <TopBarMyCompany />
        </div>
        <div className='mt-[32px]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
