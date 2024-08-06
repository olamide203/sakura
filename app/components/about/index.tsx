import Reveal from "../reveal";
import Title from "../title";

const About = () => {
  return (
    <section className="flex flex-col gap-10 pt-24" id="about">
      <div className="flex flex-col gap-4 text-base md:text-lg text-neutral-900 font-inter fon-medium self-start">
        <Title pre="01">About</Title>
        <Reveal slide className="w-fit">
          <p>
            I am a graduate of Microbiology with a strong foundation in data
            analysis in epidemiology, which I developed during my service year
            at the Society for Family Health (SFH) Nigeria.
          </p>
        </Reveal>
        <Reveal slide className="w-fit">
          <p>
            I recently completed my Master’s in Public Health at the University
            of Chester, United Kingdom, enhancing my skills and confidence.
            <br />
            This academic and professional journey thus far has inspired me to
            transition into data science.
          </p>
        </Reveal>
        <Reveal slide className="w-fit">
          <p>
            I aim to leverage my expertise to interpret data and make
            evidence-based decisions that improve population health. My
            background uniquely positions me to contribute effectively to public
            health by applying advanced data analysis techniques.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
