"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names
import Logo from "./Logo"; // Assuming Logo component is in the same directory or accessible

// Define the structure for navigation links, including dropdown items
const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about", // Base path for active state
    dropdown: [
      {
        title: "Our Story",
        href: "/about/our-story",
      },
      {
        title: "Our Team",
        href: "/about/our-team",
      },
      {
        title: "Mission & Vision",
        href: "/about/mission-vision",
      },
    ],
  },
  { name: "Events", path: "/events" },
  {
    name: "Media",
    path: "/media", // Base path for active state
    dropdown: [
      {
        title: "Gallery",
        href: "/media/gallery",
      },
      {
        title: "Videos",
        href: "/media/videos",
      },
      {
        title: "News",
        href: "/media/news",
      },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

// Define props interface for ListItem to fix TypeScript errors
interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
  children: React.ReactNode;
}

// Helper component for list items within NavigationMenuContent
// This is similar to the ListItem component in the Shadcn example
const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    const pathname = usePathname(); // Get current path to determine active state

    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              " text-white", // Custom background and text color for dropdown items
              " hover:text-[#FF6F00]", // Hover background and text color
              pathname === href ? "text-[#FF6F00] font-semibold" : "", // Active link styling
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const Navbar = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${
        showNav ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 z-50 bg-[#0E121B] shadow-xl transition-transform duration-300`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-20 px-4">
        <Logo />
        {/* Center: NavLinks (desktop only) */}
        <div className="hidden md:flex justify-center items-center mx-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                // Removed 'group' class from NavigationMenuItem as it's no longer needed for line hover
                <NavigationMenuItem key={link.name}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative bg-transparent text-white hover:bg-[#FF6F00]/10 hover:text-[#FF6F00] data-[state=open]:bg-[#FF6F00]/10", // Custom trigger styles
                          pathname.startsWith(link.path) ? "text-[#FF6F00]" : "" // Active state for trigger
                        )}
                      >
                        {link.name}
                        {/* Animated underline for dropdown triggers - now only on active */}
                        <span
                          className={cn(
                            "absolute bottom-0 left-0 h-0.5 bg-[#FF6F00] transition-all duration-300",
                            pathname.startsWith(link.path) ? "w-full" : "w-0" // Only active state
                          )}
                        />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-[#0E121B] text-white border border-gray-700">
                        <ul className="grid w-[300px] gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                          {link.dropdown.map((dropdownItem) => (
                            <ListItem
                              key={dropdownItem.title}
                              title={dropdownItem.title}
                              href={dropdownItem.href}
                            ></ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.path}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative bg-transparent text-white hover:bg-[#FF6F00]/10 hover:text-[#FF6F00]", // Custom link styles
                          pathname === link.path ? "text-[#FF6F00]" : "" // Active state for simple link
                        )}
                      >
                        {link.name}
                        {/* Animated underline for simple links - now only on active */}
                        <span
                          className={cn(
                            "absolute bottom-0 left-0 h-0.5 bg-[#FF6F00] transition-all duration-300",
                            pathname === link.path ? "w-full" : "w-0" // Only active state
                          )}
                        />
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
