import React from "react";
import Footer from "src/Components/Footer";
import Header from "src/Components/Header";
import ImageCards from "src/Components/ImageCards";
import InputSection from "src/Components/InputSection";
import ambulance from "../public/ambuCard.png";

const Ambulance = () => {
  return (
    <section className="mt-[70px]">
      <Header />
      <h1 className="text-[#0098DA] font-extrabold leading-[86px] text-[72px] text-center fire-heading pt-[20px]">
        Mental Health
      </h1>
      
      <section className =" flex justify-around items-center px-[30px] mt-[30px] gap-[30px]">
      <InputSection />
      <ImageCards
        subHeading="a Psychologist"
        image={ambulance.src}
        color="#DF181E"
      />
      </section>
      <Footer />
    </section>
  );
};

export default Ambulance;
