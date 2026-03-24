import { useTranslation } from "react-i18next"
import { Button, Input } from "shared"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className='section-dots-bg w-full bg-[#F5F5DC] px-0 md:px-12 pt-12 md:pb-10 md:py-12 overflow-visible md:overflow-hidden'>
      <div className='relative z-15 w-full max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:pb-16 sm:pb-12 md:pb-0 md:min-h-[calc(100dvh-200px)]'>
        {/* Left Text Side */}
        <div className='relative flex-1 flex flex-col md:gap-6 max-w-2xl w-full z-20 -mt-28 sm:-mt-24 md:mt-0 pt-[50px] md:pt-0 py-6 px-6 sm:px-8 md:px-0'>
          <div className='absolute inset-x-0 -top-[50px] bottom-[-5%] bg-gradient-to-t from-white from-45% via-white/95 via-70% to-transparent md:hidden pointer-events-none z-0' />

          <h1 className='relative z-10 scroll-up-title text-4xl md:text-6xl lg:text-7xl font-bold text-[#33312D] leading-[1.1] tracking-tight'>
            {t("hero.title")}
          </h1>
          <p className='relative z-10 scroll-up-text text-lg md:text-xl text-[#6E675E] leading-relaxed max-w-xl'>
            {t("hero.subtitle")}
          </p>

          <form className='relative z-10 scroll-up-text flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-lg'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='w-full bg-white/50 border border-[#998B79] text-[#33312D] px-6 py-4 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-[#FF7F50] placeholder:text-[#998B79] shadow-[0px_3px_0px_0px_#E5D5C5]'
              required
            />
            <Button
              variant='yellow'
              type='submit'
              className='font-bold text-lg px-8 py-4 h-auto rounded-[24px] transition-all whitespace-nowrap'
            >
              {t("hero.cta")}
            </Button>
          </form>
        </div>

        {/* Right Visual Side */}
        <div className='flex-1 relative flex items-center justify-center min-h-[400px] md:min-h-[600px] w-full'>
          {/* Main Character */}
          <div className='scroll-up-card relative z-10 w-full max-w-[400px] rounded-[24px] overflow-hidden'>
            <img
              src={"/mock.png"}
              alt='Platy Card'
              className='w-full h-auto object-contain'
            />
          </div>

          {/* Floating Icons */}
          <FloatingIcon
            src='/logos/Netflix_Symbol_RGB.png'
            alt='Netflix'
            className='absolute z-10 top-[15%] left-0 md:left-[-5%] bg-white p-4 rounded-2xl shadow-lg border border-[#998B79]/20'
            delay={0}
          />
          <FloatingIcon
            src='/logos/spotify.png'
            alt='Spotify'
            className='absolute bottom-[22%] md:bottom-[-10%] left-[0%] md:left-[+10%] bg-white p-4 rounded-2xl shadow-lg border border-[#998B79]/20 z-10'
            delay={1.5}
          />
          <FloatingIcon
            src='/logos/OpenAI-white-monoblossom.svg'
            alt='OpenAI'
            className='absolute top-[25%] right-[3%] md:right-[-15%] xl:right-[5%] bg-white p-4 rounded-2xl shadow-lg border border-[#998B79]/20 z-10'
            delay={0.8}
          />

          {/* Background decorative blob */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF7F50]/10 rounded-full blur-[80px] -z-10' />

          {/* Mobile readability fade for overlapping text */}
        </div>
      </div>
    </section>
  )
}

function FloatingIcon({ src, alt, className, delay }: { src: string; alt: string; className: string; delay: number }) {
  return (
    <div
      className={className}
      style={{
        animation: `float-icon 4s ease-in-out ${delay}s infinite`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className='w-10 h-10 md:w-14 md:h-14 object-contain'
      />
    </div>
  )
}
