import HeroSVG from "./svg";
import Reveal from "../reveal";

const Aside = () => {
  return (
    <section className="flex items-center mx-auto lg:h-screen max-w-lg lg:max-w-full">
      <Reveal className="w-full">
        <HeroSVG />
      </Reveal>
    </section>
  );
};

export default Aside;
