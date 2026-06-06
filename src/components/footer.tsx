import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { footerGroups, socialLinks, siteConfig } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

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
          <div className="mt-6">
            {socialLinks.some((s) => !s.disabled) && (
              <div className="flex gap-6">
                {socialLinks
                  .filter((s) => !s.disabled)
                  .map((social) => (
                    <Link
                      key={social.platform}
                      href={social.href}
                      className="text-seaGlass hover:text-white transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {(() => {
                        const Icon = socialIcons[social.platform];
                        return Icon ? <Icon className="h-5 w-5" /> : social.label;
                      })()}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
