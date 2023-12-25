import Image from "next/image";
import {
  IoArrowForwardOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTimeOutline,
} from "react-icons/io5";

const TourCard = ({ image, title }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image className="rounded-t-lg h-[280px]" src={image} alt="ff" />
      <div className="p-5">
        <p className="text-gray-5 text-sm">Attractions & Museums</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-my-primary" />
          <p>New York, United States</p>
        </div>
        <div className="space-x-3">
          <span>৳ 670</span>
          <span className="line-through">৳ 670</span>
        </div>
        <p className="mt-5">230 reviews</p>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <IoTimeOutline className="text-my-primary" /> <span>3 days</span>
            </div>
            <div className="flex items-center gap-1">
              <IoPeopleOutline className="text-my-primary" /> <span>12</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            Explore <IoArrowForwardOutline className="text-my-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
