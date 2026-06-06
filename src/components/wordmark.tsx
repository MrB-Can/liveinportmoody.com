import Image from "next/image";

type WordmarkProps = {
  variant?: "dark" | "light";
};

export function Wordmark({ variant = "dark" }: WordmarkProps) {
  if (variant === "light") {
    return (
      <Image
        src="/images/brand/lipm-logo-stacked-light.webp"
        alt="Live in Port Moody"
        width={120}
        height={80}
        priority
        className="h-16 w-auto"
      />
    );
  }

  return (
    <Image
      src="/images/brand/lipm-logo-wide-dark.webp"
      alt="Live in Port Moody"
      width={180}
      height={44}
      priority
      className="h-14 w-auto"
    />
  );
}
