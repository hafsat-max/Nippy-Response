import React from "react";
import Footer from "src/Components/Footer";
import Header from "src/Components/Header";

const contact = () => {
  return (
    <>
      <Header />

      <section className="flex justify-around gap-[30px] mt-[70px] px-[20px] pt-[20px] bg-white contact-flex">

        <div >
          <h3 className=" text-[32px] inherit font-semibold centered ">Contact Us</h3>
          <p className="mt-[30px] font-normal text-[20px] text-[#1F1D1D] centered">
            Do you have any technical or functional issue to report? Payment
            hassle? Do not hesitate to contact us, our team will get back to you
            right away.
          </p>

          <div className="font-semibold text-[#1F1D1D] mt-[20px] centered">
            <p> Telephone No: +234 701 459 2427</p>
            <p>+234 704 656 1439</p>
          </div>

          <div className="text-[16px] font-normal mt-[20px] centered">
            <p>
              <b>Email Address</b> <br />
              nippyresponse@gmail.com <br />
              hafsahbusari69@gmail.com
            </p>
          </div>

          <div className="mt-[70px] centered">
            <p className="text-[#1F1D1D] text-[16px] leading-[19px]">Take a look at our FAQs, your answer may be right there!</p>
            <p className="text-[#FD568A] text-[18px] leading-[24px]">Access the FAQs</p>
          </div>
        </div>

        <div className="centered">
          <h3 className="text-[#1F1D1D]  text-[24px] font-semibold ">We will respond as quickly as possible</h3>

          <div className="mt-[30px]">

              {/* Email address */}
              <figure>
                <label htmlFor="" className="text-[14px] leading-[22px]">Email address</label><br />
                <textarea name="" id="" cols={40} rows={2} className="bg-[#F7F7F7] rounded-[10px] border-[1px solid rgba(0, 0, 0, 0.5)]"></textarea>
                {/* 1px solid rgba(0, 0, 0, 0.5) */}
              </figure>
              
              {/* Subject */}
              <figure className="mt-[20px]">
                <label htmlFor="" className="text-[14px] leading-[22px]">Subject</label><br />
                <textarea name="" id="" cols={40} rows={2} className="bg-[#F7F7F7] rounded-[10px] border-[1px solid rgba(0, 0, 0, 0.5)]"></textarea>
                {/* 1px solid rgba(0, 0, 0, 0.5) */}
              </figure>

              {/* Feedback */}
              <figure className="mt-[20px]">
                <label htmlFor="" className="text-[14px] leading-[22px]">Feedback</label><br />
                <textarea name="" id="" cols={40} rows={6} className="bg-[#F7F7F7] rounded-[10px] border-[1px solid rgba(0, 0, 0, 0.5)]"></textarea>
                {/* 1px solid rgba(0, 0, 0, 0.5) */}
              </figure>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default contact;
