import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        All Projects
      </h1>
      <h3 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 pb-10">
        React WebApps
      </h3>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 cursor-pointer z-50">
        <ProjectCard
          link="https://attplems.com/"
          src="/ElectionManagementSystem.png"
          title="Election Management System"
          description="The Election Management System is a comprehensive platform designed to streamline and enhance the electoral process. It facilitates voter registration, manages candidate information, and ensures secure, transparent voting and result tabulation. With a user-friendly interface and robust security measures, this system aims to improve the efficiency and integrity of elections."
        />

        <ProjectCard
          link="https://make-my-trip-clone-react-project-2-wan6hnsnhwfn.vercel.app/"
          src="/MakeMyTrip.png"
          title="Make My Trip Clone (E-com WebApp)"
          description="This project is a clone of MakeMyTrip.com, replicating the core functionalities of the popular travel booking website. It allows users to search and book flights, hotels, and holiday packages with ease. Featuring a responsive design and intuitive user interface, this clone provides a seamless experience for planning and managing travel itineraries."
        />
        <ProjectCard
          link="https://beyoung-react-project-1-danoudy0fwwq.vercel.app/"
          src="/BeYoung.png"
          title="BeYoung Clone (E-com WebApp)"
          description="This project is a clone of Beyoung.com, an e-commerce platform specializing in trendy and affordable fashion. It features a user-friendly interface for browsing and purchasing a wide range of clothing and accessories. With seamless navigation, secure payment options, and a responsive design, this clone offers an engaging and convenient shopping experience."
        />
      </div>
      {/* Mobile Apps Section Coming soon */}
      {/* <h3 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 pb-10 pt-10">
        React Native Mobile Apps
      </h3>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 cursor-pointer z-50">
        <ProjectCard
          link="https://attplems.com/"
          src="/ElectionManagementSystem.png"
          title="Election Management System"
          description="The Election Management System is a comprehensive platform designed to streamline and enhance the electoral process. It facilitates voter registration, manages candidate information, and ensures secure, transparent voting and result tabulation. With a user-friendly interface and robust security measures, this system aims to improve the efficiency and integrity of elections."
        />

        <ProjectCard
          link="https://make-my-trip-clone-react-project-2-wan6hnsnhwfn.vercel.app/"
          src="/MakeMyTrip.png"
          title="Make My Trip Clone (E-com WebApp)"
          description="This project is a clone of MakeMyTrip.com, replicating the core functionalities of the popular travel booking website. It allows users to search and book flights, hotels, and holiday packages with ease. Featuring a responsive design and intuitive user interface, this clone provides a seamless experience for planning and managing travel itineraries."
        />
        <ProjectCard
          link="https://beyoung-react-project-1-danoudy0fwwq.vercel.app/"
          src="/BeYoung.png"
          title="BeYoung Clone (E-com WebApp)"
          description="This project is a clone of Beyoung.com, an e-commerce platform specializing in trendy and affordable fashion. It features a user-friendly interface for browsing and purchasing a wide range of clothing and accessories. With seamless navigation, secure payment options, and a responsive design, this clone offers an engaging and convenient shopping experience."
        />
      </div> */}
    </div>
  );
};

export default Projects;
