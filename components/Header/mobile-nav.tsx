"use client";

import { Menu, ChevronDown } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/our-team" },
      { label: "Partners", href: "/partners" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Media",
    dropdown: [
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Tickets", href: "/tickets" },
      { label: "Resources", href: "/resources" },
      { label: "Press", href: "/press" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full px-6 py-4 flex flex-col justify-between bg-[#0E121B]"
      >
        <div>
          {/* Logo */}
          <MobileLink
            onOpenChange={setOpen}
            href="/"
            className="flex items-center pt-2 pb-4"
          >
            <Image
              src="/images/KITFest-Full-White-Logo.png"
              alt="Theatreke Logo"
              width={150}
              height={120}
              className="object-contain"
            />
          </MobileLink>

          {/* Navigation */}
          <nav className="flex flex-col gap-4 mt-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <p className="text-white font-semibold text-sm mb-1">
                    {item.label}
                  </p>
                  <div className="pl-2 flex flex-col gap-2">
                    {item.dropdown.map((dropdownItem) => (
                      <MobileLink
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        onOpenChange={setOpen}
                        className={`text-white text-base ${
                          isActive(dropdownItem.href)
                            ? "text-[#FF6F00] font-semibold"
                            : "hover:text-[#FF6F00]"
                        }`}
                      >
                        {dropdownItem.label}
                      </MobileLink>
                    ))}
                  </div>
                </div>
              ) : (
                <MobileLink
                  key={item.href}
                  href={item.href!}
                  onOpenChange={setOpen}
                  className={`text-white text-lg font-medium ${
                    isActive(item.href!)
                      ? "text-[#FF6F00] font-semibold"
                      : "hover:text-[#FF6F00]"
                  }`}
                >
                  {item.label}
                </MobileLink>
              )
            )}
          </nav>
        </div>

        <Link href="/support">
          <Button className="w-full bg-[#FF6F00] text-white">Support Us</Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
