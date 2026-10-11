
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { IoBagOutline, IoSearch } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-sm shadow-black/[0.02] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-10"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-3xl font-extrabold tracking-[-0.08em] text-foreground transition-opacity duration-300 hover:opacity-65 sm:text-4xl"
        >
          Fashion<span className="text-primary">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
              <Link
                href={link.href}
                key={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-foreground after:transition-all after:duration-300 ${
                  isActive
                    ? "text-foreground after:w-full"
                    : "text-muted-foreground after:w-0 hover:text-foreground hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search products"
            onClick={() => router.push("/shop")}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-surface active:scale-95"
          >
            <IoSearch size={21} />
          </button>

          <button
            type="button"
            aria-label="Sign in"
            onClick={() => router.push("/sign-in")}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-surface active:scale-95"
          >
            <FaRegUser size={19} />
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            onClick={() => router.push("/sign-in")}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-surface active:scale-95"
          >
            <IoBagOutline size={22} />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-1 inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-surface active:scale-95 md:hidden"
          >
            {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-border/70 bg-background transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-3 sm:px-8">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathName === link.href;

                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={`border-b border-border/50 px-2 py-4 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                router.push("/sign-in");
              }}
              className="mt-5 w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
