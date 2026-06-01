import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-deepInlet text-white hover:bg-forest",
  secondary: "border border-seaGlass bg-white text-deepInlet hover:bg-mist",
  ghost: "text-deepInlet underline-offset-4 hover:underline",
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 whitespace-nowrap items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
