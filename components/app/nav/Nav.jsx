"use client";

import { navigationMenu } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  console.log(path);

  return (
    <nav className="bg-white">
      <div className="h-[7rem] px-20 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/tedxLogo.png"}
            width={100}
            height={100}
            alt="TEDxFUOYE Logo"
          />
        </Link>
        <div className="flex items-center gap-10 text-[1.4rem]">
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
        <button className="border border-primary px-5 py-2 text-primary text-[1.4rem] rounded-lg">
          Buy Ticket
        </button>
      </div>
    </nav>
  );
};

export default Nav;
