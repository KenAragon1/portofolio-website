import {
  SiPhp,
  SiJavascript,
  SiPython,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Skills = () => {
  const iconSize = 35;
  const languages = [
    {
      name: "JavaScript",
      icon: <SiJavascript size={iconSize} />,
    },
    {
      name: "Python",
      icon: <SiPython size={iconSize} />,
    },
    {
      name: "Php",
      icon: <SiPhp size={iconSize} />,
    },
  ];

  const libraries = [
    {
      name: "React",
      icon: <SiReact size={iconSize} />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel size={iconSize} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={iconSize} />,
    },
    {
      name: " MySQL",
      icon: <SiMysql size={iconSize} />,
    },
    {
      name: "Node JS",
      icon: <FaNode size={iconSize} />,
    },
    {
      name: "Express JS",
      icon: <SiExpress size={iconSize} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={iconSize} />,
    },
  ];

  return (
    <section>
      <p className="text-2xl font-semibold uppercase mb-4">Technical Skills</p>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <p className="text-xl font-semibold">Languages</p>
          <div className="grid grid-cols-3 gap-2 items-center justify-center">
            {languages.map((language, index) => (
              <div
                className="bg-gray-700 rounded p-4 h-[8rem] hover:bg-gray-800 transition-colors duration-100"
                key={index + 1}
              >
                <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="mx-auto w-fit mb-4">{language.icon}</div>
                  <p className="text-center text-sm">{language.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-2">Library / Framework</p>
          <div className="grid grid-cols-3 gap-2 items-center justify-center">
            {libraries.map((library, index) => (
              <div
                className="bg-gray-700 rounded p-4 h-[8rem] hover:bg-gray-800 transition-colors duration-100"
                key={index + 1}
              >
                <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="mx-auto w-fit mb-4">{library.icon}</div>
                  <p className="text-center text-sm">{library.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
