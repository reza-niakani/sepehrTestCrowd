/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import DataContext from 'comon/context/MainContext';
import { Link, useLocation } from 'react-router-dom';
import InlineSVG from 'react-inlinesvg';
import useDeviceDetection from 'comon/DeviceDetector/useDeviceDetection';
import mainLogo from 'asset/Pictures/logo/CompanyMainLogo.svg';
import alert from 'asset/Pictures/Icons/alertcircle.svg';
import AccordionFaqModel from 'comon/Accordion/AccordionFaqModel';

function Footer() {
  const { role } = useContext(DataContext);
  const [phoneNumber, setPhoneNumber] = useState();
  const isMobile = useDeviceDetection();

  const handleScrollToTop = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      console.log('Main content not found');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  const InvestingFundsLinks = [
    { title: 'صندوق درآمد ثابت ثبات', rout: '' },
    { title: 'صندوق درآمد ثابت آکام', rout: '' },
    { title: 'صندوق بخشی بهین خودرو', rout: '' },
    { title: 'صندوق سهام ویستا', rout: '' },
    { title: 'صندوق طلای زروان', rout: '' },
    { title: 'صندوق بازارگردانی تراز', rout: '' }
  ];
  const VistaFinancialServices = [
    { title: 'سبدگردانی اختصاصی', rout: '' },
    { title: 'تامین مالی', rout: '' },
    { title: 'عرضه و پذیرش', rout: '' },
    { title: 'مشاوره سرمایه‌گذاری', rout: '' },
    { title: 'بازارگردانی', rout: '' },
    { title: 'آپشنیست', rout: '' }
  ];

  const QuickAccess = [
    { title: 'مقالات', rout: '' },
    { title: 'درباره ما', rout: '' },
    { title: 'تماس با ما', rout: '' },
    { title: 'سنجش ریسک', rout: '' }
  ];

  return (
    <footer className="w-full bg-[url('asset/Pictures/BackGround/footerBackground.svg')] bg-right-top bg-cover bg-no-repeat bg-[#f9fafb] flex justify-center items-center pb-10">
      <div className="lg:w-[70%] w-[95%] flex flex-col justify-start items-center gap-y-8">
        {/* line 1 */}
        <div className="w-full flex justify-start">
          <InlineSVG src={mainLogo} className="lg:w-[330px] lg:h-[90px] w-[215px] h-[55px]" />
        </div>
        {/* line 2 */}
        <div className="w-full lg:justify-between justify-start lg:items-start items-center flex lg:flex-row flex-col flex-nowrap gap-y-3 lg:gap-x-16   h-auto lg:pb-12">
          {/* info */}
          <div className="lg:w-auto lg:max-w-[330px] w-full flex flex-col justify-start items-center  lg:gap-y-3 gap-y-2">
            <div className="w-full flex justify-start items-start gap-x-2 ">
              <span className=" lg:text-base text-sm font-bold text-gray-700 ">آدرس:</span>
              <span className=" text-gray-500 text-sm  font-bold  ">
                تهران، خیابان فخار مقدم، پایین‌تر از خیابان برادران نوری، پلاک ۲۴، طبقه ۵
              </span>
            </div>
            <div className="w-full flex justify-start items-center gap-x-2 ">
              <span className=" lg:text-base text-sm font-bold text-gray-700 ">کد پستی:</span>
              <span className=" text-gray-500 text-base  font-bold ">۱۴۶۸۸۷۳۷۲۱ </span>
            </div>
            <div className="w-full flex justify-start items-center gap-x-2 ">
              <span className=" lg:text-base text-sm font-bold text-gray-700">شماره تماس:</span>
              <a
                href="tel:۰۲۱۵۹۱۶۲۰۰۰"
                className=" text-gray-500 text-base  font-bold hover:text-blue-600  ">
                ۰۲۱۵۹۱۶۲۰۰۰{' '}
              </a>
            </div>
            <div className="w-full flex justify-start items-center gap-x-2 ">
              <span className=" lg:text-base text-sm font-bold "> ایمیل :</span>
              <a
                href="mailto:info@vistaamc.com"
                className=" text-gray-500 text-base  font-bold hover:text-blue-600  ">
                info@vistaamc.com{' '}
              </a>
            </div>
          </div>
          {/* links  */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-start  lg:gap-x-10 justify-start lg:items-start items-center gap-y-3">
            {/* Investing Funds */}
            <div className="lg:w-auto w-full flex flex-col gap-y-3 items-center">
              {isMobile ? (
                <AccordionFaqModel
                  answer={
                    <div className="w-full flex flex-col items-start gap-y-2 text-gray-500 text-sm font-bold">
                      {' '}
                      {InvestingFundsLinks?.map((item, index) => (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                          href={item.rout}
                          className="w-full   text-nowrap text-start  hover:text-blue-600">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  }
                  question={'صندوق‌های سرمایه‌گذاری'}
                />
              ) : (
                <>
                  {' '}
                  <span className=" text-base font-bold text-start text-gray-700">
                    صندوق‌های سرمایه‌گذاری
                  </span>
                  <div className="w-full flex flex-col items-start justify-start gap-y-2 text-gray-500 text-sm  font-bold">
                    {' '}
                    {InvestingFundsLinks?.map((item, index) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        href={item.rout}
                        className="w-full   text-nowrap text-start  hover:text-blue-600">
                        {item.title}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* funds */}
            <div className="lg:w-auto w-full flex flex-col gap-y-3 items-center">
              {isMobile ? (
                <AccordionFaqModel
                  answer={
                    <div className="w-full flex flex-col items-start gap-y-2 text-gray-500 text-sm font-bold">
                      {' '}
                      {VistaFinancialServices?.map((item, index) => (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                          href={item.rout}
                          className="w-full   text-nowrap text-start  hover:text-blue-600">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  }
                  question={'خدمات مالی ویستا'}
                />
              ) : (
                <>
                  {' '}
                  <span className=" text-base font-bold text-start text-gray-700">
                    خدمات مالی ویستا{' '}
                  </span>
                  <div className="w-full flex flex-col items-start justify-start gap-y-2 text-gray-500 text-sm  font-bold">
                    {' '}
                    {VistaFinancialServices?.map((item, index) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        href={item.rout}
                        className="w-full   text-nowrap text-start  hover:text-blue-600">
                        {item.title}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* quick access */}
            <div className="lg:w-auto w-full flex flex-col gap-y-3 items-center">
              {isMobile ? (
                <AccordionFaqModel
                  question={'دسترسی سریع'}
                  answer={
                    <div className="w-full flex flex-col items-start gap-y-2 text-gray-500 text-sm font-bold">
                      {' '}
                      {QuickAccess?.map((item, index) => (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                          href={item.rout}
                          className="w-full   text-nowrap text-start  hover:text-blue-600">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  }
                />
              ) : (
                <>
                  {' '}
                  <span className=" text-base font-bold text-start text-gray-700">دسترسی سریع</span>
                  <div className="w-full flex flex-col items-start justify-start gap-y-2 text-gray-500 text-sm  font-bold">
                    {' '}
                    {QuickAccess?.map((item, index) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        href={item.rout}
                        className="w-full   text-nowrap text-start  hover:text-blue-600">
                        {item.title}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* line 3 */}
        <div className="w-full flex lg:justify-between lg:flex-row flex-col justify-start gap-y-3 items-center py-2 lg:border-t ">
          <span className="w-auto flex lg:justify-start justify-center gap-x-1  text-xs text-gray-600  items-center  lg:order-1 order-2 ">
            <InlineSVG src={alert} />
            تمامی حقوق مادی و معنوی متعلق به شرکت سبدگردانی ویستا می باشد.
          </span>
          {/* <div className="w-auto flex lg:justify-end justify-center gap-x-3  items-center  lg:order-2 order-1 ">
            <a href="https://www.instagram.com/vista.amc" target="_blank" rel="noreferrer">
              <InlineSVG src={Instagram} />
            </a>{' '}
            <a href="https://t.me/vistaamc" target="_blank" rel="noreferrer">
              <InlineSVG src={telegram} />
            </a>
            <a
              href="https://ir.linkedin.com/company/%D8%B3%D8%A8%D8%AF%DA%AF%D8%B1%D8%AF%D8%A7%D9%86-%D9%88%DB%8C%D8%B3%D8%AA%D8%A7"
              target="_blank"
              rel="noreferrer">
              <InlineSVG src={linkedin} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
