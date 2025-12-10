import { icons } from "../assets/icons";
import Carousel from "./carousel";

export default function Hero() {
  const InstaIcon = icons.insta;
  const Linkedin = icons.linkedin;
  return (
    <>
      <div className="relative">
        <Carousel />
      </div>
      <div className="absolute bottom-6 right-12 z-40">
        <div className="flex gap-2 justify-center items-center">
          <InstaIcon />
          <Linkedin />
        </div>
      </div>
    </>
  );
}
