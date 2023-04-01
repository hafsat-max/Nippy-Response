import React, {useState} from "react";
import logo from "../../public/nippy-logo.png";

export const Header = () => {

    const navList = ['Home', 'About us', 'Our services', 'Contact us']
    const [list, setList] = useState(0);

  return (
    <>
      <nav className="flex justify-between items-center px-[30px] py-[20px] m-0 bg-white fixed top-0 w-[100%] z-[2]">
        <div className="max-w-[100%] w-[152px] h-auto  box-border ">
          <img
            src={logo.src}
            alt=""
            className="max-w-[100%] h-auto block w-[50%] "
          />
        </div>

        <ul className="flex  gap-[32px] self-end justify-around">
           {navList.map((item, index) =>(
            <li key={index}>
                {item}
            </li>
           ))
           } 
        </ul>


      </nav>
    </>
  );
};
export default Header;
