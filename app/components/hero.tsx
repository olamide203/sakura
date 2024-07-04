import hero from "~/assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full max-w-screen-2xl pt-20 mx-auto min-h-screen">
      <div className="relative h-[600px] aspect-square ">
        <svg className="absolute top-0 left-0" viewBox="0 0 100 100">
          <circle cx={95} cy={5} r={4} fill="#F4A261" />
          <path
            fill="#F4A261"
            d="M 1 70
               A 4 4 0 0 1 9 70
               L 9 96 
               A 4 4 0 0 1 1 96
               Z
            "
          />
          <defs>
            <clipPath id="border">
              <path
                id="border_path"
                d="M 7 0
                   L 85 0
                   A 5 5 0 0 1 90 5 
                   A 5 5 0 0 0 95 10
                   A 5 5 0 0 1 100 15 
                   L 100 90 
                   A 10 10 0 0 1 90 100 
                   L 20 100
                   A 10 10 0 0 1 10 90 
                   L 10 70
                   A 5 5 0 0 0 5 65
                   A 5 5 0 0 1 0 60
                   L 0 10 
                   A 10 10 0 0 1 10 0 
                   Z
                "
              />
            </clipPath>
          </defs>
          <use width="100%" height="100%" href="#border_path" fill="#F4A261" />
          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={hero}
            clipPath="url(#border)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
