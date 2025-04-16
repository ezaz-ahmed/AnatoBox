
"use client"

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";
import { NavbarItem } from "./nvabarItem";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"]
});


const navbarItems = [
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" }
];

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>anatobox</span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex pr-6">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};
