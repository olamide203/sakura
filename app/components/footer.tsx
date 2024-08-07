import { Heart } from "@phosphor-icons/react/Heart";
import { Copyright } from "@phosphor-icons/react/Copyright";
import { Coffee } from "@phosphor-icons/react/Coffee";

const Footer = () => {
  return (
    <section className="my-24 text-base md:text-lg font-inter">
      <p>
        <Copyright className="inline font-semibold" /> 2024, Odunola Atitebi
      </p>
      <p>
        Designed and coded with <Heart weight="fill" className="inline" /> and
        lots of <Coffee className="inline" /> by{" "}
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
