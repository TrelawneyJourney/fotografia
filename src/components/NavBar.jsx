import { useEffect, useRef, useState } from "react";
import { icons } from "../assets/icons";
import { navigation } from "../data/Projects";

export default function NavBar() {
  const CrossIcon = icons.cross;
  const MenuIcon = icons.menu;
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const menuRef = useRef();

  // abre y cierra menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  //cierra click afuera
  useEffect(() => {
    const handleClickOut = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOut);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [menuOpen]);

  //fadeOut cross
  const handleClose = () => {
    setFadeOut(true);

    setTimeout(() => {
      setFadeOut(false);
      toggleMenu();
    }, 300);
  };

  return (
    <div>
      <header className="relative">
        <nav className="flex justify-between items-center px-4 fixed inset-x-6 top-12 z-40">
          {/* logo */}
          <div className="text-white font-didat text-3xl">
            <a href="#" className="text-shadow-d text-shadow-black">
              Gala Fotografía
            </a>
          </div>

          {/* hamburger icon */}
          <div>
            <button
              onClick={handleClose}
              className={`transition-opacity duration-300 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* menu desplegable */}
      {menuOpen && (
        <div
          className="absolute inset-0 w-full h-screen bg-gradient-to-b from-neutral-300 to-stone-50 z-50"
          ref={menuRef}
        >
          <div className="flex flex-col px-4 fixed inset-x-6 top-12">
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className={`transition-opacity duration-300 ${
                  fadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                <CrossIcon />
              </button>
            </div>

            {/**Menu */}
            <div className="h-screen flex flex-col justify-around items-center">
              <div className="">
                <ul className="flex flex-col justify-center items-center gap-10 md:flex md:flex-row md:justify-center md:gap-40">
                  {navigation.map((item) => (
                    <li
                      key={item.url}
                      className="text-neutral-500 text-4xl hover:text-neutral-950"
                    >
                      <a href="">{item.titulo}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* condiciones */}
              <div>
                <a href="" className="text-neutral-400 hover:text-neutral-900">
                  terminos y condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
