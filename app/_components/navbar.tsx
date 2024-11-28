"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="border-b border-solid px-4 py-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.svg"
          width={120}
          height={30}
          alt="Finance AI"
          className="h-auto w-auto md:h-[39px] md:w-[173px]"
        />

        {/* Burger Menu Button (Visible on small screens) */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links for larger screens */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } text-sm md:text-base`}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={`${
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } text-sm md:text-base`}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={`${
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } text-sm md:text-base`}
          >
            Assinatura
          </Link>
        </div>

        {/* User Button */}
        <UserButton showName />
      </div>

      {/* Dropdown Menu for small screens */}
      {menuOpen && (
        <div className="mt-4 flex flex-col items-start space-y-4 md:hidden">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } text-sm`}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={`${
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } text-sm`}
            onClick={() => setMenuOpen(false)}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={`${
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } text-sm`}
            onClick={() => setMenuOpen(false)}
          >
            Assinatura
          </Link>
          <UserButton showName />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
