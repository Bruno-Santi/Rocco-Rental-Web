import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/LOGO-ROCCO.png";
import { reveal as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
const NavBar = () => {
  const [modal, setModal] =
    React.useState(false);
  const handleMenu = () => {
    setModal(!modal);
  };

  return (
    <div className='bg-color1 flex fixed justify-between h-20 w-full border-color2 border-b-xsm z-10'>
      <div className='flex self-center ml-5'>
        <Link
          to='title'
          smooth={true}
          onClick={
            modal ? handleMenu : ""
          }
          duration={700}
        >
          <img
            src={Logo}
            className='w-11 h-11 animate-fade-down animate-ease-in-out mt-2'
            alt='rocco rental logo'
            title='Rocco Rental Logo'
          ></img>
        </Link>
        <section className='text-lg text-color3 font-poppins font-bold ml-4 sm:hidden md:hidden'>
          <p className='font-extrabold text-2xl sm:hidden'>
            Rocco Rental S.R.L.
          </p>
          <p>
            Plataformas y herramientas
          </p>
        </section>
      </div>
      <div className='flex'>
        <div className='self-center mr-5 '>
          <Icon
            icon={
              modal
                ? "ic:outline-close"
                : "material-symbols:menu"
            }
            color={
              modal
                ? "#FCA311"
                : "#d9d9d9"
            }
            width='52'
            height='49'
            onClick={handleMenu}
            className='cursor-pointer text-color2 lg:hidden'
          />
          <div className='text-color3 text-2xl space-x-16 font-poppins md:hidden sm:hidden'>
            <Link
              to='nosotros'
              smooth={true}
              duration={700}
              offset={-50}
            >
              <span className='cursor-pointer hover:text-color2'>
                Nosotros
              </span>
            </Link>
            <Link
              to='productos'
              smooth={true}
              duration={700}
              offset={80}
            >
              <span className='cursor-pointer hover:text-color2'>
                Productos y Servicios
              </span>
            </Link>
            <Link
              to='contacto'
              smooth={true}
              duration={700}
              offset={80}
            >
              <span className='cursor-pointer hover:text-color2'>
                Contacto
              </span>
            </Link>
          </div>
          {modal && (
            <div
              className='w-screen animate-fade-down animate-ease-in-out
            h-fit mt-[17px] bg-color3 bg-opacity-90 backdrop-blur-sm absolute right-0'
            >
              <div className='flex-col ml-6 font-poppins text-2xl text-color1'>
                <p className='py-2 mt-5 cursor-pointer focus:text-color3'>
                  <Link
                    to='nosotros'
                    smooth={true}
                    duration={700}
                    offset={-35}
                    onClick={handleMenu}
                  >
                    Nosotros
                  </Link>
                </p>
                <div className='w-4/5 h-0 border-gray-400 border-xsm'></div>
                <p className='py-2 cursor-pointer'>
                  <Link
                    to='productos'
                    smooth={true}
                    duration={700}
                    offset={-25}
                    onClick={handleMenu}
                  >
                    Productos y
                    Servicios
                  </Link>
                </p>
                <div className='w-3/5 h-0 bg-color3 border-gray-400  border-xsm'></div>

                <p className='py-2 font-bold mb-5 cursor-pointer'>
                  <Link
                    to='contacto'
                    smooth={true}
                    duration={700}
                    offset={-40}
                    onClick={handleMenu}
                  >
                    Contacto
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
