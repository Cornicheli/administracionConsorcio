import { useState } from 'react';
import { Nav } from '../components';
import { BiMenu, BiX } from 'react-icons/bi';
import logo from '../../public/logo.png';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[rgba(0,0,0,0.48)] px-6 py-2 drop-shadow-md md:px-24">
            <a href="#">
                <img
                    className="w-34 h-24 py-2 transition-all hover:scale-105"
                    src={logo}
                    alt="Company Logo"
                />
            </a>
            <nav>
                <ul className="hidden items-center gap-8 text-base font-semibold xl:flex">
                    <Nav urlLink={'#'} text="Home" />
                    <Nav urlLink={'#'} text="Empresa" />
                    <Nav urlLink={'#'} text="Contacto" />
                    <Nav urlLink={'#'} text="Consorcios" />
                </ul>
            </nav>
            <button
                className="block cursor-pointer bg-[#F3F2F7] text-5xl xl:hidden"
                aria-label="Open Menu"
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}>
                <BiMenu name="menu" />
            </button>
            <div
                className={`absolute left-0 top-0 flex w-full flex-col items-center gap-6 bg-[#F3F2F7] text-lg font-semibold transition-transform xl:hidden ${
                    isMenuOpen
                        ? 'translate-y-0 transform opacity-100'
                        : 'translate-y-full transform opacity-0'
                }`}
                style={{
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}>
                <button
                    className="absolute right-1 top-2 block cursor-pointer bg-[#F3F2F7] text-4xl xl:hidden"
                    aria-label="Close Menu"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}>
                    <BiX name="x" />
                </button>
                <Nav urlLink={'#'} text="Home" />
                <Nav urlLink={'#'} text="Empresa" />
                <Nav urlLink={'#'} text="Contacto" />
                <Nav urlLink={'#'} text="Consorcios" />
            </div>
        </header>
    );
};
