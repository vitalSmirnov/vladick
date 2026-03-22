import { useTranslation } from "react-i18next"
import { Button, Input } from "shared"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className='section-dots-bg w-full bg-[#F5F5DC] min-h-[calc(100dvh-200px)] px-6 md:px-12 py-12 overflow-hidden'>
      <div className='relative z-10 w-full max-w-[1440px] mx-auto min-h-[calc(100dvh-200px)] flex flex-col-reverse md:flex-row items-center gap-12'>
        {/* Left Text Side */}
        <div className='flex-1 flex flex-col gap-6 max-w-2xl z-10'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-[#33312D] leading-[1.1] tracking-tight'>
            {t("hero.title")}
          </h1>
          <p className='text-lg md:text-xl text-[#6E675E] leading-relaxed max-w-xl'>{t("hero.subtitle")}</p>

          <form className='flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-lg'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='w-full bg-white/50 border border-[#998B79] text-[#33312D] px-6 py-4 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-[#FF7F50] placeholder:text-[#998B79] shadow-[0px_3px_0px_0px_#E5D5C5]'
              required
            />
            <Button
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
          <div className='relative z-10 w-full max-w-[400px] rounded-[24px] overflow-hidden'>
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
            className='absolute top-[15%] left-0 md:left-[-5%] bg-white p-4 rounded-2xl shadow-lg border border-[#998B79]/20'
            delay={0}
          />
          <FloatingIcon
            src='/logos/spotify.png'
            alt='Spotify'
            className='absolute bottom-[-10%] left-[0%] md:left-[+10%] bg-white p-4 rounded-2xl shadow-lg border border-[#998B79]/20'
            delay={1.5}
          />
          <FloatingIcon
            src='/logos/OpenAI-white-monoblossom.svg'
            alt='OpenAI'
            className='absolute top-[50%] right-[5%] md:right-[+18%] bg-white p-4 rounded-2xl shadow-lg border border-[#998B79]/20 z-10'
            delay={0.8}
          />

          {/* Background decorative blob */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF7F50]/10 rounded-full blur-[80px] -z-10' />
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
        className='w-8 h-8 object-contain'
      />
    </div>
  )
}
