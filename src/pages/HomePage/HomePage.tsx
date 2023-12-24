import SearchHomePage from '../../components/SearchHomePage';
import FeatureJob from '../../components/FeatureJob';
import PopularCategory from '../../components/PopularCategory';
import TopCompany from '../../components/TopCompany';
import RegisterAccount from '../../components/RegisterAccount';

export default function HomePage() {
  return (
    <>
      <SearchHomePage />
      <FeatureJob />
      <PopularCategory />
      <TopCompany />
      <RegisterAccount />
    </>
  );
}
