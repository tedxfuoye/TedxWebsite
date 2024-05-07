import { footerLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 px-10 md:px-40 py-10 gradient-background">
      <div className="flex flex-col gap-20 md:gap-40">
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 items-start justify-between">
          <div className="mt-1 max-w-md">
            <Image
              src={"/images/tedxLogo.png"}
              width={119}
              height={32}
              alt="TEDxFUOYE logo"
              className="mb-3"
            />
            <h6 className="text-[16px] text-black font-bold mb-2">
              Ideas Worth Spreading
            </h6>
            <p className="text-secondary font-medium text-[14px] text-justify">
              Let&#39;s create a world where ideas know no bounds and where each
              voice has the power to shape a brighter future.
            </p>
          </div>

          <div className="flex items-start md:gap-40 justify-between w-full md:w-fit">
            {footerLinks.map((i, index) => (
              <div key={index}>
                <h6 className="text-[16px] text-primary font-bold mb-2">
                  {i.category}
                </h6>
                <ul>
                  {i.links.map((links) => (
                    <li>
                      <Link
                        href={links.link}
                        className="text-secondary hover:text-primary font-medium text-[14px] capitalize"
                      >
                        {links.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <hr />
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-10">
            <p className="font-bold text-[14px] text-primary">
              Copyright 2024 TEDx event. All Right Reserved
            </p>
            <div className="flex items-center gap-10">
              <MdFacebook />
              <MdFacebook />
              <MdFacebook />
              <MdFacebook />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
