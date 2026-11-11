import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'How is ParroDash different from using ClickUp or Asana alongside Slack and BambooHR?',
    answer:
      'Most organizations pay for 5 to 7 disconnected tools—one for tasks, one for docs, one for chat, one for PTO/attendance, and another for CRM. ParroDash brings all of these into a single unified business operating system with shared data objects, cutting software costs by 40-60% and eliminating endless context switching.',
  },
  {
    question: 'Can we migrate our existing data from ClickUp, Asana, Monday, or Jira?',
    answer:
      'Yes. ParroDash includes native 1-click migration wizards for ClickUp, Asana, Monday, Trello, and Jira. Your task hierarchies, custom fields, comments, assignees, and attachments are preserved with zero downtime.',
  },
  {
    question: 'How does Parro AI protect our confidential company data?',
    answer:
      'We enforce zero customer data retention agreements with foundation model providers. Your workspace tasks, documents, employee salaries, and customer CRM notes are never used to train public or foundation AI models. Enterprise customers can also connect private AI enclaves or bring their own API keys (BYOK).',
  },
  {
    question: 'Are there hidden seat minimums on the Pro or Business plans?',
    answer:
      'No. Unlike competitors that enforce rigid 3-seat or 5-seat minimums, ParroDash allows you to start with just 1 paid user on Pro or Business and add teammates only as your organization actually grows.',
  },
  {
    question: 'How does the free plan work? Is it a limited-time trial?',
    answer:
      'Our Free Forever plan is truly free forever for teams up to 5 members. It includes unlimited tasks, Kanban boards, collaborative docs, and team chat without requiring a credit card.',
  },
  {
    question: 'Does ParroDash support both remote workers and in-office staff?',
    answer:
      'Yes. Remote team members can log hours, join video huddles, and view team timezones, while in-office staff can use geo-fenced mobile clock-ins and shared tablet kiosk modes for attendance.',
  },
];

interface FAQAccordionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = DEFAULT_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about ParroDash, migrations, security, and pricing.',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#FFFFFF] text-[#141414]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141414]">
            {title}
          </h2>
          <p className="text-sm text-[#777780] max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E6E6E9] bg-[#FFFFFF] overflow-hidden transition-colors hover:border-[#141414]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#141414] focus-visible:ring-2 focus-visible:ring-black"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#777780] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#141414]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#777780] leading-relaxed border-t border-[#E6E6E9]/50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[#141414]">
            <span className="font-bold">Have a question not listed here?</span> Our product engineering team is happy
            to help.
          </div>
          <a
            href="/contact-sales"
            className="px-4 py-2 rounded-lg bg-[#0D0D0F] text-white font-semibold hover:bg-[#202025] transition-colors shrink-0"
          >
            Ask Our Product Team
          </a>
        </div>
      </div>
    </section>
  );
};
