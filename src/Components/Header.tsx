import React, {useState} from "react";
import logo from "../../public/nippy-logo.png";
import Modal from "./Drawer";
import Hamburger from "./Hamburger";
import { useDisclosure } from "@mantine/hooks";


export const navList = ['Home', 'About us', 'Our services', 'Contact us']
export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
      <nav className="flex justify-between items-center px-[30px] py-[20px] m-0 bg-white fixed top-0 w-[100%] z-[2] border-bt">
        <div className="max-w-[100%] w-[152px] h-auto  box-border ">
          <img
            src={logo.src}
            alt=""
            className="max-w-[100%] h-auto block w-[50%] "
          />
        </div>

        <ul className="hidden  gap-[32px] self-end justify-around min-[618px]:flex">
           {navList.map((item, index) =>(
            <li key={index}>
                {item}
            </li>
           ))
           } 
        </ul>

        <Hamburger
        openDrawer={open}
        className="hidden max-[618px]:block"
        
        />

      </nav>
        <Modal opened={opened} close={close} />
    </>
  );
};
export default Header;
