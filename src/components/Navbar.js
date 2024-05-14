import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";

import { CaretDown, CaretUp, CloseBtn, Hamburger } from "../icons/icons";
const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [showdrop, setShowdrop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` footer-box fixed z-50 bg-transparent w-[80%] rounded-full  mx-auto`}
    >
      <nav
        className={`${
          scrollY > 0
            ? "white hover:text-blue-500 w-[79%] rounded-full  left-24 lg:left-32  mt-6 shadow-2xl"
            : "black"
        }  fixed z-50 w-[100%]  `}
      >
        <div
          className="flex items-center justify-between text-black bg-no-repeat bg-cover l"
          style={{
            background:
              'url("https://cdn.prod.website-files.com/624b06e1de671ba9e564fc19/658333067f03be832b45cb09_epcKmzT7raQUR63mScyvqkkdVyiIMinl1CJmwKQ76f0zTOESA-out-0.png")',
            backgroundSize: "cover"
          }}
        >
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png"
              alt="Logo"
              className="h-20 w-20 mr-2"
              crossOrigin="anonymous"
            />
          </div>
          <div
            className={`hidden md:flex items-center space-x-8 pr-10 ${
              scrollY > 0 ? "space-x-3" : "space-x-5"
            }`}
          >
            <NavLink
              to="/"
              className={`p-2 rounded-md text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/");
                setShowdrop(false);
              }}
              isactive={() =>
                location.pathname === "/" || location.pathname === "/home"
              }
              style={{
                color: location.pathname === "/" ? "#240ada" : "inherit",
                background: location.pathname === "/" ? "#ffff" : "inherit",
                fontWeight: location.pathname === "/" ? "700" : "inherit"
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={` p-2 rounded-md  text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              
              onClick={() => {
                navigate("/aboutUs");
                setShowdrop(false);
              }}
              isactive={() => location.pathname === "/aboutUs"}
              style={{
                color: location.pathname === "/aboutUs" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/aboutUs" ? "#ffff" : "inherit",
                fontWeight: location.pathname === "/aboutUs" ? "700" : "inherit"
              }}
            >
              About Us
            </NavLink>
            <a
              className={`flex gap-1 relative  hover:hover-nav cursor-pointer transition-all`}
              style={{
                color:
                  location.pathname === "/Products" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/Products" ? "#ffff" : "inherit",
                fontWeight:
                  location.pathname === "/Products" ? "700" : "inherit"
              }}
              onClick={() => setShowdrop(!showdrop)}
            >
              Products{showdrop ? <CaretUp /> : <CaretDown />}
              {showdrop && (
                <div className="bg-white absolute top-8  px-5  flex flex-col gap-5 py-3 rounded transition-all shadow-2xl">
                  <div className="bg-transparent text-black  flex flex-col gap-2 w-52 text-lg">
                    <NavLink
                      to="/Products/AIVoice"
                      className={` relative text-${
                        scrollY > 0 ? "white hover:text-blue-500" : "black"
                      } hover:hover-nav`}
                      isactive={() => location.pathname === "/Products/AIVoice"}
                      style={{
                        color:
                          location.pathname === "/Products/AIVoice"
                            ? "#240ada"
                            : "inherit"
                      }}
                    >
                      AI Voice
                    </NavLink>
                    <NavLink
                      to="/Products/AIChat"
                      className={` relative text-${
                        scrollY > 0 ? "white hover:text-blue-500" : "black"
                      } hover:hover-nav`}
                      isactive={() => location.pathname === "/Products/AIChat"}
                      style={{
                        color:
                          location.pathname === "/Products/AIChat"
                            ? "#240ada"
                            : "inherit"
                      }}
                    >
                      AI Chat
                    </NavLink>
                  </div>
                </div>
              )}
            </a>
            <NavLink
              to="/industry"
              className={`p-2 rounded-md text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/industry");
                setShowdrop(false);
              }}
            
              isactive={() => location.pathname === "/industry"}
              style={{
                color:
                  location.pathname === "/industry" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/industry" ? "#ffff" : "inherit",
                fontWeight:
                  location.pathname === "/industry" ? "700" : "inherit"
              }}
            >
              Industry
            </NavLink>
            <NavLink
              to="/contactus"
              className={`p-2 rounded-md text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/industry");
                setShowdrop(false);
              }}
              isactive={() => location.pathname === "/contactus"}
              style={{
                color:
                  location.pathname === "/contactus" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/contactus" ? "#ffff" : "inherit",
                fontWeight:
                  location.pathname === "/contactus" ? "700" : "inherit"
              }}
            >
              Contact Us
            </NavLink>
            <button
              className="bg-green-500 px-5 py-1 rounded-md text-white"
              onClick={() => navigate("/getStarted")}
            >
              Login
            </button>
            <button
              className="bg-blue-500 px-5 py-1 rounded-md text-white"
              onClick={() => navigate("/freetrial")}
            >
              Start for free
            </button>
            <button
              className="bg-blue-500 px-5 py-1 rounded-md text-white"
              onClick={() => navigate("/scheduleDemo")}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </nav>
      <div className="fixed top-7 right-3 z-50 md:hidden">
        {isHidden ? (
          <div onClick={() => setIsHidden(!isHidden)}>
            <Hamburger />
          </div>
        ) : (
          <div onClick={() => setIsHidden(!isHidden)}>
            <CloseBtn />
          </div>
        )}
      </div>
      <div
        id="hiddenLinks"
        className={`md:hidden  bg-white fixed w-1/4 h-fit bg-cover bg-center text-black rounded-md top-20 flex flex-col right-0 gap-4 py-7 custom-transition ${
          isHidden ? "hidden" : "block"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => navigate("/")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/" ? "text-blue-900" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          onClick={() => navigate("/aboutUs")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/aboutUs" ? "text-blue-900" : ""
          }`}
        >
          About US
        </NavLink>

        <a
          className={`flex gap-1 justify-center text-xl  hover:hover-nav cursor-pointer items-center transition-all`}
          style={{
            color: location.pathname === "/Products" ? "#240ada" : "inherit"
          }}
          onClick={() => setShowdrop(!showdrop)}
        >
          Products{showdrop ? <CaretUp /> : <CaretDown />}
        </a>
        {showdrop && (
          <div className="  w-36 flex flex-col gap-5 py-3 rounded transition-all">
            <div className="bg-gray-100 text-black shadow-2xl  flex flex-col gap-5 w-52 text-lg">
              <NavLink
                to="/Products/AIVoice"
                className={` relative text-${
                  scrollY > 0 ? "white hover:text-blue-500" : "black"
                } hover:hover-nav`}
                isactive={() => location.pathname === "/Products/AIVoice"}
                style={{
                  color:
                    location.pathname === "/Products/AIVoice"
                      ? "#240ada"
                      : "inherit"
                }}
              >
                AI Voice
              </NavLink>
              <NavLink
                to="/Products/AIChat"
                className={` relative text-${
                  scrollY > 0 ? "white hover:text-blue-500" : "black"
                } hover:hover-nav`}
                isactive={() => location.pathname === "/Products/AIChat"}
                style={{
                  color:
                    location.pathname === "/Products/AIChat"
                      ? "#240ada"
                      : "inherit"
                }}
              >
                AI Chat
              </NavLink>
            </div>
          </div>
        )}
        <NavLink
          to="/industry"
          onClick={() => navigate("/industry")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-900" : ""
          }`}
        >
          Industry
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={() => navigate("/contactus")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-900" : ""
          }`}
        >
          Contact Us
        </NavLink>

        {/* Add Log in button or any other links */}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
