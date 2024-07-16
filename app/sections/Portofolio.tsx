import { FaLaravel, FaReact } from "react-icons/fa";
import ProjectCard from "../components/projectCard";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Portofolio() {
  const projects = [
    {
      title: "DJAWA Store",

      techStack: (
        <div className="flex items-center gap-2">
          <div className="relative group">
            <FaLaravel className=" fill-white" size={22} />
          </div>
          <div className="relative group">
            <FaReact className=" fill-white" size={22} />
          </div>

          <div className="relative group">
            <RiTailwindCssFill className=" fill-white" size={22} />
          </div>
        </div>
      ),
      image: "/djawa-store.jpg",
      github: "https://github.com/KenAragon1/DJAWA-Store",
    },
    {
      title: "Portofolio Website",

      techStack: (
        <div className="flex items-center gap-2">
          <div className="relative group">
            <RiNextjsFill className=" fill-white" size={22} />
          </div>
          <div className="relative group">
            <RiTailwindCssFill className=" fill-white" size={22} />
          </div>
        </div>
      ),
      image: "/portofolio.png",
      github: "https://github.com/KenAragon1/portofolio-website",
    },
  ];
  return (
    <section>
      <div>
        <p className=" font-semibold text-neutral-100 text-2xl mb-4">
          Portofolio
        </p>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
