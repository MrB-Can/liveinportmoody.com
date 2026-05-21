const guideCards = [
  {
    title: "Location and walkability",
    copy: "Daily errands, SkyTrain access, groceries, cafes, parks, waterfront, and commute patterns.",
  },
  {
    title: "Construction and age",
    copy: "Concrete versus wood frame, building age, envelope history, elevators, windows, balconies, and mechanical systems.",
  },
  {
    title: "Strata fees and amenities",
    copy: "Amenities can improve lifestyle but may increase operating and capital costs.",
  },
  {
    title: "Depreciation report and insurance",
    copy: "Review the depreciation report, contingency reserve fund, insurance deductibles, and planned major projects.",
  },
  {
    title: "Parking and storage",
    copy: "Verify parking stall assignment, storage locker, visitor parking, EV charging rules, and bike storage.",
  },
  {
    title: "Noise, views, exposure, and elevators",
    copy: "Consider road noise, train noise, exposure, outlook, privacy, elevator dependence, and floor level.",
  },
  {
    title: "Rental, pet, and bylaw verification",
    copy: "Rules can change and must be verified against current strata bylaws and provincial rules.",
  },
  {
    title: "Resale demand",
    copy: "Walkability, reputation, age, fees, layout, exposure, and active competition all matter.",
  },
];

export function CondoDecisionGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {guideCards.map((card) => (
        <article key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
          <h3 className="font-heading text-xl text-deepInlet">{card.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slateText">{card.copy}</p>
        </article>
      ))}
    </div>
  );
}
