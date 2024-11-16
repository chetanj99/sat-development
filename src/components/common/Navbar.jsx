"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();
  const navbarRef = useRef();
  const url = usePathname();

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [navbarBackground, setNavbarBackground] = useState(url === "/lei-certificate" || url === "/number-converter" ? true : false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    const handleScroll = () => {
      if (url !== "/lei-certificate" && url !== "/number-converter") {
        if (window.scrollY >= 200) {
          setNavbarBackground(true);
        } else {
          setNavbarBackground(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const handleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setIsSidebarActive(false);
  };

  useEffect(() => {
    if (isSidebarActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarActive]);

  return (
    <div
      ref={navbarRef}
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${navbarBackground ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20 min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${isSidebarActive ? `translate-x-0` : "-translate-x-full"
          }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-primary text-white w-[260px] min-h-screen h-full overflow-auto"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className="flex justify-between text-3xl p-2 py-4">
              <Link href="/" className="text-center" onClick={CloseSidebarActive}>
                <img src="/logo.png" alt="Logo" className="h-14 mb-5 ml-4" />
              </Link>
              <div className="mt-2 ml-auto mr-4">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer text-white"
                />
              </div>
            </div>
            <ul className="flex flex-col items-start mx-5 gap-5 pb-5 text-lg font-semibold text-white">
              <li className="pb-1 pt-0.5 w-full px-5 rounded-md hover:text-primary hover:bg-white">
                <Link href="/" onClick={toggleMenu} className="block w-full">
                  Home
                </Link>
              </li>
              <li className="pb-1 pt-0.5 w-full px-5 rounded-md hover:text-primary hover:bg-white">
                <Link href="/services" onClick={toggleMenu} className="block w-full">
                  Services
                </Link>
              </li>
              <li className="pb-1 pt-0.5 w-full px-5 rounded-md hover:text-primary hover:bg-white">
                <Link href="/download" onClick={toggleMenu} className="block w-full">
                  Download
                </Link>
              </li>
              <li className="pb-1 pt-0.5 w-full px-5 block rounded-md hover:text-primary hover:bg-white" onClick={() => handleMobileDropdown("notification")}>
                <span className="cursor-pointer">Notification</span>
                {mobileDropdown === "notification" && (
                  <ul className="bg-white text-black text-sm shadow-lg">
                    <Link
                      href="https://www.dgft.gov.in/CP/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        className="px-4 py-2 hover:bg-primary hover:text-white"
                        onClick={toggleMenu}
                      >
                        DGFT
                      </li>
                    </Link>
                    <Link
                      href="https://foservices.icegate.gov.in/#/services/viewExchangeRate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        className="px-4 py-2 hover:bg-primary hover:text-white"
                        onClick={toggleMenu}
                      >
                        Exchange Rate
                      </li>
                    </Link>
                    <Link
                      href="https://www.incometax.gov.in/iec/foportal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        className="px-4 py-2 hover:bg-primary hover:text-white"
                        onClick={toggleMenu}
                      >
                        Income
                      </li>
                    </Link>
                    <Link
                      href="https://www.gst.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        className="px-4 py-2 hover:bg-primary hover:text-white"
                        onClick={toggleMenu}
                      >
                        GST
                      </li>
                    </Link>
                    <Link
                      href="https://www.fssai.gov.in/notifications.php?notification=notice-for-comments"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li
                        className="px-4 py-2 hover:bg-primary hover:text-white"
                        onClick={toggleMenu}
                      >
                        FSSAI
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
              <li className="pb-1 pt-0.5 w-full px-5 rounded-md hover:text-primary hover:bg-white">
                <Link href="/number-converter" onClick={toggleMenu} className="block w-full">
                  Number Converter
                </Link>
              </li>
              <li className="pb-1 pt-0.5 w-full px-5 rounded-md hover:text-primary hover:bg-white">
                <Link href="/contact" onClick={toggleMenu} className="block w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-between text-white px-8 py-3">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-[64px]" />
        </Link>

        <div className="flex ">
          <ul className="hidden lg:flex items-center gap-10 text-lg font-semibold">
            <li>
              <Link href="/" className={`${url == "/" ? "active" : ""}`}>Home</Link>
            </li>
            <li>
              <Link href="/services" className={`${url == "/services" ? "active" : ""}`}>Services</Link>
            </li>
            <li>
              <Link href="/download" className={`${url == "/download" ? "active" : ""}`}>Download</Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("notification")}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`cursor-pointer`}>Notification</span>
              {dropdown === "notification" && (
                <ul className="absolute left-0 w-48 bg-white text-black text-sm shadow-lg group-hover:block">
                  <Link
                    href="https://www.dgft.gov.in/CP/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-primary hover:text-white">
                      DGFT
                    </li>
                  </Link>
                  <Link
                    href="https://foservices.icegate.gov.in/#/services/viewExchangeRate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-primary hover:text-white">
                      Exchange Rate
                    </li>
                  </Link>
                  <Link
                    href="https://www.incometax.gov.in/iec/foportal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-primary hover:text-white">
                      Income
                    </li>
                  </Link>
                  <Link
                    href="https://www.gst.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-primary hover:text-white">
                      GST
                    </li>
                  </Link>
                  <Link
                    href="https://www.fssai.gov.in/notifications.php?notification=notice-for-comments"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-primary hover:text-white">
                      FSSAI
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <Link href="/number-converter" className={`${url == "/number-converter" ? "active" : ""}`} onClick={toggleMenu}>
                Number Converter
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${url == "/contact" ? "active" : ""}`}>Contact</Link>
            </li>
          </ul>

          <button
            ref={openSidebarButton}
            className="text-3xl block lg:hidden ml-4"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
