const HotelCard = ({ image, title }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <Image className="rounded-t-lg h-[280px]" src={image} alt="ff" /> */}
      <div className="p-5">
        <p className="text-gray-5 text-sm">Attractions & Museums</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <div className="flex items-center gap-2">
          <p>New York, United States</p>
        </div>
        <p className="text-yellow-00">230 reviews</p>
        <div className="space-x-3 mt-5">
          <span>৳ 670</span>
          <span className="line-through">৳ 670</span>
        </div>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-1"></div>
            <div className="flex items-center gap-1"></div>
          </div>
          <div className="flex items-center gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
