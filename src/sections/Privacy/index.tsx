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
      className='section-dots-bg w-full bg-[#FFF6EB] py-24 px-6 md:px-12 border-t border-[#998B79]'
    >
      <div className='relative z-10 w-full max-w-[1440px] mx-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#33312D] tracking-tight'>{t("privacy.title")}</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, idx) => (
              <div
                key={idx}
                className='bg-[#FFE8CA] border border-[#998B79] rounded-[24px] p-8 shadow-[0px_4px_0px_0px_#807465] flex flex-col gap-4 hover:-translate-y-1 transition-transform'
              >
                <div className='w-16 h-16 bg-[#FFF6EB] border border-[#998B79] rounded-[16px] flex items-center justify-center shadow-[0px_2px_0px_0px_#807465]'>
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold text-[#33312D] mt-2'>{feature.title}</h3>
                <p className='text-[#6E675E] text-lg leading-relaxed'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
