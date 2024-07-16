import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: ReactElement;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
}) => {
  return (
    <div className="overflow-hidden bg-neutral-800 rounded border border-neutral-600  hover:border-gray-400 transition-colors duration-200 flex-1 relative group">
      <div className="relative">
        <Image
          alt="djawa store image"
          src={image}
          width={2}
          height={1}
          layout="responsive"
        />
        <div className="absolute top-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300  w-full h-full"></div>
        <div className="absolute grid gap-2 text-white bottom-0 group-hover:bottom-4 left-4  opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-2xl font-semibold ">{title}</p>
          {techStack}
          <div>
            <Link
              href={""}
              className="border text-xs px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
