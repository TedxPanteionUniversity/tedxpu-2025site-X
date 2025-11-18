/* Footer Component */

"use client";
import { FaFacebookF, FaInstagram, FaTiktok, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white mt-12">
      <div className="px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Replace /logo.png with your actual logo in /public/images */}
          <div className="flex flex-col space-y-1">
          <Image
            src="/images/logo-white.png"
            alt="TEDx Logo"
            width={200}
            height={50}
          />

        <p className="px-2 text-gray-300">
            This independent <span className="text-red-600 left">TEDx</span> event is operated under license from TED.
          </p>
        </div>

        {/* Center Text */}
        <div className="md:flex-1 flex justify-center">
        <p className="text-xs text-gray-400 text-center md:absolute left-1/2 transform md:-translate-x-1/2 lg:my-30">
          ALL RIGHTS RESERVED © 2025
        </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl lg:py-12">
          {/* Replace # with your actual social links */}
          <a href="https://web.facebook.com/TEDxPANTEIONUNIVERSITY/?_rdc=1&_rdr#" aria-label="Facebook" target="_blank" className="hover:text-red-500">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/tedxpanteionuniversity/?hl=en" aria-label="Instagram" target="_blank" className="hover:text-red-500">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@tedxpanteionuniversity" aria-label="TikTok" target="_blank" className="hover:text-red-500">
            <FaTiktok />
          </a>
          <a href="https://open.spotify.com/show/5qEUo7uwYL829pcyCwjCsO?si=y-PD73rZSAeb3yT2jyHiwA&dl_branch=1&nd=1&dlsi=35612f59725843dd" aria-label="Spotify" target="_blank" className="hover:text-red-500">
            <FaSpotify />
          </a>
          <a href="https://www.youtube.com/@tedxpanteionuniversity9799" aria-label="YouTube" target="_blank" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
