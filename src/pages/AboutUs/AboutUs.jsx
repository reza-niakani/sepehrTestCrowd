import React from 'react';
import InlineSVG from 'react-inlinesvg';
import verify from 'asset/Pictures/Icons/userVerifyTemplate.svg';
import useDeviceDetection from 'comon/DeviceDetector/useDeviceDetection';
import { executeMemebers } from './component/Enum';
import person from 'asset/Pictures/Icons/personIcon.png';

function AboutUs() {
  const isMobile = useDeviceDetection();

  return (
    <div className="w-full flex flex-col items-center justify-start  gap-y-20">
      {/* title  */}
      <div className="  bg-[url('asset/Pictures/BackGround/landingBg.svg')]  bg-cover w-screen  bg-no-repeat  bg-center h-[800px] flex flex-col justify-center   items-center gap-y-16 lg:py-0 py-6  ">
        <div className=" w-[50%] flex flex-col items-center justify-center h-auto gap-y-10 lg:pt-28 ">
          {' '}
          <span className="lg:text-4xl text-lg  font-extrabold text-accent-1000  w-full text-center ">
            {' '}
            درباره تامین مالی جمعی سپهر کراد{' '}
          </span>
          <p
            style={{ lineHeight: '35px' }}
            className="w-[70%] text-center  lg:text-xl  text-base  text-dark-700 lg:p-2">
            سپهرکراد، سکوی تامین مالی جمعی شرکت تامین سرمایه سپهر است در پی تامین منابع مالی برای
            کسب و کارهای کوچک و متوسط و منافع مالی برای سرمایه گذاران.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-12 items-center max-w-[1440px] ">
          {[
            'ارائه مسیر سریع، شفاف و مقرون‌به‌صرفه برای جذب سرمایه‌گذاران خرد و کلان؛',
            'پالایش دقیق طرح‌ها از نظر اقتصادی، حقوقی و اجرایی؛',
            'حمایت همه‌جانبه از کارآفرینان در مسیر رشد کسب‌وکار.'
          ]?.map((item, index) => (
            <div
              key={index}
              style={{ boxShadow: '0px 2px 10px 0px rgba(1, 182, 155, 0.1)' }}
              className="lg:w-[270px] w-[90%] rounded-large h-[250px] flex  flex-col items-center gap-y-5 justify-center bg-white ">
              <InlineSVG src={verify} />
              <p className="w-[80%] text-center text-base text-gray-600  ">{item}</p>
            </div>
          ))}
        </div>
      </div>
      {/* company info */}
      {/* crowdfunding introduction */}
      <div className="lg:w-[70%] w-[95%] flex lg:p-10 py-4 px-3 justify-center   gap-y-10  flex-col  items-start lg:bg-[url('asset/Pictures/BackGround/handBgDesktop.svg')] text-white lg:h-[480px] h-[700px] rounded-large bg-[url('asset/Pictures/BackGround/handBgmobile.svg')] bg-cover lg:max-w-[1400px] bg-no-repeat  bg-center  ">
        <span className="w-full lg:w-[90%] flex flex-col lg:text-3xl  text-lg font-black text-start  items-start  justify-start h-auto lg:gap-y-4 ">
          سپهر کراد
        </span>
        <p
          style={{ lineHeight: isMobile ? '25px' : '32px' }}
          className="w-full lg:w-[50%] flex flex-col lg:text-base    text-sm  text-justify font-medium  items-start  justify-start h-auto gap-y-2  ">
          سپهرکراد، سکوی تامین مالی جمعی شرکت تامین سرمایه سپهر است که با دریافت مجوز رسمی از
          فرابورس، سعی دارد در کنار تامین مالی از طریق انتشار اوراق برای شرکت های بزرگ، به تامین
          مالی شرکت های کوچک و متوسط کمک نماید و سرمایه گذاران را در ارزش افزوده ایجاد شده از تولید
          شرکت ها با نرخ هایی جذاب و اقتصادی شریک نماید. سپهر کراد در مسیر رشد و توسعه شرکت‌های کوچک
          و متوسط در کنار آن‌ها بوده و با ایجاد سابقه اعتباری از طریق تامین مالی جمعی امکان تامین
          مالی از طریق انتشار اوراق را برای آن‌ها فراهم می‌نماید.
        </p>
      </div>
      <div className=" w-[50%] flex flex-col items-center justify-center h-auto gap-y-10 lg:pt-28 ">
        {' '}
        <span className="lg:text-4xl text-lg  font-extrabold text-accent-1000  w-full text-center ">
          {' '}
          اعضای هیات مدیره{' '}
        </span>
        <div className="w-full max-w-[1440px]  flex flex-wrap items-center justify-center gap-8  ">
          {executeMemebers?.map((item, index) => (
            <div
              key={index}
              className="lg:w-[500px] w-[90%]  min-h-[170px] flex  justify-center gap-x-5 ">
              <img src={person} className="w-[65px] h-[65px] rounded-full  " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
