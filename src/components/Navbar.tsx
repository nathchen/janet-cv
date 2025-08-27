"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/motion-graphic", label: "Motion Graphic" },
  { href: "/ui-ux-design", label: "UI/UX Design" },
  { href: "/infographic-design", label: "Infographic Design" },
  { href: "/digital-design", label: "Digital Design" },
  { href: "/layout-design", label: "Layout Design" },
  { href: "/illustration", label: "Illustration" },
  { href: "/logo-design", label: "Logo Design" },
  { href: "/pos-design", label: "POS Design" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/90 absolute top-0 left-0 right-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Janet Kim
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    "transition-colors hover:text-foreground/80 " +
                    (isActive ? "text-foreground" : "text-foreground/60")
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded border border-black/10"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-5 bg-foreground mb-1" />
            <span className="block h-0.5 w-5 bg-foreground mb-1" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
