interface Phase {
  year: string;
  title: string;
  body: string;
}

interface PhaseTimelineProps {
  phases: Phase[];
}

const ACCENTS = ['bg-forest', 'bg-emphasis', 'bg-deepInlet'];

export function PhaseTimeline({ phases }: PhaseTimelineProps) {
  return (
    <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
      {phases.map((phase, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-xl border border-softBorder bg-white p-5 pl-6"
        >
          <span className={`absolute left-0 top-0 bottom-0 w-1 ${ACCENTS[idx % ACCENTS.length]}`} />
          <div className="text-xs font-medium uppercase tracking-wider text-slateText">{phase.year}</div>
          <h4 className="mt-1.5 font-heading text-lg text-deepInlet">{phase.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-slateText">{phase.body}</p>
        </div>
      ))}
    </div>
  );
}
