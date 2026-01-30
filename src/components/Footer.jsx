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
    <footer className="relative bg-dark-800 overflow-hidden" id="contact">
      <div className="section-divider" />

      {/* 3D Background */}
      <FooterScene />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Contact Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent-cyan mb-3">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Let's Work Together</h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="gradient-text">Billie</span>
                <span className="relative inline-flex size-2 ml-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-purple opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-accent-purple"></span>
                </span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Software developer crafting modern web experiences. Open to collaborations, freelance work, and new opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-500 text-sm hover:text-accent-purple transition-colors duration-200 py-1"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent-purple/30 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h4 className="text-lg font-semibold text-white mb-6">Send a Message</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Ejimnkonye. Built with <FaHeart className="text-accent-purple text-xs" /> and React.
          </p>
          <p className="text-zinc-600 text-xs">
            Designed & Developed by Billie
          </p>
        </div>
      </div>
    </footer>
  );
};
