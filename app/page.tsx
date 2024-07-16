import Portofolio from "./sections/Portofolio";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <hr className="border-gray-500 my-[4rem]" />
      <Portofolio />
      <hr className="border-gray-500 my-[4rem]" />
      <Skills />
      <hr className="border-gray-500 my-[4rem]" />
    </>
  );
}
