import React from "react";
import mongo from "../assets/images/mongo.png";
import react from "../assets/images/react.png";
import node from "../assets/images/download.png";
import cplus from "../assets/images/cplus.png";
import java from "../assets/images/java.png";
import python from "../assets/images/python.png";
import html from "../assets/images/html5.png";
import css from "../assets/images/css3.png";

function Skills() {
    const skillLists = [
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
        {
            id: 8,
            logo: html,
            name: "HTML",
        },
        {
            id: 9,
            logo: css,
            name: "CSS",
        },
    ];
    return (
        <div name="Skill" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <h1 className="text-3xl md:text-4xl my-6 text-center underline">Skills</h1>
            <div className="flex sm:flex-col md:flex-row items-center justify-center md:gap-16 flex-wrap">
                {skillLists.map(({ id, logo, name }) => (
                    <div
                        className="h-[200px] w-[200px] rounded-full flex flex-col justify-center items-center hover:scale-150 transition duration-700 ease-in-out"
                        key={id}
                    >
                        <img className="h-[100px] rounded-full" src={logo} alt={name} />
                        <h1 className="text-center">{name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
