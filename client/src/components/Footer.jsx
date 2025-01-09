/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Visa from "../assets/Visa.webp";
import Master from "../assets/Master.webp";

function Footer() {
  return (
    <footer className="bg-[#000066]  text-white  px-14 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src="../../images/logo.png" width={160} />
          <p className="text-sm">
            714Tickets , Sri Lanka's premier and most trusted online ticket
            partner, serves as the official marketplace providing a secure and
            safe platform for purchasing tickets to all entertainment events in
            Sri Lanka.
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          {/* Payment Options */}
          <div className="flex items-center gap-4 mt-4">
            <img src={Visa} alt="Visa" className="h-6" />
            <img src={Master} alt="Mastercard" className="h-6" />
          </div>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Helpful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Hot Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span>WhatsApp (Text-only service)</span>
            </li>
            <li>
              <a
                href="mailto:support@mytickets.lk"
                className="hover:text-gray-300"
              >
                support@714tickets.lk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms and Conditions
          </a>
        </div>
        <p className="mt-4 text-gray-400">
          Copyright 2014-2025 © 714Tickets All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
