import { Outlet } from 'react-router-dom';
import TopBarSetting from './TopBarSetting';

export default function MyAccountSetting() {
  return (
    <div className='mt-[48px]'>
      <div>
        <div className='text-[24px] leading-8 font-medium text-[#18191c]'>Settings</div>
        <TopBarSetting />

        <Outlet />
      </div>
    </div>
  );
}
