import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { ContactForm } from "./form";
import { FooterScene } from "./Scene3D";

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ejimnkonye-onyedika", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://x.com/Ejimnkonye", label: "Twitter" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/billie_jrn/", label: "Instagram" },
  { icon: <FaGithub />, href: "https://github.com/ejimnkonye1", label: "GitHub" },
  { icon: <FaEnvelope />, href: "mailto:ejimnkonyeonyedika@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
     <footer className="border-t border-white/10 py-8">
            <div className="max-w-2xl mx-auto px-6">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Designed &amp; Developed by Billiejrn</span>
                <span>2026</span>
              </div>
            </div>
          </footer>
  );
};
