import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ROOMS", href: "#rooms" },
  { label: "RESTAURANT", href: "#restaurant" },
  { label: "GALLERY", href: "#gallery" },
  { label: "LOCATION", href: "#location" },
  { label: "CONTACT", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ["home", "rooms", "restaurant", "gallery", "location", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <a
          href="#home"
          className="hotel-logo-link"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Kempty View Hotel Home"
        >
          <Logo variant="light" size="md" />
        </a>

        <nav className={`main-nav ${menuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            className="header-book-btn"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            BOOK NOW
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;