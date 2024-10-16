import React from "react";
import mongo from "../assets/images/mongo.png";
import react from "../assets/images/react.png";
import node from "../assets/images/download.png";
import express from "../assets/images/express.png";
import cplus from "../assets/images/cplus.png";
import java from "../assets/images/java.png";
import python from "../assets/images/python.png";

function Projects() {
  const projectList = [
    {
      id: 1,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: react,
      name: "React",
    },
    {
      id: 3,
      logo: node,
      name: "Node",
    },
    {
      id: 4,
      logo: express,
      name: "Express",
    },
    {
      id: 5,
      logo: cplus,
      name: "C++",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
    {
      id: 7,
      logo: python,
      name: "Python",
    },
  ];

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl my-8 text-center underline">Projects</h1>
      <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-5 z-0 ">
        {projectList.map((items) => (
          <div
            className="rounded-md shadow-md hover:scale-105 transition duration-500 bg-gray-400 pt-5 "
            key={items.id}
          >
            <div className="flex justify-center items-center flex-col">
              <img
                src={items.logo}
                alt={items.name}
                className="h-[120px] w-[120px] rounded-full"
              />
              <h1 className="text-lg py-2">{items.name}</h1>
            </div>
            <p className="text-sm px-4">
              Lorem ipsum dolor sit amet amet nemo distinctio voluptatem labore
              corrupti cum reiciendis dolore dolorum officia.
            </p>
            <div className="justify-around flex my-3">
              <button className="border bg-blue-500 rounded-md p-1 cursor-pointer hover:scale-105 transition duration-500">
                View
              </button>
              <button className="border bg-pink-700 rounded-md p-1 cursor-pointer hover:scale-105 transition duration-500">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
