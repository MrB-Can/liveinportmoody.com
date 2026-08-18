import type { Metadata } from "next";
import { siteConfig, socialLinks } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

type CreateMetadataOptions = {
  robots?: { index?: boolean; follow?: boolean };
};

export function createMetadata(
  { title, description, path }: PageSeo,
  options?: CreateMetadataOptions
): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  // Pages whose title already carries the brand (the home page must, since the
  // root layout's title template does not apply to its own route segment) must
  // not get it appended twice in the OG/Twitter tags.
  const fullTitle = title.endsWith(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    robots: options?.robots,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-CA",
  };
}

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": new URL("/#realestateagent", siteConfig.url).toString(),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    telephone: siteConfig.publicPhone,
    email: siteConfig.publicEmail,
    parentOrganization: { "@type": "Organization", name: siteConfig.brokerageName },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.brokerageAddress,
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "City", name: "Port Moody" },
      { "@type": "City", name: "Coquitlam" },
      { "@type": "City", name: "Port Coquitlam" },
      { "@type": "City", name: "Anmore" },
      { "@type": "City", name: "Belcarra" },
    ],
    sameAs: socialLinks.map((link) => link.href),
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

type ArticleSchemaOptions = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
};

export function articleSchema({ title, description, path, datePublished, dateModified, authorName }: ArticleSchemaOptions) {
  const url = new URL(path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: new URL(siteConfig.ogImage, siteConfig.url).toString() },
    },
    image: [new URL(siteConfig.ogImage, siteConfig.url).toString()],
    inLanguage: "en-CA",
  };
}
