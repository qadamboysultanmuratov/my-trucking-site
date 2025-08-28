import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [ 
  { id: "home", label: "Home" },
  { id: "whychooseus", label: "Why Us?" },
  { id: "services", label: "Services" },
  { id: "trustedby", label: "Partners" },
  { id: "about", label: "About us" },
  { id: "staffcarousel", label: "Our Team" },
];


  return (
    <header
      className={
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 " +
        (scrolled
          ? "backdrop-blur-sm bg-white/70 shadow-md"
          : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            {/* simple truck / logo svg */}
            <img
  src="/images/ack-logo.png"
  alt="ACK Trans Logo"
  className="w-12 h-12"
/>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold text-blue-800">
                ACK TRANS
              </span>
              <span className="text-xs text-gray-600 -mt-0.5">Inc Co.</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-700 transition"
              >
                {l.label}
              </a>
            ))}

            <a
  href="#contact"
  className="ml-4 inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 transition-all"
>
  Call now
</a>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {open ? (
                // close icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // hamburger
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div
        className={
          "md:hidden overflow-hidden transition-[max-height] duration-300 " +
          (open ? "max-h-screen" : "max-h-0")
        }
      >
        <div className="px-4 pb-6 pt-2 space-y-2 bg-white/95">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block text-gray-700 py-2 px-2 rounded hover:bg-gray-50"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
