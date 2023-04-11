import React from "react";
import Footer from "src/Components/Footer";
import Header from "src/Components/Header";

const contact = () => {
  return (
    <>
      <Header />

      <section className="flex justify-around gap-[30px] mt-[70px] px-[20px] pt-[20px] ">

        <div className="w-[50%]">

          <h3 className=" text-[32px] inherit font-semibold  ">Contact Us</h3>
          <p className="mt-[30px] font-normal text-[20px] text-[#1F1D1D] ">
            Do you have any technical or functional issue to report? Payment
            hassle? Do not hesitate to contact us, our team will get back to you
            right away.
          </p>

          <div className="font-semibold text-[#1F1D1D] mt-[20px]">
            <p> Telephone No: +234 701 459 2427</p>
            <p>+234 704 656 1439</p>
          </div>

          <div className="text-[16px] font-normal mt-[20px]">
          </div>
        </div>


        <div>kkkkkkkkkkkkkkkkkkk</div>
      </section>

      <Footer />
    </>
  );
};

export default contact;
