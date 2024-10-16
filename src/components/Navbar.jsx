import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);

  const navArray = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Skill" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-gray-400 z-50 ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 py-2">
            <img
              className="h-12 w-12 rounded-full"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRN_YLneDIMiLFQizeNOh3Y9bQs4a5nzAoD24ROXw-6zVQ7UZ-l"
              alt=""
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Gauta<span className="text-green-300 text-2xl">m</span>
              <p className="text-sm">
                <ReactTyped
                  className="text-gray-800 font-bold"
                  strings={["Coder", "Programmer", "Developer"]}
                  typeSpeed={50}
                  backSpeed={70}
                  loop={true}
                ></ReactTyped>
              </p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {/* <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Skills</li> */}
              {/* you can also take this value dynamically from any array using map function */}

              {navArray.map((item) => (
                <li
                  className="hover:scale-110 cursor-pointer duration-500 hover:text-red-800  "
                  key={item.id}
                >
                  <Link 
                      activeClass="active" 
                      to={item.text} 
                      spy={true} 
                      smooth={true} 
                      offset={-70} 
                      duration={500}
                      
                    >
                      {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={30} /> : <LuMenu size={30} />}
          </div>
        </div>

        {/* Navbar listing for mobile device */}

        {/*in the below code condition is there that if menu is true then show menu else show nothing */}

        {menu && (
          <div className="md:hidden h-screen w-screen bg-slate-500 flex flex-col justify-center items-center">
            <ul className="flex flex-col space-y-4">
              {navArray.map(({ id, text }) => (
                <li
                  
                  key={id}
                  className="hover:scale-110 cursor-pointer duration-500 font-semibold text-xl"
                >
                  <Link
                    onClick={() => setMenu(!menu)} // Close menu on item click
                    activeClass="active"
                    to={text}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
