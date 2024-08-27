import { Heart } from "@phosphor-icons/react/Heart";
import { Copyright } from "@phosphor-icons/react/Copyright";
import { Coffee } from "@phosphor-icons/react/Coffee";

const Footer = () => {
  return (
    <section className="mt-24 mb-10 text-base md:text-lg font-mono text-center lg:text-start">
      <p>
        <Copyright className="inline font-semibold" /> 2024, Odunola Atitebi
      </p>
      <p>
        Designed and coded with <Heart className="inline" /> and lots of{" "}
        <Coffee className="inline" /> by{" "}
        <a
          href="https://x.com/Olamide_farouq"
          className="underline decoration-[#F4A261]"
          target="_blank"
        >
          @Olamide
        </a>
        .
      </p>
    </section>
  );
};

export default Footer;
