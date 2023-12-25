import SectionTitle from "@/components/SectionTitle";
import TourCard from "@/components/TourCard/TourCard";
import ff from "@/assets/destination/photo-1.jpg";
import ff2 from "@/assets/destination/photo-2.jpeg";
import ff3 from "@/assets/destination/photo-3.jpg";

const PopularTourPackages = () => {
  return (
    <section className="bg-lite">
      <div className="my-container">
        <SectionTitle
          title={"Popular Packages"}
          content="Far far away, behind the word mountains"
          align="items-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <TourCard image={ff} title="Man Standing on a Rock" />
          <TourCard image={ff2} title="Man Standing on a Rock" />
          <TourCard image={ff3} title="Man Standing on a Rock" />
        </div>
      </div>
    </section>
  );
};

export default PopularTourPackages;
