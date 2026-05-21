"use client";

import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "@/components/cta-button";
import { MobileNav } from "@/components/mobile-nav";
import { Wordmark } from "@/components/wordmark";
import { navItems, exploreItems } from "@/lib/site";

const exploreGroups = ["Places", "Property Search", "Local Life", "Resources"];

export function Header() {
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-softBorder bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Live in Port Moody home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-4 lg:gap-6 md:flex">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.submenu ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExploreOpen(!exploreOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-forest"
                    aria-expanded={exploreOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className={`h-3 w-3 transition-transform ${exploreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {exploreOpen && (
                    <div className="absolute left-0 top-full z-50 mt-4 w-[720px] max-w-[calc(100vw-2.5rem)] rounded-lg border border-softBorder bg-white p-4 shadow-soft">
                      <div className="grid gap-4 md:grid-cols-[0.9fr_1.6fr]">
                        <Link
                          href="/explore"
                          className="rounded-md bg-deepInlet p-5 text-white"
                          onClick={() => setExploreOpen(false)}
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-seaGlass">
                            Explore Port Moody
                          </p>
                          <p className="mt-3 font-heading text-2xl">Find the right area, building, complex, or next move.</p>
                          <p className="mt-3 text-sm leading-6 text-mist">
                            Start with the full Explore page when you are comparing more than one path.
                          </p>
                        </Link>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {exploreGroups.map((group) => (
                            <div key={group}>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slateText">
                                {group}
                              </p>
                              <div className="grid gap-1">
                                {exploreItems
                                  .filter((subitem) => subitem.group === group)
                                  .map((subitem) => (
                                    <Link
                                      key={`${subitem.href}-${subitem.label}`}
                                      href={subitem.href}
                                      className="rounded-md p-2 hover:bg-mist"
                                      onClick={() => setExploreOpen(false)}
                                    >
                                      <div className="text-sm font-semibold text-deepInlet">{subitem.label}</div>
                                      <div className="mt-1 text-xs leading-5 text-slateText">{subitem.description}</div>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="text-sm font-medium text-charcoal hover:text-forest">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton href="/contact">Ask a Question</CTAButton>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
