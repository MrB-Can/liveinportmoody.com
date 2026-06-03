type VideoBlockProps = {
  title: string;
  description: string;
};

export function VideoBlock({ title, description }: VideoBlockProps) {
  return (
    <div className="grid gap-6 rounded-lg border border-softBorder bg-white p-6 md:grid-cols-[1.1fr_1fr]">
      <div className="aspect-video rounded-md bg-deepInlet" aria-label="Video area" />
      <div className="self-center">
        <h3 className="font-heading text-2xl text-deepInlet">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slateText">{description}</p>
      </div>
    </div>
  );
}
