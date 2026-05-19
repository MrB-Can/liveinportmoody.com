"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type ComplexFaqProps = {
  items: FAQItem[];
};

export function ComplexFaq({ items }: ComplexFaqProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-lg border border-softBorder">
            <button
              onClick={() => setOpenId(openId === idx ? null : idx)}
              className="flex w-full items-center justify-between bg-white px-5 py-4 text-left hover:bg-mist"
            >
              <span className="font-semibold text-deepInlet">{item.question}</span>
              <span className="text-forest">{openId === idx ? "−" : "+"}</span>
            </button>
            {openId === idx && (
              <div className="border-t border-softBorder bg-mist px-5 py-4">
                <p className="text-slateText">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
