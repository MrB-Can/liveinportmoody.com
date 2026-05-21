"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type NeighbourhoodFAQProps = {
  items: FAQItem[];
};

export function NeighbourhoodFAQ({ items }: NeighbourhoodFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <h2 className="font-heading text-2xl text-deepInlet mb-2">Frequently asked questions</h2>
      <p className="text-slateText mb-8">Common questions about Port Moody neighbourhoods and how to choose.</p>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg border border-softBorder overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 hover:bg-mist transition-colors text-left"
            >
              <span className="font-semibold text-deepInlet">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-forest transition-transform flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 py-4 bg-mist/50 border-t border-softBorder">
                <p className="text-sm text-slateText leading-6">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
