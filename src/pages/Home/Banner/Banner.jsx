import { GrLocation } from "react-icons/gr";

const Banner = () => {
  return (
    // {/* home */}
    <section className="w-full relative flex items-center justify-center m-auto">
      {/* overlay */}
      <div className="absolute h-full w-full bg-banner top-0 bottom-0 z-[1] mix-blend-hard-light"></div>
      {/* className="h-full object-cover mx-auto w-full" */}
      <video className="absolute h-full w-full top-0 bottom-0 object-cover" src="bannerVid.mp4" type="video/mp4" autoPlay loop muted></video>
      {/* homeContent container */}
      <div className="w-full h-max pt-32 pb-12 px-6 flex gap-y-12 flex-col items-stretch justify-center m-auto text-white z-[100]">
        {/* textDiv */}
        <div className="py-8 px-0">
          {/* small Text */}
          <span className="text-sm uppercase">our packages</span>
          {/* homeTitle */}
          <h1 className="relative text-3xl font-bold">Search Your Holidays</h1>
        </div>
        {/* cardDiv grid */}
        <div className="relative py-8 px-4 bg-white rounded-lg gap-4">
          {/* destinationInput */}
          <div>
            <label className="block text-gray-700 pb-[10px] font-medium text-sm" htmlFor="city">
              Search Your Destination:
            </label>
            {/* input flex */}
            <div className="h-10 py-0 px-4 rounded-full bg-gray-300">
              {/* className="bg-none border-none outline-none w-full text-sm font-medium placeholder:text-sm" */}
              <input type="text" name="text" placeholder="Enter Name Here...." />
              {/* icon */}
              <GrLocation className="text-lg text-gray-800 ml-[10px]" />
            </div>
          </div>

          {/* dateInput */}
          <div>
            <label className="block text-gray-700 pb-[10px] font-medium text-sm" htmlFor="date">
              Select Your Date:
            </label>
            {/* input flex */}
            <div className="h-10 py-0 px-4 rounded-full bg-gray-300">
              <input type="date" name="date" />
            </div>
          </div>

          {/* priceInput */}
          <div>
            {/* label_total flex */}
            <div className="justify-between items-center">
              <label className="block text-gray-700 pb-[10px] font-medium text-sm" htmlFor="price">
                Max Price:
              </label>
              {/* total */}
              <h3 className="text-gray-700 text-lg pb-[10px]">$5000</h3>
            </div>
            {/* input flex */}
            <div className="h-10 py-0 px-4 rounded-full bg-gray-300">
              <input type="range" name="price" max="5000" min="1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
