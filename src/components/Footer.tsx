import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="nexacore-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">N</span>
              </div>
              <span className="font-display font-bold text-xl">NexaCore</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Innovating the future through cutting-edge technology solutions that empower businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/60 hover:text-background text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/60 hover:text-background text-sm transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://nexacore.hireloom1234.com/careers"
                  className="text-background/60 hover:text-background text-sm transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-background/60 hover:text-background text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Resources
            </h4>
            <ul className="space-y-3">
              {["Blog", "Documentation", "Support", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <span className="text-background/60 text-sm cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Mail size={14} />
                hello@nexacore.io
              </li>
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Phone size={14} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <MapPin size={14} />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} NexaCore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-background/40 text-sm hover:text-background/60 cursor-default transition-colors">
              Terms
            </span>
            <span className="text-background/40 text-sm hover:text-background/60 cursor-default transition-colors">
              Privacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
