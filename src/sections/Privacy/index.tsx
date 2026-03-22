import { useTranslation } from "react-i18next"
import { EyeOffIcon, MailIcon, ShieldCheckIcon } from "shared"

export function Privacy() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <EyeOffIcon className='w-8 h-8 text-[#FF7F50]' />,
      title: t("privacy.features.zeroLogs.title"),
      description: t("privacy.features.zeroLogs.description"),
    },
    {
      icon: <MailIcon className='w-8 h-8 text-[#FF7F50]' />,
      title: t("privacy.features.emailOnly.title"),
      description: t("privacy.features.emailOnly.description"),
    },
    {
      icon: <ShieldCheckIcon className='w-8 h-8 text-[#FF7F50]' />,
      title: t("privacy.features.protection.title"),
      description: t("privacy.features.protection.description"),
    },
  ]

  return (
    <section
      id='security'
      className='w-full bg-[#FFF6EB] py-24 px-6 md:px-12 border-t border-[#998B79] relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto relative'>
        <div className='text-center mb-20 md:mb-28 relative z-10'>
          <h2 className='scroll-up-title text-4xl md:text-5xl font-bold text-[#33312D] tracking-tight'>
            {t("privacy.title")}
          </h2>
        </div>

        <div className='relative mt-8 mb-12'>
          {/* Realistic Jute Rope Vector (Desktop Only) - Lower opacity for realism */}
          <div className='absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 z-0 hidden md:block pointer-events-none opacity-50 transition-opacity duration-500'>
            <svg
              viewBox='0 0 1000 300'
              className='w-full h-full overflow-visible'
              preserveAspectRatio='none'
            >
              <defs>
                {/* Soft, diffuse shadow mapping to the background */}
                <filter
                  id='soft-shadow'
                  x='-10%'
                  y='-10%'
                  width='120%'
                  height='120%'
                >
                  <feDropShadow
                    dx='0'
                    dy='12'
                    stdDeviation='8'
                    floodColor='#33312D'
                    floodOpacity='0.15'
                  />
                </filter>
              </defs>

              <g filter='url(#soft-shadow)'>
                {/* Base Jute Body */}
                <path
                  d='M -100,150 Q 150,350 500,150 T 1100,150'
                  fill='none'
                  stroke='#D1B9A1'
                  strokeWidth='14'
                  strokeLinecap='round'
                />

                {/* Shadow Twist (creates the spiral illusion) */}
                <path
                  d='M -100,150 Q 150,350 500,150 T 1100,150'
                  fill='none'
                  stroke='#B09375'
                  strokeWidth='14'
                  strokeDasharray='10 14'
                  strokeLinecap='butt'
                />

                {/* Highlight Twist (adds 3D volume to the strands) */}
                <path
                  d='M -100,150 Q 150,350 500,150 T 1100,150'
                  fill='none'
                  stroke='#EAE0D5'
                  strokeWidth='8'
                  strokeDasharray='10 14'
                  strokeDashoffset='5'
                  strokeLinecap='butt'
                />

                {/* Inner Crease / Depth detail */}
                <path
                  d='M -100,150 Q 150,350 500,150 T 1100,150'
                  fill='none'
                  stroke='#876B50'
                  strokeWidth='3'
                  strokeDasharray='10 14'
                  strokeDashoffset='-2'
                  strokeLinecap='round'
                />
              </g>
            </svg>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto'>
            {features.map((feature, idx) => {
              // Adjust vertical offsets to perfectly intersect the bezier curve
              let yOffset = "md:translate-y-0"
              if (idx === 0) yOffset = "md:translate-y-[85px]" // Left: Sits in the first trough
              if (idx === 1) yOffset = "md:-translate-y-[10px]" // Middle: Rides up near the crossing point
              if (idx === 2) yOffset = "md:-translate-y-[85px]" // Right: Rides high on the peak

              // Alternating subtle rotation for a natural hanging feel
              let rotateClass = ""
              if (idx === 0) rotateClass = "md:-rotate-1"
              if (idx === 1) rotateClass = "md:rotate-1"
              if (idx === 2) rotateClass = "md:-rotate-1"

              return (
                <div
                  key={idx}
                  className={`scroll-up-card relative ${yOffset} ${rotateClass}`}
                >
                  <div className='bg-[#FFE8CA] border-2 border-[#33312D] rounded-[24px] p-8 shadow-[0px_8px_0px_0px_#33312D] flex flex-col gap-4 hover:-translate-y-2 hover:shadow-[0px_12px_0px_0px_#33312D] transition-all duration-300 h-full group'>
                    {/* Realistic Leather Craft Strap hanging from the rope */}
                    <div className='absolute -top-[34px] left-1/2 -translate-x-1/2 w-6 h-[40px] hidden md:flex flex-col items-center z-[-1]'>
                      {/* Loop passing over the rope */}
                      <div className='w-6 h-[20px] rounded-t-full border-4 border-b-0 border-[#8A6745] bg-[#FFF6EB] bg-opacity-40' />
                      {/* Flat leather strap dropping to the card */}
                      <div className='w-6 h-[24px] bg-[#8A6745] rounded-b-[2px] shadow-sm relative flex justify-center'>
                        {/* Brass Rivet */}
                        <div className='absolute bottom-1.5 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.5)] border border-[#5C452F]' />
                      </div>
                    </div>

                    <div className='w-16 h-16 bg-[#FFF6EB] border-2 border-[#33312D] rounded-[16px] flex items-center justify-center shadow-[4px_4px_0px_0px_#33312D] shrink-0'>
                      {feature.icon}
                    </div>

                    <h3 className='text-2xl font-bold text-[#33312D] mt-2'>{feature.title}</h3>

                    <p className='text-[#6E675E] text-lg font-medium leading-relaxed'>{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
