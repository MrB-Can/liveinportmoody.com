"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-softBorder text-deepInlet"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="block h-4 w-5 border-y-2 border-current" />
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-full border-y border-softBorder bg-white px-5 py-4 shadow-soft">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-deepInlet px-3 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Ask a local question
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
