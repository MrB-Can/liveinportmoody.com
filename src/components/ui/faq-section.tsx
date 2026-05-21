import { FAQAccordion } from "@/components/faq-accordion";

type FAQSectionProps = {
  title?: string;
  intro?: string;
  items: { question: string; answer: string }[];
};

export function FAQSection({
  title = "Frequently Asked Questions",
  intro,
  items,
}: FAQSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl text-deepInlet">{title}</h2>
        {intro ? <p className="mt-2 text-sm leading-6 text-slateText">{intro}</p> : null}
      </div>
      <FAQAccordion items={items} />
    </div>
  );
}
