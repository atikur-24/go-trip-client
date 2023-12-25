import Ads from "./home-page/Ads/Ads";
import Banner from "./home-page/Banner/Banner";
import ChooseUs from "./home-page/ChooseUs/ChooseUs";
import PopularTourPackages from "./home-page/PopularTourPackages/PopularTourPackages";
import TopDestination from "./home-page/TopDestination/TopDestination";

export default function Home() {
  return (
    <main>
      <Banner />
      <Ads />
      <TopDestination />
      <PopularTourPackages />
      <ChooseUs />
    </main>
  );
}
