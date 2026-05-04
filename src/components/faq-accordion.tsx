type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="cursor-pointer list-none font-semibold text-deepInlet">
            <span>{item.question}</span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-slateText">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
