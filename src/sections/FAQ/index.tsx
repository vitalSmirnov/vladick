import { useTranslation } from "react-i18next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shared"

export function FAQ() {
  const { t } = useTranslation()

  const faqData = [
    {
      q: t("faq.items.q1"),
      a: t("faq.items.a1"),
    },
    {
      q: t("faq.items.q2"),
      a: t("faq.items.a2"),
    },
    {
      q: t("faq.items.q3"),
      a: t("faq.items.a3"),
    },
    {
      q: t("faq.items.q4"),
      a: t("faq.items.a4"),
    },
  ]

  return (
    <section
      id='faq'
      className='section-dots-bg w-full bg-[#FFF6EB] py-24 px-6 md:px-12 border-t border-[#998B79]'
    >
      <div className='relative z-10 w-full max-w-[1440px] mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#33312D] tracking-tight mb-12 text-center'>
            {t("faq.title")}
          </h2>

          <Accordion
            type='single'
            collapsible
            defaultValue='item-0'
            className='flex flex-col gap-4'
          >
            {faqData.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className='bg-[#FFE8CA] border border-[#998B79] rounded-[24px] overflow-hidden shadow-[0px_3px_0px_0px_#807465]'
              >
                <AccordionTrigger className='w-full text-left px-8 py-6 h-auto text-xl font-bold text-[#33312D] hover:no-underline focus-visible:ring-0'>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className='px-8 pb-6 pt-0 text-lg text-[#6E675E] leading-relaxed'>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
