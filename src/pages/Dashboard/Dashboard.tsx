import Header from '../../components/Header';
import SidebarDashboard from './SidebarDashboard';
import Overview from './Overview/Overview.tsx';
import { Route, Routes } from 'react-router-dom';
import Company from './Company';

export default function Dashboard() {
  return (
    <>
      <Header />

      <div className='container'>
        <div className='grid grid-cols-12 gap-[48px] pt-[138px]'>
          <div className='col-span-3'>
            <SidebarDashboard />
          </div>
          <div className='col-span-9'>
            <Routes>
              <Route path='' element={<Overview />} />
              <Route path='company' element={<Company />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
