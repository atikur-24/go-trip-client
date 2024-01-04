import HotelCard from "@/components/HotelCard/HotelCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Hotels = () => {
  return (
    <section className="my-container">
      <SectionTitle title={"Hotel Room Booking"} content="Far far away, behind the word mountains" align="items-center" />
      <div>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </section>
  );
};

export default Hotels;
