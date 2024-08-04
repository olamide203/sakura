import HeroSVG from "./svg";
import heroImage from "~/assets/hero.png";
import Reveal from "../reveal";

const Aside = () => {
  return (
    <section className="flex items-center mx-auto lg:h-screen max-w-lg lg:max-w-full">
      <Reveal className="w-full">
        <HeroSVG imageURL={heroImage} />
      </Reveal>
    </section>
  );
};

export default Aside;
