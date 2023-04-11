import React from "react";
import CardLists from "src/Components/CardLists";
import Footer from "src/Components/Footer";
import Header from "src/Components/Header";
import ImageCards from "src/Components/ImageCards";
import InputSection from "src/Components/InputSection";
import policeCard from "../public/police-card.png";

const Security= () => {
  return (
    <section className="mt-[70px]">
      <Header />
      <h1 className="text-[#808080;] font-extrabold leading-[86px] text-[72px] text-center fire-heading pt-[20px]">
        Security Service
      </h1>
      
      <section className =" flex justify-around items-center px-[30px] mt-[30px] gap-[30px]">
      <InputSection />
      <ImageCards
        subHeading="Police Station"
        image={policeCard.src}
        color="#DF181E"
      />
      </section>

      <CardLists />
      <Footer />
    </section>
  );
};

export default Security;
