/* eslint-disable no-unused-vars */
import React from 'react';
import RequestForConsulting from './components/RequestForConsulting';
import { Link } from 'react-router-dom';
import InlineSVG from 'react-inlinesvg';
import chevronLeftgreen from 'asset/Pictures/Icons/chevronLeftgreen.svg';
import PlanCardSlider from './components/PlanCardSlider';
import useDeviceDetection from 'comon/DeviceDetector/useDeviceDetection';
import chart from 'asset/Pictures/Images/upChart.svg';
import advertismentsMobile from 'asset/Pictures/Images/advertismentsMobile.svg';
import advertismentsDesktop from 'asset/Pictures/Images/advertismentsDesktop.svg';
import Articles from './components/Articles';
import AccordionFaqModel from 'comon/Accordion/AccordionFaqModel';
import { FAQEnum } from 'comon/DB/FAQ';

function HomePage() {
  const isMobile = useDeviceDetection();

  const CommercialPartner = [
    { name: '', pic: '', link: '' },
    { name: '', pic: '', link: '' },
    { name: '', pic: '', link: '' },
    { name: '', pic: '', link: '' },
    { name: '', pic: '', link: '' },
    { name: '', pic: '', link: '' }
  ];

  return (
    <div className="w-screen flex flex-col  justify-start lg:gap-y-40  gap-y-16 h-auto items-center  ">
      {/* banner part  */}
      <div className="  lg:bg-[url('asset/Pictures/BackGround/desktopBanner.svg')] bg-[url('asset/Pictures/BackGround/mobileBanner.svg')] bg-cover w-screen  bg-no-repeat  bg-center h-[600px] flex justify-center lg:items-end items-end lg:py-0 py-6  ">
        {/* consulting form  request*/}
        <RequestForConsulting />
      </div>
      <div className="w-full flex flex-col lg:gap-y-32 gap-y-20  justify-start h-auto items-center py-10 ">
        {/* plans */}
        <div className="w-full flex flex-col lg:gap-y-28 gap-y-5  justify-center items-center max-w-[1920px] lg:min-[1300px] bg-[url('asset/Pictures/BackGround/rectangelBackGround.svg')] bg-cover bg-inherit bg-no-repeat  ">
          <div className="lg:w-[70%] w-[95%] flex justify-between items-center  ">
            <span className=" text-sm lg:text-[32px] font-black ">
              طرح‌های آماده سرمایه گذاری توسط ویستا
            </span>
            <Link
              to="/all_plans"
              className="flex justify-end items-center lg:gap-x-2 lg:text-base text-xs font-black text-green-1000">
              مشاهده همه <InlineSVG src={chevronLeftgreen} />
            </Link>
          </div>
          <div className="lg:w-[80%] w-full flex justify-center items-center  ">
            <PlanCardSlider />
          </div>
        </div>
        {/* crowdfunding introduction */}
        <div className="lg:w-[70%] w-[95%] flex lg:p-10 py-4 px-3 justify-start  gap-y-3  flex-col  items-start lg:bg-[url('asset/Pictures/BackGround/handBgDesktop.svg')] text-white lg:h-[480px] h-[700px] rounded-large bg-[url('asset/Pictures/BackGround/handBgmobile.svg')] bg-cover lg:max-w-[1400px] bg-no-repeat  bg-center  ">
          <div className="w-full lg:w-[90%] flex flex-col lg:text-3xl  text-lg font-black text-start  items-start  justify-start h-auto lg:gap-y-4 ">
            <span>کرادفاندینگ</span>
            <span>مقایسه آنلاین فرصت‌های پرسود در ویستا</span>
          </div>
          <p
            className="w-full lg:w-[50%] flex flex-col lg:text-base   text-sm font-bold text-justify  items-start  justify-start h-auto  "
            style={{ lineHeight: isMobile ? '20px' : '30px' }}>
            کرادفاندینگ یا تامین مالی جمعی فرصتی برای شریک شدن در سود شرکت‌ها و کسب و کارهای متفاوت
            است
          </p>
          <p
            style={{ lineHeight: isMobile ? '25px' : '30px' }}
            className="w-full lg:w-[50%] flex flex-col lg:text-sm   text-xs text-justify font-medium  items-start  justify-start h-auto gap-y-2  ">
            کرادفاندینگ (سرمایه گذاری جمعی) یک معامله خوب برای طرفین است چرا که سرمایه‌گذاران با این
            روش می‌توانند سود بالاتر از دیگر روش‌ها دریافت کنند و در اداره یک کسب و کار موفق شریک
            باشند. طرح‌های فعال در سرمایه گذاری جمعی بازده بالاتری نسبت به دیگر روش‌ها دارند و شما
            می‌توانید با سرمایه‌گذاری در این طرح‌ها به صورت آنلاین در پلتفرم ازکی‌سرمایه، بیشترین
            بازده را دریافت کنید. پلتفرم ازکی‌سرمایه مقایسه کردن طرح‌های موفق را برای تمامی
            سرمایه‌گذاران ممکن کرده است و شما می‌توانید پس از مقایسه کردن آنها، به صورت آنلاین در
            کمترین زمان با پلتفرم ازکی‌سرمایه، جزوی از سرمایه‌گذاران طرح کرادفاندینگ باشید.
          </p>
        </div>
        {/* benefits of investing */}
        <div className="lg:w-[70%] w-[90%]  flex lg:flex-row flex-col  lg:items-start items-center justify-center lg:gap-x-32 gap-y-3">
          <div className="lg:w-auto w-full lg:max-w-[760px] flex flex-grow  flex-col justify-start items-start lg:gap-y-10 gap-y-6">
            <span className="lg:w-[90%] w-full text-start font-black text-gray-700 lg:text-3xl text-lg ">
              مزیت‌های سرمایه‌گذاری در طرح‌‌های کرادفاندینگ ویستا
            </span>
            <ul className="w-[90%] flex flex-col lg:gap-y-5 gap-y-3 items-start  justify-start h-auto list-disc pr-5 lg:text-base text-xs  ">
              <li>مشاهده و مقایسه طرح‌های سرمایه‌گذاری از سکوهای کرادفاندینگ مختلف</li>
              <li>طرح‌های کم‌ریسک و معتبر با پیش‌بینی بازده بیش از ۴۰ درصد </li>
              <li>طرح‌های کرادفاندینگ با ضمانت نامه‌های لازمه</li>
              <li>ارائه خدمات مشاوره و پشتیبانی</li>
              <li>آنلاین و سریع</li>
            </ul>
          </div>
          <InlineSVG src={chart} className="lg:w-[540px] lg:h-[500px] w-[240px] h-[240px]  " />
        </div>
        {/* commercial partner */}
        <div className="lg:w-[70%] w-[90%]  flex flex-col lg:gap-y-16 gap-y-4 justify-center items-center  ">
          <span className="text-lg font-black lg:text-3xl text-center ">
            شرکای تجاری تامین مالی ویستا
          </span>
          <div className="w-full flex flex-wrap lg:gap-8 gap-4 justify-center ">
            {CommercialPartner.map((item, index) => (
              <div
                key={index}
                className="lg:w-[180px] lg:h-[100px] w-[95px] h-[53px] rounded-large bg-primary-100 "></div>
            ))}
          </div>
        </div>
        {/* advertisments banner */}
        <InlineSVG
          src={isMobile ? advertismentsMobile : advertismentsDesktop}
          alt="تصویر در حال بارگذاری است "
          className="lg:w-[70%] w-[90%] h-fit   rounded-large   "
        />
        {/* articles */}
        <div className="lg:w-[70%] w-[90%] flex justify-center items-center ">
          <Articles />
        </div>
        {/* frequently questions */}
        <div className="lg:w-[70%] w-[90%]  flex flex-col lg:gap-y-16 gap-y-8 justify-center items-center lg:pb-20 pb-10">
          <span className="text-lg font-black lg:text-3xl text-center ">سوالات متداول </span>
          <div className="w-full flex flex-wrap lg:gap-3 gap-y-5 items-start h-auto justify-between rounded-large ">
            {FAQEnum?.map((item, index) => (
              <div key={index} className="lg:w-[48%] w-full flex justify-center items-center">
                <AccordionFaqModel
                  answer={item.answer}
                  question={item.question}
                  HeaderColor="text-green-1000"
                  bgColor="bg-primary-100 rounded-large p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
