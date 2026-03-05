import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CAREERS_URL = "https://hireloom1234.vercel.app/careers/nexacore";

const navItems = [
  { label: "Home", path: "/", external: false },
  { label: "About", path: "/about", external: false },
  { label: "Careers", path: CAREERS_URL, external: true },
  { label: "Contact", path: "/contact", external: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavItem = ({ item, className, onClick }: { item: typeof navItems[0]; className: string; onClick?: () => void }) =>
    item.external ? (
      <a href={item.path} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {item.label}
      </a>
    ) : (
      <Link to={item.path} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b">
      <div className="nexacore-container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">N</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">NexaCore</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  !item.external && location.pathname === item.path
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              />
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={CAREERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200"
            >
              View Openings
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-b overflow-hidden"
          >
            <div className="nexacore-container py-4 space-y-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  item={item}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    !item.external && location.pathname === item.path
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                />
              ))}
              <a
                href={CAREERS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground text-center"
              >
                View Openings
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
