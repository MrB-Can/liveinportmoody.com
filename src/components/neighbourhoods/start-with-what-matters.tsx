import Link from "next/link";

type LifestyleCard = {
  title: string;
  description: string;
  areas: { label: string; slug: string }[];
};

const cards: LifestyleCard[] = [
  {
    title: "I want walkability",
    description: "Walk to shops, cafes, restaurants, and transit",
    areas: [
      { label: "Suter Brook", slug: "suter-brook" },
      { label: "Newport Village", slug: "newport-village" },
      { label: "Klahanie", slug: "klahanie" },
      { label: "Moody Centre", slug: "moody-centre" },
    ],
  },
  {
    title: "I want a family neighbourhood",
    description: "Parks, schools, community feel, space for kids",
    areas: [
      { label: "Heritage Mountain", slug: "heritage-mountain" },
      { label: "Heritage Woods", slug: "heritage-woods" },
      { label: "College Park", slug: "college-park" },
      { label: "Glenayre", slug: "glenayre" },
    ],
  },
  {
    title: "I want townhomes",
    description: "Ground-oriented living with strata community",
    areas: [
      { label: "Heritage Mountain", slug: "heritage-mountain" },
      { label: "Klahanie", slug: "klahanie" },
      { label: "Heritage Woods", slug: "heritage-woods" },
      { label: "College Park", slug: "college-park" },
    ],
  },
  {
    title: "I want condos",
    description: "Low-maintenance urban or suburban living",
    areas: [
      { label: "Suter Brook", slug: "suter-brook" },
      { label: "Newport Village", slug: "newport-village" },
      { label: "Klahanie", slug: "klahanie" },
      { label: "Moody Centre", slug: "moody-centre" },
    ],
  },
  {
    title: "I want quiet detached streets",
    description: "Single-family homes, privacy, established trees",
    areas: [
      { label: "Glenayre", slug: "glenayre" },
      { label: "College Park", slug: "college-park" },
      { label: "Pleasantside", slug: "pleasantside" },
      { label: "Barber Street", slug: "barber-street" },
    ],
  },
  {
    title: "I want trails and nature",
    description: "Green space, parks, outdoor recreation",
    areas: [
      { label: "Heritage Mountain", slug: "heritage-mountain" },
      { label: "Pleasantside", slug: "pleasantside" },
      { label: "Ioco", slug: "ioco-north-shore" },
      { label: "Barber Street", slug: "barber-street" },
    ],
  },
];

export function StartWithWhatMatters() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <h2 className="font-heading text-2xl text-deepInlet mb-2">Start with what matters most</h2>
      <p className="text-slateText mb-8">Pick what fits your lifestyle, then explore those neighbourhoods in detail.</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-lg border border-softBorder bg-white p-5 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-deepInlet text-base mb-2">{card.title}</h3>
            <p className="text-xs text-slateText mb-4">{card.description}</p>
            <div className="flex flex-wrap gap-2">
              {card.areas.map((area) => (
                <Link
                  key={area.slug + area.label}
                  href={`/neighbourhoods/${area.slug}`}
                  className="text-xs px-2 py-1 bg-forest/10 text-forest rounded hover:underline"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
