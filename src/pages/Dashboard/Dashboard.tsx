import Header from '../../components/Header';
import SidebarDashboard from './SidebarDashboard';
import Overview from './Overview/Overview.tsx';
import { Route, Routes } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import FavoriteJob from './FavoriteJob';
import MyAccountSetting from './MyAccountSetting';
import Personal from './MyAccountSetting/Personal';
import ProfileSetting from './MyAccountSetting/ProfileSetting';
import AccountSetting from './MyAccountSetting/AccountSetting';
import PostAJob from './PostAJob';
import MyJobs from './MyJobs';
import MyCompanyInfo from './MyCompanyInfo';
import CompanyInfo from './MyCompanyInfo/CompanyInfo';
import FoundingInformation from './MyCompanyInfo/FoundingInformation';

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
              <Route path='/post-job' element={<PostAJob />} />
              <Route path='/my-jobs' element={<MyJobs />} />
              <Route path='/my-company' element={<MyCompanyInfo />}>
                <Route path='' element={<CompanyInfo />} />
                <Route path='founding-info' element={<FoundingInformation />} />
              </Route>
              <Route path='/my-account-setting' element={<MyAccountSetting />}>
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
