import { useState } from "react";
import { Nav } from "../components";
import { BiMenu, BiX } from "react-icons/bi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between bg-[#F3F2F7] px-6 py-2 drop-shadow-md md:px-24">
      <a href="#">
        <img
          className="w-34 h-28 py-2 transition-all hover:scale-105"
          src="https://w7.pngwing.com/pngs/19/66/png-transparent-logo-brand-building-angle-building-text.png"
          alt=""
        />
      </a>
      <ul className="hidden items-center gap-12 text-base font-semibold xl:flex">
        <Nav urlLink={"#"} text="Home" />
        <Nav urlLink={"#"} text="Empresa" />
        <Nav urlLink={"#"} text="Consorcios" />
        <Nav urlLink={"#"} text="Contacto" />
      </ul>
      <div className="block cursor-pointer bg-[#F3F2F7] text-5xl xl:hidden">
        <BiMenu
          name="menu"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div
        className={`absolute left-0 top-0 flex w-full flex-col items-center gap-6 bg-[#F3F2F7] text-lg font-semibold transition-transform xl:hidden ${
          isMenuOpen
            ? "translate-y-0 transform opacity-100"
            : "translate-y-full transform opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <div className="absolute right-1 top-2 block cursor-pointer bg-[#F3F2F7] text-4xl xl:hidden">
          <BiX
            name="x"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
        <Nav urlLink={"#"} text="Home" />
        <Nav urlLink={"#"} text="Empresa" />
        <Nav urlLink={"#"} text="Consorcios" />
        <Nav urlLink={"#"} text="Contacto" />
      </div>
    </header>
  );
};
