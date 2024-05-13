import React from "react";
import {
  FacebookIcon,
  InstagramLogo,
  LinkedInLogo,
  YoutubeLogo
} from "../icons/icons";
import homeImage from "../images/image.png";
import AboutImage from "../images/bg1.png";
import ProductImage from "../images/bg3.png";
import IndustryImage from "../images/bg2.png";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className=" text-white py-8 footer-box"
      style={{
        background:
          location.pathname === "/" || location.pathname === "/home"
            ? ` url(${homeImage})`
            : location.pathname === "/aboutUs"
            ? `url(${AboutImage})`
            : location.pathname === "/Products"
            ? `url(${ProductImage})`
            : location.pathname === "/industry"
            ? `url(${IndustryImage})`
            : location.pathname === "/contactus"
            ? `url(${AboutImage})`
            : ""
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2  sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className=" grid grid-cols-2 items-center justify-center gap-1 sm:flex sm:gap-7">
              <li>
                <a href="#" className="hover:hover-nav">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:hover-nav"></a>
              </li>
              <li>
                <a href="#" className="hover:hover-nav"></a>
              </li>
              <li>
                <a href="#" className="hover:hover-nav"></a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 mt-4">Social Media</h3>
            <ul className="flex space-x-4 items-center justify-center">
              <FacebookIcon />
              <InstagramLogo />
              <YoutubeLogo />
              <LinkedInLogo />
              {/* Add more social media icons as needed */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 mt-1">
              Contact & Support
            </h3>
            <p className="hover:hover-nav">Email: support@example.com</p>
            <p className="hover:hover-nav">Phone: +1 (123) 456-7890</p>
            {/* Add more contact details as needed */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 mt-1">Legal</h3>
            <ul className=" flex flex-row sm:flex-col justify-between">
              <li>
                <a href="#" className="hover:hover-nav">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:hover-nav">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p>
            &copy; 2024 <span className="hover-nav">Your Company</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
