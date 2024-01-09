import Header from '../../components/Header';
import SidebarDashboard from './SidebarDashboard';
import Overview from './Overview/Overview.tsx';
import { Route, Routes } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import FavoriteJob from './FavoriteJob';
import Setting from './Setting';
import Personal from './Setting/Personal';
import ProfileSetting from './Setting/ProfileSetting';
import AccountSetting from './Setting/AccountSetting';

export default function Dashboard() {
  return (
    <>
      <Header />

      <div className='container'>
        <div className='grid grid-cols-12 gap-[48px] pt-[138px]'>
          <div className='col-span-3'>
            <SidebarDashboard />
          </div>
          <div className='col-span-12 2xl:col-span-9'>
            <Routes>
              <Route path='' element={<Overview />} />
              <Route path='/applied-job' element={<AppliedJob />} />
              <Route path='/favorite-job' element={<FavoriteJob />} />
              <Route path='/setting' element={<Setting />}>
                <Route path='' element={<Personal />} />
                <Route path='profile' element={<ProfileSetting />} />
                <Route path='account-setting' element={<AccountSetting />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
