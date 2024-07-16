import { FaLaravel, FaReact } from "react-icons/fa";
import ProjectCard from "../components/projectCard";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Portofolio() {
  const projects = [
    {
      title: "Djawa Store",
      description:
        "An e-commerce website specializing in selling Laptops and computer's parts.",
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
    },
    {
      title: "Portofolio Website",
      description:
        "a personal website designed to showcase my work, skills, and accomplishments.",
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
