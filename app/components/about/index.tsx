import HeroSVG from "../hero/svg";
import heroImage from "~/assets/hero.png";

const About = () => {
  return (
    <section className="max-w-screen-lg mx-auto flex flex-col gap-10">
      <h2 className="font-mono font-bold text-4xl capitalize">01. About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <p className="text-lg text-neutral-900 font-inter fon-medium self-start py-10">
          I am a graduate of Microbiology with a strong foundation in data
          analysis in epidemiology, which I developed during my service year at
          the Society for Family Health (SFH) Nigeria. I recently completed my
          Master’s in Public Health at the University of Chester, United
          Kingdom, enhancing my skills and confidence. This academic and
          professional journey thus far has inspired me to transition into data
          science. I aim to leverage my expertise to interpret data and make
          evidence-based decisions that improve population health. My background
          uniquely{" "}
        </p>
        <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 max-w-2xl self-center w-full mx-auto lg:mr-0">
          <HeroSVG imageURL={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default About;
