"use client"; // IMPORTANT: Mark this as a Client Component for hooks like usePathname

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Import Link from next/link
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { ChevronDown, Home, User, Settings, Mail } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const FloatingNavbar: React.FC = () => {
  const pathname = usePathname(); // Use usePathname for the current path
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      dropdown: [
        {
          label: "Web Apps",
          href: "/products/web-apps",
          icon: <Home size={16} />,
        },
        {
          label: "Mobile Apps",
          href: "/products/mobile-apps",
          icon: <User size={16} />,
        },
        {
          label: "Desktop Apps",
          href: "/products/desktop-apps",
          icon: <Settings size={16} />,
        },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        {
          label: "Documentation",
          href: "/resources/docs",
          icon: <Home size={16} />,
        },
        { label: "Blog", href: "/resources/blog", icon: <User size={16} /> },
        {
          label: "Support",
          href: "/resources/support",
          icon: <Mail size={16} />,
        },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]); // Depend on pathname from next/navigation

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemLabel: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
    }
  };

  const isActive = (href: string) => {
    return pathname === href; // Use pathname from usePathname
  };

  const isDropdownActive = (dropdown: DropdownItem[]) => {
    return dropdown.some((item) => isActive(item.href));
  };

  return (
    <motion.nav
      ref={navbarRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 mt-6 mx-auto max-w-6xl px-4"
    >
      <div className="rounded-full shadow-lg border border-border bg-background/70 backdrop-blur-md px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {" "}
            {/* Use href for Next.js Link */}
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                L
              </span>
            </div>
            <span className="font-semibold text-foreground">Logo</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.href ? (
                  <Link
                    href={item.href} // Use href for Next.js Link
                    className={`transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${
                      item.dropdown && isDropdownActive(item.dropdown)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <motion.div
                      animate={{
                        rotate: openDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                        role="menu"
                        onMouseEnter={() => {
                          if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                          }
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href} // Use href for Next.js Link
                            className={`flex items-center space-x-3 px-4 py-2 transition-colors duration-200 ${
                              isActive(dropdownItem.href)
                                ? "text-primary bg-accent font-semibold"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                            }`}
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.icon && (
                              <span className="text-current">
                                {dropdownItem.icon}
                              </span>
                            )}
                            <span>{dropdownItem.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNavbar;
