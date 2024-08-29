import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { loader } from "~/routes/_index";

const HeroSVG: React.FC = () => {
  const [isLoaded, setIsLoadded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoadded(true);
    };
    image.src = mainImage.asset.url;
  }, []);

  const { mainImage } = useLoaderData<typeof loader>();
  return (
    <div className="relative w-full">
      <AspectRatio ratio={1}>
        <svg className="absolute top-0 left-0" viewBox="0 0 100 100">
          <defs>
            <clipPath id="border">
              <path
                id="border_path"
                d="M 12 0
                   L 82 0
                   A 6 6 0 0 1 88 6 
                   A 6 6 0 0 0 94 12
                   A 6 6 0 0 1 100 18 
                   L 100 88 
                   A 12 12 0 0 1 88 100 
                   L 24 100
                   A 12 12 0 0 1 12 88 
                   L 12 70
                   A 6 6 0 0 0 6 64
                   A 6 6 0 0 1 0 58
                   L 0 12 
                   A 12 12 0 0 1 12 0 
                   Z
                   M 1 70
                   A 5 5 0 0 1 11 70
                   L 11 95 
                   A 5 5 0 0 1 1 95
                   Z
                   M 94,1 
                   A 5 5 0 0 1 99 6 
                   A 5 5 0 0 1 94 11 
                   A 5 5 0 0 1 89 6 
                   A 5 5 0 0 1 94 1 Z
                "
              />
            </clipPath>
          </defs>
          <use width="100%" height="100%" href="#border_path" fill="#F4A261" />
          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={
              isLoaded ? mainImage.asset.url : mainImage.asset.metadata.lqip
            }
            clipPath="url(#border)"
          />
        </svg>
      </AspectRatio>
    </div>
  );
};

export default HeroSVG;
