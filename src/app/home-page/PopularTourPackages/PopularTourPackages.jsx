import SectionTitle from "@/components/SectionTitle";
import TourCard from "@/components/TourCard/TourCard";

const PopularTourPackages = () => {
    return (
        <section className="bg-lite">
            <div className="my-container">
                <SectionTitle title={"Popular Packages"} content="Far far away, behind the word mountains" align="items-center" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <TourCard />
                </div>
            </div>
        </section>
    );
};

export default PopularTourPackages;