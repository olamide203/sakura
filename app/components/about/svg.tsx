import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";

interface CustomType {
  fill: string;
}

const SVG = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: CustomType) => ({
      pathLength: [0, 1, 1],
      opacity: [0, 1, 1],
      fill: ["#FFFFFF", "#ffffff", custom.fill],
      transition: {
        pathLength: { delay: 0.5, duration: 3.5, type: "spring", bounce: 0 },
        opacity: { delay: 0.5, duration: 1 },
        fill: { delay: 0.5, duration: 1 },
      },
    }),
  };

  return (
    <div className="flex max-w-screen-sm mx-auto my-20 ">
      <AspectRatio ratio={72 / 40}>
        <motion.svg
          className="absolute inset-0"
          viewBox="-12 0 73 41"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            stroke="#F4A261"
            strokeWidth={0.5}
            fill="transparent"
            id="itadori"
            d="M 58.5 40.5
           A 2 2 0 0 0 60.5 38.5
           L 60.5 32.5 A 2 2 0 0 0 58.5 30.5
           L 50.5 30.5 A 2 2 0 0 1 48.5 28.5
           L 48.5 22.5 A 2 2 0 0 1 50.5 20.5
           L 58.5 20.5 A 2 2 0 0 0 60.5 18.5
           L 60.5 12.5 A 2 2 0 0 0 58.5 10.5
           L 50.5 10.5 A 2 2 0 0 0 48.5 12.5
           L 48.5 18.5 A 2 2 0 0 1 46.5 20.5
           L 38.5 20.5 A 2 2 0 0 1 36.5 18.5
           L 36.5 12.5 A 2 2 0 0 0 34.5 10.5
           L 26.5 10.5 A 2 2 0 0 1 24.5 8.5
           L 24.5 2.5 A 2 2 0 0 0 22.5 0.5
           L 14.5 0.5 A 2 2 0 0 0 12.5 2.5
           L 12.5 8.5 A 2 2 0 0 1 10.5 10.5
           L 2.5 10.5 
           M 58.5 40.5 
           L 50.5 40.5 A 2 2 0 0 1 48.5 38.5 
           L 48.5 32.5 A 2 2 0 0 0 46.5 30.5
           L 38.5 30.5 A 2 2 0 0 0 36.5 32.5
           L 36.5 38.5 A 2 2 0 0 1 34.5 40.5
           L 26.5 40.5 A 2 2 0 0 1 24.5 38.5
           L 24.5 32.5 A 2 2 0 0 0 22.5 30.5
           L 14.5 30.5 A 2 2 0 0 1 12.5 28.5
           L 12.5 22.5 A 2 2 0 0 0 10.5 20.5
           L 2.5 20.5 A 2 2 0 0 0 0.5 22.5
           L 0.5 28.5 A 2 2 0 0 1 -1.5 30.5
           L -9.5 30.5 A 2 2 0 0 1 -11.5 28.5
           L -11.5 22.5 A 2 2 0 0 1 -9.5 20.5
           L -1.5 20.5  A 2 2 0 0 0 0.5 18.5
           L 0.5 12.5 A 2 2 0 0 1 2.5 10.5 "
            variants={draw}
            custom={{ fill: "#F4A261" }}
            fillRule="evenodd"
            strokeDasharray="0 1"
          />
          <motion.path
            stroke="#F4A261"
            strokeWidth={0.5}
            fill="transparent"
            d="M 34.5 30.5 A 2 2 0 0 0 36.5 28.5
               L 36.5 22.5 A 2 2 0 0 0 34.5 20.5
               L 26.5 20.5
               M 34.5 30.5 L 26.5 30.5
               A 2 2 0 0 1 24.5 28.5
               L 24.5 22.5 A 2 2 0 0 1 26.5 20.5"
            variants={draw}
            custom={{ fill: "#FFFFFF" }}
            strokeDasharray="0 1"
          />
          <motion.path
            stroke="#F4A261"
            strokeWidth={0.5}
            fill="transparent"
            d="M 22.5 20.5 A 2 2 0 0 0 24.5 18.5
               L 24.5 12.5 A 2 2 0 0 0 22.5 10.5
               L 14.5 10.5
               M 22.5 20.5 L 14.5 20.5
               A 2 2 0 0 1 12.5 18.5
               L 12.5 12.5 A 2 2 0 0 1 14.5 10.5"
            variants={draw}
            custom={{ fill: "#FFFFFF" }}
            strokeDasharray="0 1"
          />
        </motion.svg>
      </AspectRatio>
    </div>
  );
};

export default SVG;
