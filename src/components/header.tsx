import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { MobileNav } from "@/components/mobile-nav";
import { Wordmark } from "@/components/wordmark";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-softBorder bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Live in Port Moody home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-charcoal hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton href="/contact">Ask a local question</CTAButton>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
