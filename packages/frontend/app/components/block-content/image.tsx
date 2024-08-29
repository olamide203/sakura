import { Root as AspectRatio } from "@radix-ui/react-aspect-ratio";

const Image = ({ value }) => {
  return (
    <div className="w-full my-4 rounded-md overflow-hidden max-w-screen-lg mx-auto">
      <AspectRatio ratio={1} className="">
        <img className="mx-auto object-cover" src="" alt="" loading="lazy" />
      </AspectRatio>
    </div>
  );
};

export default Image;
