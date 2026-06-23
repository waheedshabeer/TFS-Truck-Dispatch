"use client";
import { useRef, useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({
  title,
  links,
  href,
}: {
  title: string;
  href: string;
  links: { name: string; href: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className="flex items-center hover:text-american-red transition"
      >
        {title} <ChevronDown className="w-4 h-4 ml-1" />
      </Link>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 min-w-48 bg-american-gradient text-american-white rounded-md shadow-lg z-50"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div className="absolute inset-0 bg-black/80 rounded-md -z-10"></div>

          <ul className="py-2 text-sm relative z-10">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 hover:bg-american-red relative z-10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const dropdownLinks = [
    {
      title: "COMMERCIAL TRUCK INSURANCE",
      href: "/commercial-truck-insurance",
      links: [
        {
          name: "SEMI TRUCK INSURANCE",
          href: "/commercial-truck-insurance/semi-truck-insurance",
        },
        {
          name: "BOX TRUCK INSURANCE",
          href: "/commercial-truck-insurance/box-truck-insurance",
        },
        {
          name: "DUMP TRUCK INSURANCE",
          href: "/commercial-truck-insurance/dump-truck-insurance",
        },
      ],
    },

    {
      title: "COVERAGE OPTIONS",
      href: "/coverage-options",
      links: [
        {
          name: "AUTO LIABILITY",
          href: "/coverage-options/auto-liability",
        },
        {
          name: "AUTO PHYSICAL DAMAGE",
          href: "/coverage-options/auto-physical-damage",
        },
        {
          name: "MOTOR TRUCK CARGO",
          href: "/coverage-options/motor-truck-cargo",
        },
        {
          name: "GENERAL LIABILITY",
          href: "/coverage-options/general-liability",
        },
        {
          name: "WORKERS COMPENSATION",
          href: "/coverage-options/workers-compensation",
        },
      ],
    },
    {
      title: "BUSINESS TYPES",
      href: "/business-types",
      links: [
        {
          name: "NEW VENTURE TRUCKING",
          href: "/business-types/new-venture-trucking",
        },
        {
          name: "FOR-HIRE TRUCKING",
          href: "/business-types/forhire-trucking",
        },
        {
          name: "CONSTRUCTION AND DEMOLITION",
          href: "/business-types/construction-and-demolition",
        },
        {
          name: "EXPEDITED DELIVERY SERVICE",
          href: "/business-types/expedited-delivery-service",
        },
        {
          name: "WASTE HAULERS",
          href: "/business-types/waste-haulers",
        },
        {
          name: "HOT SHOT TRUCKING",
          href: "/business-types/hotshot-trucking",
        },
        {
          name: "HAZMAT HAULERS",
          href: "/business-types/hazmat-haulers",
        },
        {
          name: "OTHER TRUCKING OPERATION",
          href: "/business-types/other-trucking-operation",
        },
      ],
    },
  ];

  return (
    <header className="relative w-full">
      <nav className="bg-american-gradient">
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="w-full bg-white/10 backdrop-blur-lg shadow-lg relative z-[70]">
          <div className="w-full mx-auto px-6 py-2 flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={100}
                height={100}
                className="cursor-pointer rounded-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8 text-american-white text-xs font-semibold md:text-sm lg:text-md">
              <li>
                <Link href="/" className="hover:text-american-red transition">
                  HOME
                </Link>
              </li>
              {dropdownLinks.map((item, index) => (
                <li key={index}>
                  <Dropdown
                    title={item.title}
                    links={item.links}
                    href={item.href}
                  />
                </li>
              ))}
              <li>
                <Link
                  href="/Contact"
                  className="hover:text-american-red transition"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-american-white"
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-[55]"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Drawer */}
              <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 text-white shadow-lg z-[60] overflow-y-auto">
                {/* Close button at top of drawer */}
                <div className="sticky top-0 bg-black/90 z-10 flex justify-end p-4 border-b border-white/20">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-american-white hover:text-american-red transition"
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
                <div className="pb-24">
                  <ul className="flex flex-col space-y-4 text-center py-6 text-lg font-semibold">
                    <li>
                      <Link
                        href="/"
                        className="block py-2 hover:text-american-red transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    {dropdownLinks.map((item, index) => (
                      <li key={index}>
                        <button
                          className="flex justify-between items-center w-full py-2 px-6 hover:text-american-red transition"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.title ? null : item.title
                            )
                          }
                        >
                          {item.title}
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </button>
                        {activeDropdown === item.title && (
                          <ul className="mt-2 space-y-2 text-sm bg-black/80">
                            {item.links.map((link, i) => (
                              <li key={i}>
                                <Link
                                  href={link.href}
                                  className="block py-2 px-6 hover:bg-gray-700"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/Contact"
                        className="block py-2 hover:text-american-red transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
