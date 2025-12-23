import { icons } from "../assets/icons";
import Carousel from "./Carousel";

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
          <a
            href="https://www.instagram.com/galacaradepala_fotografia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstaIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
      </div>
    </>
  );
}
