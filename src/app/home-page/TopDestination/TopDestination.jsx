import Image from "next/image";
import Nevada from "@/assets/destination/nevada.jpg";
import Los_angeles from "@/assets/destination/los_angeles.jpg";
import California from "@/assets/destination/california.jpg";
import United_states from "@/assets/destination/united_states.jpg";
import Virginia from "@/assets/destination/virginia.jpg";
import San_francisco from "@/assets/destination/san_francisco.jpg";

const TopDestination = () => {
  return (
    <section className="my-container">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
        <div className="relative group items-center justify-center text-center overflow-hidden">
          <Image className="object-cover" src={Nevada} alt="Nevada" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              Nevada
            </h1>
            {/* <p className="text-sm text-white mt-4">Far far away, behind the word mountains, far from the countries Vokalia</p> */}
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image className="object-cover" src={Los_angeles} alt="Los_angeles" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              Los Angeles
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image className="object-cover" src={California} alt="California" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              California
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image
            className="object-cover"
            src={San_francisco}
            alt="San_francisco"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              San Francisco
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image
            className="object-cover"
            src={United_states}
            alt="United_states"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              United States
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image className="object-cover" src={Virginia} alt="Virginia" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              Virginia
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image className="object-cover" src={Nevada} alt="Nevada" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              Nevada
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
        <div className="relative group items-center justify-center overflow-hidden">
          <Image className="object-cover" src={California} alt="California" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out translate-y-[45%] group-hover:translate-y-[1%]">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              California
            </h1>
            <button className="text-sm font-medium uppercase text-my-secondary mt-4">
              view all tours
            </button>
          </div>
          <div className="absolute inset-0 border-my-primary border-b-[5px] -mb-2 group-hover:-mb-0 bottom-0 left-0 right-0 transition-all duration-200"></div>
        </div>
      </div>
    </section>
  );
};

export default TopDestination;
