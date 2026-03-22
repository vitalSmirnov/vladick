import { useTranslation } from "react-i18next"
import { Button, CheckIcon } from "shared"

export function Pricing() {
  const { t } = useTranslation()

  return (
    <section
      id='pricing'
      className='section-dots-bg w-full bg-[#FFF6EB] py-24 px-6 md:px-12 border-t border-[#998B79]'
    >
      <div className='relative z-10 w-full max-w-[1440px] mx-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#33312D] tracking-tight'>{t("pricing.title")}</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {/* Card 1: BASE */}
            <div className='relative bg-gradient-to-br from-[#FFE8CA] to-[#E5D5C5] border border-[#998B79] rounded-[24px] p-8 shadow-[0px_8px_0px_0px_#807465] flex flex-col gap-6 transition-transform duration-200 hover:-translate-y-2'>
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-bold text-[#6E675E] uppercase tracking-widest'>
                  {t("pricing.base.name")}
                </span>
                <h3 className='text-3xl font-bold text-[#33312D]'>{t("pricing.base.subtitle")}</h3>
                <div className='text-[#33312D] text-xl font-medium mt-2'>
                  <span className='text-4xl font-bold'>{t("pricing.base.price")}$</span> {t("pricing.base.perIssue")}
                </div>
              </div>

              <ul className='flex flex-col gap-4 mt-4 flex-1'>
                <FeatureItem text={t("pricing.base.features.limit")} />
                <FeatureItem text={t("pricing.base.features.commission")} />
                <FeatureItem text={t("pricing.base.features.fx")} />
                <FeatureItem text={t("pricing.base.features.monthlyFee")} />
              </ul>

              <Button className='w-full mt-6 font-bold text-lg px-8 py-4 h-auto rounded-[24px] transition-all'>
                {t("pricing.base.cta")}
              </Button>

              {/* Plastic card reflections */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/20 blur-2xl rounded-full pointer-events-none' />
              <div className='absolute bottom-0 left-0 w-40 h-40 bg-black/5 blur-3xl rounded-full pointer-events-none' />
            </div>

            {/* Card 2: MIDDLE GAME */}
            <div className='relative bg-[#33312D] border border-[#1A1917] rounded-[24px] p-8 shadow-[0px_8px_0px_0px_#1A1917] flex flex-col gap-6 overflow-hidden transition-transform duration-200 hover:-translate-y-2'>
              <div className='absolute top-4 right-4 bg-gradient-to-r from-[#ffe76f] to-[#ffda33] text-[#47401f] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>
                {t("pricing.middle.recommended")}
              </div>

              <div className='flex flex-col gap-2 relative z-10'>
                <span className='text-sm font-bold text-[#FF7F50] uppercase tracking-widest'>
                  {t("pricing.middle.name")}
                </span>
                <h3 className='text-3xl font-bold text-[#FFF6EB]'>{t("pricing.middle.subtitle")}</h3>
                <div className='text-[#FFF6EB] text-xl font-medium mt-2'>
                  <span className='text-4xl font-bold text-[#ffe76f]'>{t("pricing.middle.price")}$</span>{" "}
                  {t("pricing.middle.perIssue")}
                </div>
              </div>

              <ul className='flex flex-col gap-4 mt-4 flex-1 relative z-10'>
                <FeatureItem
                  text={t("pricing.middle.features.limit")}
                  dark
                />
                <FeatureItem
                  text={t("pricing.middle.features.commission")}
                  dark
                />
                <FeatureItem
                  text={t("pricing.middle.features.fx")}
                  dark
                />
                <FeatureItem
                  text={t("pricing.middle.features.conversion")}
                  dark
                />
              </ul>

              <Button className='relative z-10 w-full mt-6 font-bold text-lg px-8 py-4 h-auto rounded-[24px] transition-all'>
                {t("pricing.middle.cta")}
              </Button>

              {/* Plastic card reflections & texture */}
              <div className='absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none' />
              <div className='absolute -bottom-20 -left-20 w-64 h-64 bg-black/40 blur-3xl rounded-full pointer-events-none' />
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.2),transparent_45%)] opacity-70 mix-blend-overlay pointer-events-none' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <li className='flex items-start gap-3'>
      <div
        className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${dark ? "bg-[#FF7F50]/20 text-[#FF7F50]" : "bg-[#FF7F50]/20 text-[#FF7F50]"}`}
      >
        <CheckIcon className='w-3 h-3' />
      </div>
      <span className={`text-lg leading-tight ${dark ? "text-[#D5CFC4]" : "text-[#33312D]"}`}>{text}</span>
    </li>
  )
}
