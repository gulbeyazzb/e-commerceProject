import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#252B42] py-10 font-[Montserrat]">
      <div className="flex justify-between container m-auto pb-5">
        <div>
          <h3 className="font-bold text-2xl text-white mb-2">
            Consulting Agency For Your Business
          </h3>
          <p className="font-normal text-sm text-white">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <button className="bg-[#23A6F0] text-white py-4 px-10 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex justify-between container m-auto">
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Company Info
          </Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Legal
          </Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Features
          </Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Resources
          </Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Get In Touch
          </Link>
          <a href="tel:5414558154">
            <i class="bx bxs-phone-call me-2"></i>+90 (555) 555 55 55
          </a>
          <Link to="/location">
            <i class="bx bx-current-location me-2"></i>Amsterdam,Netherlands
          </Link>
          <a href="mailto:glbzbayram@gmail.com">
            <i class="bx bx-envelope me-2"></i>glbzbayram@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-between container m-auto pt-5">
        <p className="font-bold text-sm text-white">
          Made With Love By Finland All Right Reserved{" "}
        </p>
        <div className="flex justify-between items-center w-[100px]">
          <a href="">
            <i class="bx bxl-facebook-circle text-[#23A6F0]"></i>
          </a>
          <a href="">
            <i class="bx bxl-instagram text-[#23A6F0]"></i>
          </a>
          <a href="">
            <i class="bx bxl-twitter text-[#23A6F0]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
