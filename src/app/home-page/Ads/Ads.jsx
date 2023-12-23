import Image from "next/image";
import hotelAds from "@/assets/ads/hotel-ads.png";
import airAds from "@/assets/ads/air-ads.png";

const Ads = () => {
    return (
        <section className="my-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 lg:gap-7">
                <div className="overflow-hidden rounded-3xl">
                <Image className="hover:scale-105 duration-[400ms] transition-all" src={hotelAds} alt="hotel ads" />
                </div>
                <div className="overflow-hidden rounded-3xl">
                <Image className="hover:scale-110 duration-[400ms] transition-all" src={airAds} alt="air ads" />
                </div>
            </div>
        </section>
    );
};

export default Ads;