import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Profile = () => {
  const socialLinks = [
    {
      label: (
        <>
          <FaLinkedin
            size={20}
            className="fill-neutral-50 group-hover:fill-black p-1 transition-colors duration-200"
          />
          LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/kenny-aragon-siahaan-790604280/",
    },
    {
      label: (
        <>
          <SiGithub
            size={20}
            className="fill-neutral-50 group-hover:fill-black transition-colors duration-300"
          />
          Github
        </>
      ),
      href: "https://github.com/KenAragon1",
    },
  ];

  return (
    <section>
      <div className="grid gap-4">
        {/* My Name */}
        <div className="">
          <p className="text-4xl  font-semibold">
            Hey 👋, I&apos;m{" "}
            <span className="relative  after:content-['']   after:absolute after:w-full after:h-3 after:bg-gradient-to-r after:from-red-500 after:to-violet-500 after:left-0 after:top-[1.8rem] after:z-[-1]">
              Kenny Aragon
            </span>
          </p>
          <p className="text-4xl bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent font-semibold">
            Fullstack Developer
          </p>
        </div>

        {/* Social Button */}
        <div className="flex gap-2 items-centers">
          {socialLinks.map((button, index) => (
            <Link
              href={button.href}
              target="_blank"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 group bg-gray-700 rounded hover:bg-gray-100 hover:text-black transition-colors duration-200"
              key={index + 1}
            >
              {button.label}
            </Link>
          ))}
        </div>
        <div className="">
          {" "}
          <p className="text-sm text-gray-400">
            I am Kenny, a dedicated student at Batam State Polytechnic,
            specializing in full-stack development. With a strong foundation in
            both front-end and back-end technologies, I am passionate about
            creating seamless and efficient web applications. I am constantly
            learning and adapting to new technologies to stay ahead in the
            ever-evolving field of web development. Driven by curiosity and a
            love for coding, I am committed to delivering high-quality solutions
            that meet the needs of users and clients alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
