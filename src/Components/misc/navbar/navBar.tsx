import React, { useState, CSSProperties, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./styles.module.css";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full ">
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="menu border-b  flex md:items-center px-12 bg-white justify-between pb-0 p-4 shadow-lg md:pb-4 w-full">
        <div className="flex items-center justify-between mb-4  md:mb-0">
          <a className="flex justify-start w-2/3 gap-2 h-16 no-underline text-grey-darkest  hover:text-black" href="#">
            <img src="./images/lgi.png" alt="" className=" h-full flex object-contain" />
            <img src="./images/txlg.png" alt="" className=" h-full flex object-contain p-2" />
          </a>

          <a className="text-black hover:text-orange md:hidden font-bold" href="#">
            <i className="fa fa-2x fa-bars"></i>
          </a>
        </div>
        <nav className="hidden lg:flex  md:grid">
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Products
              </a>
            </li>
            <li className="md:ml-4">
              <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                About
              </a>
            </li>
            <li className="md:ml-4">
              <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex md:hidden lg:hidden">
          <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)} id="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="flex md:hidden menu  w-full m-0">
        <motion.ul
          id="ul"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(0% 0% 90% 0% round 0px)",
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.5,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li id="li" variants={itemVariants}>
            Item 1{" "}
          </motion.li>
          <motion.li id="li" variants={itemVariants}>
            Item 2{" "}
          </motion.li>
          <motion.li id="li" variants={itemVariants}>
            Item 3{" "}
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default NavBar;
