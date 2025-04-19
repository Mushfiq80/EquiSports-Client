import React from 'react';
import { Dumbbell, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer flex justify-between p-10 bg-base-200 text-base-content">
      <aside>
        <Dumbbell className="h-10 w-10" />
        <p className="font-bold text-lg">EquiSports</p>
        <p>Providing quality sports equipment since 2024</p>
      </aside> 
      <nav>
        <h6 className="footer-title">Services</h6> 
        <a className="link link-hover">Equipment Sales</a>
        <a className="link link-hover">Custom Orders</a>
        <a className="link link-hover">Equipment Rental</a>
        <a className="link link-hover">Repairs</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Social</h6> 
        <div className="grid grid-flow-col gap-4">
          <a><Facebook className="h-6 w-6" /></a>
          <a><Twitter className="h-6 w-6" /></a>
          <a><Instagram className="h-6 w-6" /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;