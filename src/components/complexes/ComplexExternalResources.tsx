type ExternalResource = {
  title: string;
  url: string;
  description: string;
};

type ComplexExternalResourcesProps = {
  resources: ExternalResource[];
};

export function ComplexExternalResources({ resources }: ComplexExternalResourcesProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Helpful External Resources</h2>
      <p className="mt-2 text-sm text-slateText">Tools and official sources to help with your research.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-softBorder bg-white p-5 hover:border-forest hover:bg-white/80 transition-colors"
          >
            <h3 className="font-semibold text-deepInlet hover:text-forest">{resource.title} →</h3>
            <p className="mt-2 text-sm text-slateText">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
