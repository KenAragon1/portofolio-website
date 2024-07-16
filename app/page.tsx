import Portofolio from "./sections/Portofolio";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <hr />
      <Portofolio />
      <hr />
      <Skills />
      <hr />
    </>
  );
}
