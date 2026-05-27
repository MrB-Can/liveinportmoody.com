"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, exploreItems } from "@/lib/site";

const exploreGroups = ["Places", "Property Search", "Local Life", "Resources"];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = (label: string) => setOpenMenu(openMenu === label ? null : label);
  const closeAll = () => { setOpen(false); setOpenMenu(null); };

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-softBorder text-deepInlet"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block h-4 w-5 border-y-2 border-current" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full border-y border-softBorder bg-white px-5 py-4 shadow-soft">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggle(item.label)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-charcoal hover:bg-mist"
                    >
                      <span>{item.label}</span>
                      <svg className={`h-4 w-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {openMenu === item.label && (
                      <div className="ml-2 border-l border-softBorder py-2">
                        <Link
                          href="/explore"
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-deepInlet hover:bg-mist"
                          onClick={closeAll}
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
                                onClick={closeAll}
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.groups ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggle(item.label)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-charcoal hover:bg-mist"
                    >
                      <span>{item.label}</span>
                      <svg className={`h-4 w-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {openMenu === item.label && (
                      <div className="ml-2 border-l border-softBorder py-2">
                        {item.groups.map((group, gi) => (
                          <div key={gi} className={gi > 0 ? "mt-3" : ""}>
                            {group.title && (
                              <p className="px-3 text-xs font-semibold uppercase tracking-[0.12em] text-slateText">
                                {group.title}
                              </p>
                            )}
                            {group.items.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-charcoal hover:bg-mist"
                                onClick={closeAll}
                              >
                                <span>{subitem.label}</span>
                                {subitem.badge && (
                                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slateText">
                                    {subitem.badge}
                                  </span>
                                )}
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
                    className="block rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-mist"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-md bg-deepInlet px-3 py-3 text-center text-base font-semibold text-white"
              onClick={closeAll}
            >
              Ask a Question
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
