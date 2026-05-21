import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { footerLinks, siteConfig } from "@/lib/site";

const footerGroups = [
  {
    title: "Explore",
    links: footerLinks.filter((item) =>
      ["Explore Port Moody", "Neighbourhoods", "Townhouse Complexes", "Condo Buildings", "Listings"].includes(item.label),
    ),
  },
  {
    title: "Resources",
    links: footerLinks.filter((item) =>
      ["Market", "Move to Port Moody", "Buy", "Sell", "Resources", "Ask a Question"].includes(item.label),
    ),
  },
  {
    title: "Company",
    links: footerLinks.filter((item) => ["About", "Privacy", "Terms"].includes(item.label)),
  },
];

export function Footer() {
  return (
    <footer className="bg-deepInlet text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Wordmark variant="light" />
          <p className="mt-4 max-w-md text-sm leading-6 text-mist">
            A Port Moody real estate and lifestyle resource from Leilani Fong, Personal Real Estate Corporation and Paul Bennett.
          </p>
          <div className="mt-6 space-y-2 text-sm text-mist">
            <p>Leilani Fong, Personal Real Estate Corporation</p>
            <p>Paul Bennett</p>
            <p>{siteConfig.publicPhone}</p>
            <p>{siteConfig.publicEmail}</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-seaGlass">{group.title}</p>
              <nav className="grid gap-2 text-sm text-mist">
                {group.links.map((item) => (
                  <Link key={item.href + item.label} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. General information only. Not legal, financial, tax, lending, inspection, or appraisal advice.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
