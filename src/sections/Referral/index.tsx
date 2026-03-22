import { useTranslation } from "react-i18next"
import { Button } from "shared"

export function Referral() {
  const { t } = useTranslation()

  return (
    <section
      id='referral'
      className='w-full relative py-24 px-6 md:px-12 border-t border-[#998B79] overflow-hidden'
    >
      {/* Background Texture */}
      <div
        className='absolute inset-0 z-0 bg-[#E5D5C5]'
        style={{
          backgroundImage: `url(/main.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "-500px",
          mixBlendMode: "multiply",
          opacity: 0.6,
        }}
      />

      <div className='relative z-10 w-full max-w-[1440px] mx-auto'>
        <div className='max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row-reverse items-center gap-12'>
          <div className='flex-1 flex flex-col gap-6 bg-[#FFF6EB]/90 backdrop-blur-sm p-8 md:p-12 rounded-[24px] border border-[#998B79] shadow-[0px_8px_0px_0px_#807465]'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#33312D] tracking-tight'>{t("referral.title")}</h2>
            <p className='text-xl md:text-2xl text-[#6E675E] leading-relaxed'>{t("referral.subtitle")}</p>
            <Button className='mt-4 w-fit font-bold text-lg px-8 py-4 h-auto rounded-[24px] transition-all'>
              {t("referral.cta")}
            </Button>
          </div>

          <div className='flex-1 flex justify-center items-center w-full'>
            <div className='relative w-full max-w-[400px] aspect-square rounded-full border-4 border-[#998B79] border-dashed flex items-center justify-center bg-[#FFE8CA] shadow-[inset_0px_10px_20px_rgba(0,0,0,0.05)]'>
              <img
                src={"/back.png"}
                alt='Gentleman Animal'
                className='absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full mix-blend-luminosity opacity-80'
              />
              <div className='absolute inset-0 flex items-center justify-center z-10'>
                <div className='bg-[#FFF6EB] p-6 rounded-full border-2 border-[#998B79] shadow-xl'>
                  <img
                    src='/usd.svg'
                    alt='usd'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
