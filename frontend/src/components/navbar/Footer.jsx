import React from "react";
import "../styles/navbar.css";
import call from "../../assets/callfoot.svg";
import mail from "../../assets/mail.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  const LinkFn = () => {
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="bg-[#090B0E]">
      <div className="lg:h-[248px] h-fit w-[100%] max-w-[1440px] mx-auto footer-contents">
        <div className="centre-card p-12">
          <h2>Hello Again😇</h2>
          <p>
            I’m nature-loving artist turned designer who infuses his passion for
            the environment into his work.
          </p>
        </div>
        <div className="w-[90%] mx-auto bottom-border"></div>
        <div className="footer-navs lg:flex-row flex-col w-[90%] mx-auto mt-4">
          <div className="flex items-center lg:ml-2 lg:gap-3 gap-2 order-1">
            <div>
              <img src={call} alt="" />
            </div>
            <div>
              <a href="tel:+919619386916">(+91) 9619 386 916</a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10 lg:order-2 order-3">
            <div className="cursor-pointer">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link-active" : "")}
                onClick={()=>LinkFn()}
              >
                About Me
              </NavLink>
            </div>
            <div>
              <a href="https://www.behance.net/Kshitij_03" target="_blank">
                Behance[Old Work]
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/kshitij-srivastava-03ab5861/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div>My Digital Painting</div>
          </div>
          <div className="flex items-center gap-[14px] lg:mr-2 lg:order-3 order-2">
            <div>
              <img src={mail} alt="" />
            </div>
            <div>
              <a href="mailto:kshitijsrivastava0389@gmail.com">
                kshitijsrivastava0389@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
