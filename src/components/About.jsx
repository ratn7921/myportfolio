import { useState } from "react";
import BannerImage from "../assets/6644b34c91f57f8d40a4eaa94e3cb797 - Copy.png";

const About = () => {
  const [data, setData] = useState({
    image: BannerImage,
    title: "Java Developer & Android Developer",
    desc1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eum enim impedit, minima autem fugit aliquam ea dolorem, soluta facilis facere provident reiciendis, magnam at? Porro cumque soluta ut facilis`,
    desc2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eum enim impedit, minima autem fugit aliquam ea dolorem, soluta facilis facere provident reiciendis, magnam at? Porro cumque soluta ut facili`,
    actionButton: {
      title: "Read more...",
      link: '/readmore',
    },
  });

  return (
    <div className="main-container py-16">
      <h1 className="text-4xl text-center font-light">About Me</h1>
      <div className="main-box flex">
        {/* Image container */}
        <div className="w-full mt-6 flex justify-center">
          <img
            className="w-10/12 rounded-ee-full"
            src={data.image}
            alt="Ratnakar"
          />
        </div>

        {/* Text container */}
        <div className="w-full flex justify-center">
          <div className="space-y-5 w-2/3">
            <h1 className="text-5xl font-light">{data.title}</h1>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
            <a href={data.actionButton.link}>
              <button className="mt-4 px-3 py-2 bg-emerald-400 shadow-transparent rounded-full">
                {data.actionButton.title}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
