import { useTranslation } from "react-i18next"
import { CheckIcon } from "shared"

export function Referral() {
  const { t } = useTranslation()

  const benefits = [t("referral.benefits.item1"), t("referral.benefits.item2"), t("referral.benefits.item3")]

  return (
    <section
      id='referral'
      className='w-full relative py-24 px-6 md:px-12 border-t border-[#998B79] overflow-hidden'
    >
      {/* Background Texture */}
      <div
        className='absolute inset-0 z-0 bg-[#E5D5C5]'
        style={{
          backgroundImage: `url('/main.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
          opacity: 0.8,
        }}
      />

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='bg-[#FFF6EB] border-2 border-[#33312D] rounded-[32px] p-8 md:p-12 lg:p-16 shadow-[0px_12px_0px_0px_#33312D] flex flex-col lg:flex-row gap-12 items-center'>
          {/* Left Content */}
          <div className='flex-1 flex flex-col gap-8'>
            <div className='inline-flex items-center gap-2 bg-[#FFE8CA] border border-[#998B79] px-4 py-2 rounded-full w-fit shadow-[0px_2px_0px_0px_#807465]'>
              <TrendUpIcon className='w-5 h-5 text-[#FF7F50]' />
              <span className='font-bold text-[#33312D] uppercase tracking-wide text-sm'>{t("referral.badge")}</span>
            </div>

            <div className='flex flex-col gap-4'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#33312D] tracking-tight leading-tight'>
                {t("referral.titleLine1")} <br className='hidden lg:block' /> {t("referral.titleLine2")}
              </h2>
              <p className='text-xl md:text-2xl text-[#6E675E] leading-relaxed'>{t("referral.subtitle")}</p>
            </div>

            {/* Highlight Metric */}
            <div className='bg-[#33312D] rounded-[24px] p-6 text-[#FFF6EB] transform -rotate-1 hover:rotate-0 transition-transform cursor-default shadow-[0px_8px_0px_0px_rgba(0,0,0,0.2)]'>
              <div className='flex items-center gap-4'>
                <div className='text-5xl md:text-6xl font-black text-[#ffe76f]'>{t("referral.metric.value")}</div>
                <div className='text-lg font-medium leading-snug'>
                  {t("referral.metric.prefix")} <span className='text-[#FF7F50]'>{t("referral.metric.highlight")}</span>{" "}
                  {t("referral.metric.suffix")}
                  <br />
                  {t("referral.metric.suffixLine2")}
                </div>
              </div>
            </div>

            <ul className='flex flex-col gap-3 mt-2'>
              {benefits.map((text, i) => (
                <li
                  key={i}
                  className='flex items-center gap-3 text-[#33312D] font-medium text-lg'
                >
                  <span className='w-6 h-6 text-[#10A37F] shrink-0 inline-flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4' />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className='flex flex-col sm:flex-row gap-4 mt-2'>
              <button className='flex-1 bg-gradient-to-b from-[#ff734e] to-[#ff8d6f] border-2 border-[#b2634e] text-[#47281f] font-bold text-xl px-8 py-4 rounded-[24px] shadow-[0px_4px_0px_0px_#66392d] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_#66392d] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2'>
                {t("referral.buttons.primary")} <ArrowRightIcon className='w-6 h-6' />
              </button>
              <button
                className='sm:w-auto bg-white border-2 border-[#33312D] text-[#33312D] font-bold px-8 py-4 rounded-[24px] shadow-[0px_4px_0px_0px_#33312D] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_#33312D] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2'
                title={t("referral.buttons.copyTitle")}
              >
                <CopyIcon className='w-6 h-6' />
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className='flex-1 w-full relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center mt-8 lg:mt-0'>
            {/* Main image */}
            <div className='relative z-10 w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-[#33312D] shadow-[8px_8px_0px_0px_#FF7F50] bg-[#FFE8CA]'>
              <img
                src='https://images.unsplash.com/photo-1733410027841-09dc77bd1832?auto=format&fit=crop&q=80&w=600'
                alt={t("referral.image.alt")}
                className='w-full h-full object-cover mix-blend-luminosity opacity-90'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#33312D] via-[#33312D]/40 to-transparent flex items-end p-8'>
                <div className="text-[#FFF6EB] font-bold text-3xl font-['Playfair_Display',serif] tracking-wide">
                  {t("referral.image.captionLine1")} <br />
                  {t("referral.image.captionLine2")}
                </div>
              </div>
            </div>

            {/* Floating Notifications */}
            <div className='absolute top-[5%] left-0 lg:-left-12 z-20 bg-white border-2 border-[#33312D] rounded-[24px] p-4 shadow-[4px_4px_0px_0px_#33312D] flex items-center gap-4'>
              <div className='w-12 h-12 bg-[#10A37F]/20 rounded-full flex items-center justify-center text-[#10A37F]'>
                <TrendUpIcon className='w-6 h-6' />
              </div>
              <div>
                <div className='text-sm text-[#6E675E] font-medium'>{t("referral.notifications.label")}</div>
                <div className='text-xl font-bold text-[#33312D]'>{t("referral.notifications.firstAmount")}</div>
              </div>
            </div>

            <div className='absolute bottom-[15%] right-0 lg:-right-12 z-20 bg-white border-2 border-[#33312D] rounded-[24px] p-4 shadow-[4px_4px_0px_0px_#33312D] flex items-center gap-4'>
              <div className='w-12 h-12 bg-[#10A37F]/20 rounded-full flex items-center justify-center text-[#10A37F]'>
                <TrendUpIcon className='w-6 h-6' />
              </div>
              <div>
                <div className='text-sm text-[#6E675E] font-medium'>{t("referral.notifications.label")}</div>
                <div className='text-xl font-bold text-[#33312D]'>{t("referral.notifications.secondAmount")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M3 17l6-6 4 4 7-7' />
      <path d='M14 8h6v6' />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M5 12h14' />
      <path d='M12 5l7 7-7 7' />
    </svg>
  )
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <rect
        x='9'
        y='9'
        width='11'
        height='11'
        rx='2'
        ry='2'
      />
      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
    </svg>
  )
}
