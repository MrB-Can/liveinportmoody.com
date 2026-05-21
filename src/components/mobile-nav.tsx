"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, exploreItems } from "@/lib/site";

const exploreGroups = ["Places", "Property Search", "Local Life", "Resources"];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

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
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExploreOpen(!exploreOpen)}
                      className="w-full text-left rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-mist flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <svg className={`w-4 h-4 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {exploreOpen && (
                      <div className="ml-2 border-l border-softBorder py-2">
                        <Link
                          href="/explore"
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-deepInlet hover:bg-mist"
                          onClick={() => {
                            setOpen(false);
                            setExploreOpen(false);
                          }}
                        >
                          Explore landing page
                        </Link>
                        {exploreGroups.map((group) => (
                          <div key={group} className="mt-3">
                            <p className="px-3 text-xs font-semibold uppercase tracking-[0.12em] text-slateText">
                              {group}
                            </p>
                            {exploreItems.filter((subitem) => subitem.group === group).map((subitem) => (
                          <Link
                            key={`${subitem.href}-${subitem.label}`}
                            href={subitem.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-charcoal hover:bg-mist"
                            onClick={() => {
                              setOpen(false);
                              setExploreOpen(false);
                            }}
                          >
                            {subitem.label}
                          </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-mist block"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-deepInlet px-3 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Ask a Question
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
