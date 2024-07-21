import React from "react";
import GeoLabsLogo from "../assets/GeoLabs.png";
import { BiLogoFacebook } from "react-icons/bi";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container mx-auto py-16">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 justify-center  max-w-[340px]">
            <div className="flex items-center gap-2">
              <img src={GeoLabsLogo} alt="GeoLabs" />
              <p className="text-[20px] font-bold">GEOLABS</p>
            </div>
            <p className="text-[16px] my-4 font-semibold text-[#4F5665]">
              Geolabs{" "}
              <span className="font-normal">
                is a private virtual network that has unique features and has
                high security.
              </span>
            </p>
            <div className="flex gap-4 my-4">
              <button className="bg-white p-2 rounded-full shadow">
                <BiLogoFacebook size={20} color={"#2161D5"} />
              </button>
              <button className="bg-white p-2 rounded-full shadow">
                <FaTwitter size={20} color={"#2161D5"} />
              </button>
              <button className="bg-white p-2 rounded-full shadow">
                <ImInstagram size={20} color={"#2161D5"} />
              </button>
            </div>
            <p className="text-[16px] font-semibold text-[#AFB5C0]">
              ©2020EBDESK
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-8 w-full mt-8 lg:mt-0 lg:max-w-[600px]">
            <div className="flex flex-col">
              <p className="font-bold mb-4">Product</p>
              <a href="#" className="text-[#4F5665] mb-2">
                Download
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Pricing
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Locations
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Server
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Countries
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Blog
              </a>
            </div>

            <div className="flex flex-col">
              <p className="font-bold mb-4">Engage</p>
              <a href="#" className="text-[#4F5665] mb-2">
                Geolabs ?
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                FAQ
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Tutorials
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                About Us
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Privacy Policy
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Terms of Service
              </a>
            </div>

            <div className="flex flex-col">
              <p className="font-bold mb-4">Earn Money</p>
              <a href="#" className="text-[#4F5665] mb-2">
                Affiliate
              </a>
              <a href="#" className="text-[#4F5665] mb-2">
                Become Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
