import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { BsRouter } from "react-icons/bs";
import Year from "@/assets/choose-us/year-image.png"

const ChooseUs = () => {
    return (
        <section className="bg-lite">
            <div className="my-container">
                <div className="flex gap-10 justify-between">
                  <div className="pr-6">
                   <SectionTitle title="Why choose us" content="People why choose our travel adventure" align="items-start" />
                   <div className="grid grid-cols-2 gap-3">
                        <div className="flex gap-3">
                            <BsRouter className="text-lg lg:text-2xl xl:text-3xl text-my-primary" />
                            <div>
                                <h5 className="text-base lg:text-xl font-medium lg:font-bold">Best Security</h5>
                                <p className="text-sm lg:text-base">We denounce with righteous indignation and dislike.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <BsRouter className="text-lg lg:text-2xl xl:text-3xl text-my-primary" />
                            <div>
                                <h5 className="text-base lg:text-xl font-medium lg:font-bold">Best Security</h5>
                                <p className="text-sm lg:text-base">We denounce with righteous indignation and dislike.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <BsRouter className="text-lg lg:text-2xl xl:text-3xl text-my-primary" />
                            <div>
                                <h5 className="text-base lg:text-xl font-medium lg:font-bold">Best Security</h5>
                                <p className="text-sm lg:text-base">We denounce with righteous indignation and dislike.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <BsRouter className="text-lg lg:text-2xl xl:text-3xl text-my-primary" />
                            <div>
                                <h5 className="text-base lg:text-xl font-medium lg:font-bold">Best Security</h5>
                                <p className="text-sm lg:text-base">We denounce with righteous indignation and dislike.</p>
                            </div>
                        </div>
                   </div>
                  </div>
                  <div className="w-1/2">
                    <Image src={Year} alt="30 year" />
                  </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;