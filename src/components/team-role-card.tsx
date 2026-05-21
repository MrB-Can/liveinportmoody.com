type TeamRoleCardProps = {
  name: string;
  roleTitle: string;
  description: string;
  bullets: string[];
  icon?: React.ReactNode;
};

export function TeamRoleCard({ name, roleTitle, description, bullets, icon }: TeamRoleCardProps) {
  return (
    <div className="rounded-lg border border-softBorder bg-white p-6">
      <div className="mb-4 flex items-start gap-3">
        {icon && <div className="mt-1 flex-shrink-0 text-forest">{icon}</div>}
        <div className="flex-1">
          <h3 className="font-heading text-xl text-deepInlet">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-emphasis">{roleTitle}</p>
        </div>
      </div>
      <p className="text-sm leading-6 text-slateText mb-4">{description}</p>
      <ul className="space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="text-sm text-slateText flex gap-2">
            <span className="flex-shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
