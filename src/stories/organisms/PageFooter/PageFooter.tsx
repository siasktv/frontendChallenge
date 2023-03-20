import React from "react";
import { Footer } from "react-daisyui";
export interface FooterProps {}

const PageFooter: React.FC<FooterProps> = () => {
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>Services</Footer.Title>
        <a className="link link-hover" href="/">
          Branding
        </a>
        <a className="link link-hover" href="/">
          Design
        </a>
        <a className="link link-hover" href="/">
          Marketing
        </a>
        <a className="link link-hover" href="/">
          Advertisement
        </a>
      </div>
      <div>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover" href="/">
          About us
        </a>
        <a className="link link-hover" href="/">
          Contact
        </a>
        <a className="link link-hover" href="/">
          Jobs
        </a>
        <a className="link link-hover" href="/">
          Press kit
        </a>
      </div>
      <div>
        <Footer.Title>Legal</Footer.Title>
        <a className="link link-hover" href="/">
          Terms of use
        </a>
        <a className="link link-hover" href="/">
          Privacy policy
        </a>
        <a className="link link-hover" href="/">
          Cookie policy
        </a>
      </div>
    </Footer>
  );
};

export default PageFooter;
