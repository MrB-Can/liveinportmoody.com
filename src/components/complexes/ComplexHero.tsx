type ComplexHeroProps = {
  name: string;
  address: string;
  neighborhood: string;
};

export function ComplexHero({ name, address, neighborhood }: ComplexHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-forest/10 to-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-5">
        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-forest">{neighborhood}</span>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl text-deepInlet">{name}</h1>
        <p className="mt-2 text-lg text-slateText">{address}</p>
        <div className="mt-8 h-64 rounded-lg bg-gradient-to-br from-mist to-seaGlass/20" aria-label={`${name} complex hero image placeholder`} />
        <p className="mt-2 text-xs text-slateText">Image placeholder: Treetops entrance/signage. Replace with professional photo.</p>
      </div>
    </div>
  );
}
