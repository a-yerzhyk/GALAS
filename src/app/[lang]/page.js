import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/i18n/get-dictionary'
import LanguageSwitch from './components/LanguageSwitch'
import FundraisingArmy from './components/FundraisingArmy'
import FundraisingAnimals from './components/FundraisingAnimals'
import ReportsList from './components/ReportsList'

import logoLight from '@/assets/logo-light.svg'
import logoBlack from '@/assets/logo-black.svg'
import logoBig from '@/assets/logo-big.svg'
import trigent from '@/assets/trigent.svg'
import revolut from '@/assets/revolut.svg'
import paypal from '@/assets/paypal.svg'
import pomagam from '@/assets/pomagam.svg'
import instagram from '@/assets/instagram.svg'
import mail from '@/assets/mail.svg'
import TextToCopy from './components/TextToCopy'

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <header className="fixed bg-black-secondary z-10 w-full">
        <div className="container px-6 lg:px-24 py-4 flex justify-between items-center sm:gap-8">
          <Image src={logoLight} alt="logo-light" height="60" />
          <nav className="flex-1 hidden xl:block">
            <ul className="flex justify-between items-center min-[1560px]:gap-[100px] min-[1560px]:justify-center">
              <li>
                <a className="navigation-item navigation-item__active" href="#army">{dictionary.header.navigation.armySupport}</a>
              </li>
              <li>
                <a className="navigation-item navigation-item__active" href="#animals">{dictionary.header.navigation.animalsSupport}</a>
              </li>
              <li>
                <a className="navigation-item navigation-item__active" href="#about">{dictionary.header.navigation.about}</a>
              </li>
              <li>
                <a className="navigation-item navigation-item__active" href="#reports">{dictionary.header.navigation.reports}</a>
              </li>
            </ul>
          </nav>
          <div>
            <LanguageSwitch lang={lang}/>
          </div>
          <a className="button button_small button_yellow" href="#support">{dictionary.support}</a>
        </div>
      </header>
      <main className="container">
        <section className="relative py-20 lg:h-screen pt-[170px] flex flex-col items-start justify-center gap-y-[110px] px-6 lg:px-28 mb-20 overflow-hidden">
          <Image className="absolute -right-[200px] lg:right-[68px] -z-10 h-[500px] lg:h-[75%]" src={trigent} alt="trident" />
          <div className="max-w-[330px] md:max-w-none">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl xl:leading-[104px] font-light tracking-widest uppercase mb-3 font-alternates">
              "{dictionary.quote.firstLine}
              <br />
              {dictionary.quote.secondLine}"
            </h2>
            <p className="text-base lg:text-2xl font-extralight uppercase">{dictionary.quoteAuthor}</p>
          </div>
          <a className="button button_large button_blue" href="#support">{dictionary.support}</a>
        </section>

        <a className="relative -top-[100px]" id="army"></a>
        <section className="mb-5 lg:mb-28">
          <FundraisingArmy dictionary={dictionary} />          
        </section>

        <section className="border-[3px] border-yellow rounded-2xl px-4 py-6 lg:px-12 lg:pt-[52px] lg:pb-[63px] mx-6 lg:mx-14 mb-20">
          <div className="flex flex-col lg:flex-row justify-between gap-x-[100px] gap-y-8">
            <div className="flex-1">
              <p className="text-2xl lg:text-5xl font-alternates text-yellow uppercase mb-6">
                {dictionary.armySupportSection.title}
              </p>
              <p className="text-base font-light">
                {dictionary.armySupportSection.firstDescription['1']}
                <b className="font-bold">{dictionary.armySupportSection.firstDescription['2']}</b>
                {dictionary.armySupportSection.firstDescription['3']}
                <b className="font-bold">{dictionary.armySupportSection.firstDescription['4']}</b>
                {dictionary.armySupportSection.firstDescription['5']}
                <b className="font-bold">{dictionary.armySupportSection.firstDescription['6']}</b>
                {dictionary.armySupportSection.firstDescription['7']}
                <b className="font-bold">{dictionary.armySupportSection.firstDescription['8']}</b>
                {dictionary.armySupportSection.firstDescription['9']}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-base font-light mb-6">
                {dictionary.armySupportSection.secondDescription['1']}
                <b className="font-bold">{dictionary.armySupportSection.secondDescription['2']}</b>
                {dictionary.armySupportSection.secondDescription['3']}
                <b className="font-bold">{dictionary.armySupportSection.secondDescription['4']}</b>
                {dictionary.armySupportSection.secondDescription['5']}
                <b className="font-bold">{dictionary.armySupportSection.secondDescription['6']}</b>
              </p>
              <p className="hidden lg:block text-2xl font-alternates text-yellow uppercase">
                {dictionary.armySupportSection.endingTitle}
              </p>
            </div>
          </div>
        </section>
        
        <section className="lg:hidden px-6 mb-12">
          <p className="text-2xl font-alternates text-yellow uppercase text-center">
            {dictionary.armySupportSection.endingTitle}
          </p>
        </section>

        <section className="px-6 mb-11 lg:mb-20">
          <h3 className="text-3xl lg:text-5xl lg:leading-[60px] font-light font-alternates text-blue text-center uppercase">
            {dictionary.tomorrowOneDayCloseToVictory['1']}
            <br />
            {dictionary.tomorrowOneDayCloseToVictory['2']}
          </h3>
        </section>
        
        <a className="relative -top-[100px]" id="animals"></a>
        <section className="mb-14 lg:mb-20">
          <FundraisingAnimals dictionary={dictionary} />
        </section>

        <section className="border-[3px] border-yellow rounded-2xl px-4 py-6 lg:px-12 lg:pt-[52px] lg:pb-[63px] mx-6 lg:mx-14 mb-9 lg:mb-20">
          <div className="flex flex-col lg:flex-row justify-between gap-x-[100px] gap-y-8">
            <div className="flex-1">
              <p className="text-2xl lg:text-5xl font-alternates text-yellow uppercase mb-6">
                {dictionary.animalSupportSection.title}
              </p>
              <p className="text-base font-light">
                {dictionary.animalSupportSection.firstDescription['1']}
                <b className="font-bold">{dictionary.animalSupportSection.firstDescription['2']}</b>
                {dictionary.animalSupportSection.firstDescription['3']}
                <b className="font-bold">{dictionary.animalSupportSection.firstDescription['4']}</b>
                {dictionary.animalSupportSection.firstDescription['5']}
                <b className="font-bold">{dictionary.animalSupportSection.firstDescription['6']}</b>
              </p>
            </div>
            <div className="flex-1">
              <p className="text-base font-light mb-6">
                {dictionary.animalSupportSection.secondDescription['1']}
                <b className="font-bold">{dictionary.animalSupportSection.secondDescription['2']}</b>
                {dictionary.animalSupportSection.secondDescription['3']}
                <b className="font-bold">{dictionary.animalSupportSection.secondDescription['4']}</b>
                {dictionary.animalSupportSection.secondDescription['5']}
                <b className="font-bold">{dictionary.animalSupportSection.secondDescription['6']}</b>
                {dictionary.animalSupportSection.secondDescription['7']}
                <b className="font-bold">{dictionary.animalSupportSection.secondDescription['8']}</b>
              </p>
            </div>
          </div>
        </section>
        
        <section className="px-6 mb-9 lg:mb-20">
          <h3 className="text-3xl lg:text-5xl lg:leading-[60px] font-light font-alternates text-blue text-center uppercase">
            {dictionary.getOutRussian['1']}
            <sub className="text-2xl">{dictionary.getOutRussian['2']}</sub>
            {dictionary.getOutRussian['3']}
          </h3>
        </section>

        <a className="relative -top-[100px]" id="about"></a>
        <section className="border-[3px] border-yellow rounded-2xl px-4 pt-5 pb-7 lg:pl-[80px] lg:pr-[90px] 2xl:pl-[194px] 2xl:pr-[118px] lg:pt-[84px] lg:pb-[70px] mx-6 lg:mx-14 mb-6 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:mb-16 gap-y-5 lg:gap-y-0 justify-between custom-scrollbar ">
            <div className="flex-1 flex flex-col items-center gap-y-[60px]">
              <p className="text-2xl lg:text-4xl 2xl:text-5xl font-alternates text-yellow uppercase">
                {dictionary.aboutUs.title}
              </p>
              <Image className="hidden lg:block" src={logoBig} alt="GALAS Logo" width="250" />
            </div>
            <div className="flex-1">
              <p className="text-base font-light">
                <b className="font-bold">{dictionary.aboutUs.descriptionTitle}</b>
                <br />
                {
                  Object.keys(dictionary.aboutUs.description).map((paragraphKey) => (
                    <>
                      {
                        Object.keys(dictionary.aboutUs.description[paragraphKey]).map((key, index) => (
                          index % 2 === 0
                          ? dictionary.aboutUs.description[paragraphKey][key]
                          : <b className="font-bold">{dictionary.aboutUs.description[paragraphKey][key]}</b>
                        ))
                      }
                      <br />
                      <br />
                    </>
                  ))
                }
              </p>
            </div>
          </div>
          <p className="hidden lg:block text-2xl text-yellow text-center uppercase">
            {dictionary.aboutUs.footer}
          </p>
        </section>
        
        <section className="lg:hidden px-6 mb-4">
          <p className="text-base text-yellow text-center uppercase">
            {dictionary.aboutUs.footer}
          </p>
        </section>

        <section className="px-6 mb-10 lg:mb-32">
          <h3 className="text-3xl lg:text-5xl lg:leading-[60px] font-light font-alternates text-blue text-center uppercase">
            {dictionary.weAreFromUkraine}
          </h3>
        </section>

        <a className="relative -top-[100px]" id="reports"></a>
        <section className="border-[3px] border-yellow rounded-2xl px-4 pt-5 lg:px-[50px] lg:pt-[84px] mx-6 mb-14 lg:mx-14 lg:mb-20">
          <p className="text-3xl font-alternates text-yellow uppercase mb-6">
            {dictionary.reports.title}
          </p>
          <p className="text-base font-light max-w-[420px]">
            {dictionary.reports.description}
          </p>
          <div className="mt-[50px] max-h-[530px] overflow-auto pb-5 lg:pb-[84px] custom-scrollbar">
            <ReportsList />
          </div>
        </section>
        
        <a className="relative -top-[100px]" id="support"></a>
        <section className="relative px-8 mb-8 lg:mb-16 2xl:px-28 2xl:mb-20 overflow-hidden">
          <h3 className="text-2xl lg:text-5xl leading-[60px] font-light font-alternates text-yellow text-center uppercase">
            {dictionary.howToHelp.title}
          </h3>
          <div className="flex justify-between items-center sm:px-16">
            <div className="py-20 lg:py-0 h-full flex flex-col items-start justify-center gap-y-6">
              <a className="flex items-center gap-4 lg:gap-7" href="https://revolut.me/galasua" target="_blank">
                <Image className="h-[45px] w-[50px] lg:h-[88px] lg:w-[90px]" src={revolut} alt="revolut-logo" />
                <span className="text-lg lg:text-3xl">LT24 3250 0112 4588 1750</span>
              </a>
              <a className="flex items-center gap-4 lg:gap-7" href="https://www.paypal.me/Galasua" target="_blank">
                <Image className="h-[45px] w-[50px] lg:h-[88px] lg:w-[90px]" src={paypal} alt="paypal-logo" />
                <span className="text-lg lg:text-3xl">paypal.me/Galasua</span>
              </a>
              <a className="flex items-center gap-4 lg:gap-7" href="https://pomagam.pl/galas_ua" target="_blank">
                <Image className="h-[45px] w-[50px] lg:h-[88px] lg:w-[90px]" src={pomagam} alt="pomagam-logo" />
                <span className="text-lg lg:text-3xl">pomagam.pl/galas_ua</span>
              </a>
              <div>
                <div className="text-lg lg:text-3xl">
                  <b>Konto Polskie:</b> <TextToCopy text="PL77 1240 6380 1111 0011 2402 4325" />
                </div>
                <div className="text-lg lg:text-3xl">
                  <b>BIC/SWIFT:</b> <TextToCopy text="PKOPPLPW" />
                </div>
              </div>
              <p className="">* <span className="underline">{dictionary.howToHelp.info}</span></p>
            </div>
            <Image className="absolute -right-[150px] lg:static h-[300px] lg:h-[500px] xl:h-[700px] -z-10" src={trigent} alt="trident" />
          </div>
        </section>
      </main>
      <footer className="bg-white text-black">
        <div className="container px-8 pt-4 pb-11 lg:px-14 lg:py-[70px] flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row justify-between gap-y-[10px] gap-x-[30px]">
            <div className="space-y-2 sm:flex justify-between items-center flex-wrap flex-col sm:flex-row lg:block">
              <div className="sm:flex-1 sm:basis-[41%]">
                <Image className="w-fit h-[60px] lg:h-[127px]" src={logoBlack} alt="galas_logo_black" />
              </div>
              <div className="w-full sm:flex-1 sm:basis-[59%] flex justify-between lg:hidden text-lg font-bold uppercase break-keep">
                <Link className="" href="#about">{dictionary.footer.aboutUs}</Link>
                <Link className="" href="#reports">{dictionary.footer.reports}</Link>
              </div>
            </div>
            <div className="flex-1 flex justify-between gap-[80px]">
              <div className="flex-1 basis-[730px] flex flex-col gap-[10px] justify-between">
                <div className="text-base">{dictionary.footer.permissions}</div>
                {/* <div className="flex justify-between text-base font-bold flex-wrap gap-2">
                  <Link href="#">{dictionary.footer.privacy}</Link>
                  <Link href="#">{dictionary.footer.publicOffer}</Link>
                  <Link href="#">{dictionary.footer.avaliability}</Link>
                </div> */}
              </div>
              <div className="hidden lg:flex flex-1 basis-[200px] flex-col gap-8 text-lg font-bold uppercase">
                <Link href="#about">{dictionary.footer.aboutUs}</Link>
                <Link href="#reports">{dictionary.footer.reports}</Link>
              </div>
              <div className="hidden 2xl:block flex-1 basis-[360px] space-y-6 font-bold">
                <div className="text-base">{dictionary.footer.contact}:</div>
                <a href="https://www.instagram.com/galas_ua" target="_blank" className="flex gap-4 items-center">
                  <Image src={instagram} alt="instagram" height="40" />
                  galas_ua
                </a>
                <a href="mailto:foundation.galas@gmail.com" className="flex gap-4 items-center">
                  <Image src={mail} alt="mail" height="40" />
                  foundation.galas@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="2xl:hidden flex flex-col sm:flex-row justify-between lg:justify-end gap-6 font-bold">
            <a href="https://www.instagram.com/galas_ua" target="_blank" className="flex gap-4 items-center">
              <Image src={instagram} alt="instagram" height="40" />
              galas_ua
            </a>
            <a href="mailto:foundation.galas@gmail.com" className="flex gap-4 items-center">
              <Image src={mail} alt="mail" height="40" />
              foundation.galas@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
