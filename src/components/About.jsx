import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:mt-10 md:px-20">
      <div>
      <h1 className="text-3xl md:text-4xl text-center underline mb-5">About</h1>
        <p className="text-[15px] text-justify">
          As a MERN developer, I possess a robust set of technical skills that
          enable me to build scalable and efficient web applications. My
          expertise includes MongoDB, Express.js, React, Node.js, Version
          Control and more...
        </p>
      </div>
      <div>
        <h1 className="font-bold my-3">Education and Training...</h1>
        <p className="text-[15px] text-justify">
          I hold a Bachelor’s degree in Computer Science from [University Name],
          where I gained a solid foundation in software development principles.
          My education is complemented by certifications in full-stack web
          development and JavaScript algorithms, which have equipped me with the
          necessary skills to excel in my field. I have also completed online
          courses focused on advanced React and MongoDB, keeping my knowledge
          current with industry trends and best practices
        </p>
      </div>
      <div>
        <h1 className="font-bold my-3">Professional Experience...</h1>
        <p className="text-[15px] text-justify">
          In my current role as a MERN Developer at [Company Name], I lead the
          development of full-stack applications that enhance user experience
          and operational efficiency. My responsibilities include: Collaborating
          with cross-functional teams to translate user requirements into
          technical specifications. Developing RESTful APIs and optimizing data
          retrieval processes, resulting in a 30% increase in application
          performance. Conducting code reviews and mentoring junior developers,
          fostering a culture of knowledge sharing and continuous improvement.
          Previously, I interned as a Web Developer at [Company Name], where I
          contributed to front-end development projects using React. This
          experience honed my skills in agile methodologies and enhanced my
          ability to work effectively in a team-oriented environment.
        </p>
      </div>
      <div>
        <h1 className="font-bold my-3">Achievements and Awards...</h1>
        <p className="text-[15px] text-justify">
          I have received recognition for my contributions to the tech
          community, including the "Best Project Award" at [Hackathon/Event
          Name] for developing an innovative MERN application. Additionally, I
          was honored as "Employee of the Month" at [Company Name] for my
          dedication to quality and teamwork. One of my personal projects gained
          significant traction, attracting over 1,000 users within its first
          month of launch. This project showcased my ability to design
          user-centered applications that resonate with real-world needs.
        </p>
      </div>

      <div>
        <h1 className="font-bold my-3">Mission Statement...</h1>
        <p className="text-[15px] text-justify">
          As a dedicated MERN developer, my mission is to create impactful web
          applications that enhance user experiences and drive business success.
          I am committed to lifelong learning and staying abreast of the latest
          technologies to deliver innovative solutions. I believe in the power
          of collaboration and strive to contribute to a positive and dynamic
          team environment where creativity and knowledge thrive.
        </p>
      </div>
    </div>
  );
}

export default About;
