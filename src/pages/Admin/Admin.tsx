import Header from '../../components/Header';
import SideBarAdmin from './SideBarAdmin';
import { Route, Routes } from 'react-router-dom';
import OverviewAdmin from './OverviewAdmin';
import CompanyAdmin from './CompanyAdmin';
import UserAdmin from './UserAdmin';
import JobAdmin from './JobAdmin';
import PermissionAdmin from './PermissionAdmin';
import RolesAdmin from './RolesAdmin';
import SubscriberAdmin from './SubscriberAdmin';
import CategoryAdmin from './CategoryAdmin';
import ResumeAdmin from './ResumeAdmin';
import InvitationAdmin from './InvitationAdmin';

export default function Admin() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='grid grid-cols-12 gap-[48px] pt-[138px]'>
          <div className='col-span-3'>
            <SideBarAdmin />
          </div>
          <div className='col-span-12 2xl:col-span-9'>
            <Routes>
              <Route path='' element={<OverviewAdmin />} />
              <Route path='/company' element={<CompanyAdmin />} />
              <Route path='/user' element={<UserAdmin />} />
              <Route path='/job' element={<JobAdmin />} />
              <Route path='/permission' element={<PermissionAdmin />} />
              <Route path='/role' element={<RolesAdmin />} />
              <Route path='/subscriber' element={<SubscriberAdmin />} />
              <Route path='/category' element={<CategoryAdmin />} />
              <Route path='/resume' element={<ResumeAdmin />} />
              <Route path='/invitation' element={<InvitationAdmin />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
