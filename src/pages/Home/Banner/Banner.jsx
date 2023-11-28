import { LocationOnOutlined } from "@mui/icons-material";

const Banner = () => {
  return (
    // {/* home */}
    <section className="w-full relative flex items-center justify-center m-auto">
      {/* overlay */}
      <div className="absolute h-full w-full bg-banner top-0 bottom-0 z-10 mix-blend-hard-light"></div>
      {/* className="h-full object-cover mx-auto w-full" */}
      <video className="absolute h-full w-full top-0 bottom-0 object-cover" src="bannerVid.mp4" type="video/mp4" autoPlay loop muted></video>
      {/* homeContent container */}
      <div className="w-full h-max pt-32 pb-12 px-6 flex gap-y-12 flex-col items-stretch justify-center m-auto text-white z-10">
        {/* textDive */}
        <div className="py-8 px-0">
          {/* small Text */}
          <span className="text-sm bg-none border-none outline-none text w-full-sm font-medium placeholder:text-sm">over packages</span>
          {/* homeTitle */}
          <h1 className="relative text-4xl font-bold">Search Your Holidays</h1>
        </div>
        {/* cardDiv grid */}
        <div className="relative py-8 px-4 bg-white rounded-lg gap-4">
          {/* destinationInput */}
          <div>
            <label className="block text-gray-700 pb-3 font-medium text-sm" htmlFor="city">
              Search Your Destination:
            </label>
            {/* input flex */}
            <div className="h-10 py-0 px-4 rounded-full bg-gray-300">
              <input className="bg-none border-none outline-none w-full text-sm font-medium placeholder:text-sm" type="text" name="text" placeholder="Enter Name Here" />
              {/* icon */}
              <LocationOnOutlined />
            </div>
          </div>

          {/* dateInput */}
          <div>
            <label className="block text-gray-700 pb-3 font-medium text-sm" htmlFor="date">
              Select Your Date:
            </label>
            {/* input flex */}
            <div className="h-10 py-0 px-4 rounded-full bg-gray-300">
              <input className="bg-none border-none outline-none w-full text-sm font-medium placeholder:text-sm" type="date" name="date" />
            </div>
          </div>

          {/* priceInput */}
          <div>
            {/* label_total flex */}
            <div className="justify-between items-center">
              <label className="block text-gray-700 pb-3 font-medium text-sm" htmlFor="price">
                Max Price:
              </label>
              {/* total */}
              <h3 className="text-gray-700 text-lg pb-3">$5000</h3>
            </div>
            {/* input flex */}
            <div className="h-10 py-0 px-4 rounded-full bg-gray-300">
              <input className="bg-none border-none outline-none w-full text-sm font-medium placeholder:text-sm" type="range" name="price" max="5000" min="1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
