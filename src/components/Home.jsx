import React from "react";

import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import MyImage from "../assets/dp2.jpg";

function Home() {
  return (
    <>
      <div name='Home' className="max-w-screen-2xl container mx-auto px-4 md:mt-10 md:px-20 my-20">
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="md:w-1/2 mt-12 md:mt-36 order-2 md:order-1">
            <span>Welcome In My Feed </span>
            <div className="flex flex-col  space-x-1 text-2xl md:text-3xl">
              <h1>
                Hello, I'm a <span> </span>
                {/* <span className='text-red-700 font-bold'> Developer</span> */}
                {/* actually now we are making it changeable so we import ReactTyped taken from external library */}
                <ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Coder", "Programmer", "Developer"]}
                  typeSpeed={50}
                  backSpeed={70}
                  loop={true}
                ></ReactTyped>
              </h1>

              <p className="text-[15px] leading-6 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                quam ipsum commodi expedita ipsa dolorem optio placeat culpa ab
                provident ullam beatae non et consequuntur, quibusdam
                voluptatibus. Enim, quia sint?
              </p>
              <div className="flex flex-col justify-center space-y-3 items-center md:flex-row md:justify-around my-4">
                <div>
                  <h1 className="text-xl mb-2 text-center">Available on</h1>
                  <div className="flex text-xl gap-3 md:text-2xl items-center justify-between cursor-pointer">
                    <a
                      className="hover:scale-125 transition duration-500"
                      href="https://www.linkedin.com/login"
                      target=" _blank"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      className="hover:scale-125 transition duration-500"
                      href="https://www.facebook.com/login/"
                      target=" _blank"
                    >
                      <FaFacebookSquare />
                    </a>
                    <a
                      className="hover:scale-125 transition duration-500"
                      href="https://www.instagram.com/accounts/login/?hl=en"
                      target=" _blank"
                    >
                      <FaSquareInstagram />
                    </a>
                    <a
                      className="hover:scale-125 transition duration-500"
                      href="https://github.com/login"
                      target=" _blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl text-center mb-2 ">
                    Currently Working on
                  </h1>
                  <ul className="flex text-xl gap-3 md:text-2xl items-center justify-center cursor-pointer">
                    <li className="hover:scale-125 transition duration-500">
                      <TbBrandReact />
                    </li>
                    <li className="hover:scale-125 transition duration-500">
                      <LiaNode />
                    </li>
                    <li className="hover:scale-125 transition duration-500">
                      <SiMongodb />
                    </li>
                    <li className="hover:scale-125 transition duration-500">
                      <SiExpress />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-14 order-1 flex justify-center items-center">
            <img
              src={MyImage}
              alt="Profile pic"
              className="rounded-full h-[400px] w-[400px] "
            />
          </div>
        </div>
      </div>
      {/* <hr className="border-dashed border-neutral-800" /> */} 
    </>
  );
}

export default Home;
