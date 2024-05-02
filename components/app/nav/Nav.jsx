"use client";

import { navigationMenu } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Nav = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  console.log(path);

  return (
    <>
      <nav className="bg-white">
        <div className="h-[7rem] px-10 md:px-40 flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/images/tedxLogo.png"}
              width={100}
              height={100}
              alt="TEDxFUOYE Logo"
            />
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[1.4rem]">
            {navigationMenu.map((menu) => (
              <Link
                key={menu.name}
                className={`capitalize font-semibold hover:text-primary duration-500 ${
                  path === menu.link ? "text-primary" : "text-secondary"
                }`}
                href={menu.link}
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* cta */}
          <button className="hidden md:block border border-primary px-5 py-2 text-primary text-[1.4rem] rounded-lg">
            Buy Ticket
          </button>

          {/* mobile menu */}
          <div className="">
            {isMenuOpen ? (
              <IoMdClose onClick={toggleMenu} className="w-[30px] h-[30px]" />
            ) : (
              <IoMdMenu onClick={toggleMenu} className="w-[30px] h-[30px]" />
            )}
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      {isMenuOpen && (
        <nav className="bg-primary/20 w-full h-[90vh] p-[24px] flex items-center justify-center">
          <div className="bg-white rounded-3xl p-10 w-full h-fit text-center border border-primary/30">
            <div className="flex flex-col gap-10 items-center">
              {navigationMenu.map((menu) => (
                <Link
                  key={menu.name}
                  className={`capitalize font-medium hover:text-primary duration-500 ${
                    path === menu.link ? "text-primary" : "text-secondary"
                  }`}
                  href={menu.link}
                  onClick={toggleMenu}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
            <button className="border border-primary px-5 py-2 text-primary text-[1.4rem] rounded-lg mt-14">
              Buy Ticket
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
