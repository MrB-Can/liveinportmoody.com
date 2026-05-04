import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-deepInlet text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
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
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-seaGlass">Explore</p>
          <nav className="grid gap-2 text-sm text-mist">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-seaGlass">Newsletter</p>
          <p className="text-sm leading-6 text-mist">Port Moody market notes and local updates. Signup form routes through the Resources page.</p>
          <div className="mt-6 space-y-2 text-sm text-mist">
            <p>{siteConfig.brokerageName}</p>
            <p>{siteConfig.brokerageAddress}</p>
            <p>TODO: final brokerage compliance language.</p>
            <p>TODO: social links.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Real estate disclaimer TODO before launch.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
