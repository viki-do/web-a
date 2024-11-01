import React from "react";
import { footerInfos, footerLinks, footerServices } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col h-full bg-dark-blue pt-28">
      <div className="text-center text-white text-4xl px-32 lg:text-6xl">
        <p>Ready to chat about</p>
        <p className="pb-10"><span className="text-turquise">your project?</span></p>
        <p className="text-base leading-6">
          Get in touch today to see how we can help your business achieve its full potential online.
        </p>
        <div className="text-lg font-semibold leading-7 pt-7 pb-7">
          <p>You can also reach us on:</p>
          <p>Tel: <span className="text-turquise">1235 567 890</span></p>
          <p>Email: <span className="text-turquise">hello@web-a.com</span></p>
        </div>
      </div>
      <button className="bg-turquise text-dark-blue text-md font-bold py-4 w-48 rounded-full mt-4 hover:bg-white mx-auto mb-40">
        View our work
      </button>

      {/* Footer Columns */}
      <div className="grid grid-cols-2 gap-16 px-16 lg:grid-cols-4 lg:mx-auto">
        <div className="flex flex-col">
          <p className="text-white text-4xl font-semibold pb-8">Web-A<span className="text-turquise">.</span></p>
          {footerInfos.map(({ info }, index) => (
            <p key={index} className="text-white text-xs mb-4 leading-6 cursor-pointer">{info}</p>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-white text-3xl font-semibold pb-8">Links</p>
          {footerLinks.map(({ link }, index) => (
            <p key={index} className="text-white text-xs mb-4 leading-6 cursor-pointer">{link}</p>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-white text-3xl font-semibold pb-8">Services</p>
          {footerServices.map(({ info }, index) => (
            <p key={index} className="text-white text-xs mb-4 leading-6 cursor-pointer">{info}</p>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-white text-3xl font-semibold pb-8">Contact</p>
          {footerServices.map(({ info }, index) => (
            <p key={index} className="text-white text-xs mb-4 leading-6">{info}</p>
          ))}
        </div>
      </div>
      <p className="pt-16 pb-8 text-white text-xs text-center">© 2024 Web-A. All rights reserved</p>
    </div>
  );
};

export default Footer;
