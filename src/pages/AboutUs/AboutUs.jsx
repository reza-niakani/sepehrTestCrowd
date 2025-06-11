import React, { useContext } from 'react';
import InlineSVG from 'react-inlinesvg';
import verify from 'asset/Pictures/Icons/userVerifyTemplate.svg';
import useDeviceDetection from 'comon/DeviceDetector/useDeviceDetection';
import { BoardMember, executeMemebers } from './component/Enum';
import person from 'asset/Pictures/Icons/personIcon.png';
import DataContext from 'comon/context/MainContext';

function AboutUs() {
  const { setModal } = useContext(DataContext);

  const isMobile = useDeviceDetection();
  const showHistoryFunction = (data) => {
    setModal({ type: 'workHistory', data: data });
  };

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
        <div className="w-auto flex flex-col items-start gap-y-2 ">
          <div className="w-auto flex justify-start items-center  gap-x-5 lg:text-xl text-sm font-bold  text-white ">
            <span className="whitespace-nowrap  ">شناسه ملی سپهر:</span>
            <span className="font-normal">۱۰۳۲۰۰۸۹۹۰ </span>
          </div>
          <div className="w-auto flex justify-start items-center  gap-x-5 lg:text-xl text-sm font-bold  text-white ">
            <span className="whitespace-nowrap  ">شماره ثبت سپهر: </span>
            <span className="font-normal">۴۱۹۲۹۲ </span>
          </div>
        </div>
      </div>
      <div className=" w-[50%] flex flex-col items-center justify-center h-auto gap-y-10 lg:pt-28 ">
        {' '}
        <span className="lg:text-4xl text-lg  font-extrabold text-accent-1000  w-full text-center ">
          {' '}
          اعضای هیات مدیره{' '}
        </span>
        <div className="w-full max-w-[1440px]  flex flex-wrap items-center justify-center gap-8  ">
          {BoardMember?.map((item, index) => (
            <div
              key={index}
              onClick={() => showHistoryFunction(item?.WorkHistory)}
              className="lg:w-[500px] hover:drop-shadow-lg cursor-pointer  w-[90%]  min-h-[140px] flex items-center justify-center gap-x-5  drop-shadow-md rounded-lg  bg-white">
              <div className="w-[95%] flex items-center justify-between ">
                {' '}
                <img src={item?.pic} className="w-[110px] h-[110px] rounded-full  " />
                <div className="w-[70%] flex flex-col items-start justify-center gap-y-3 h-auto">
                  <span className="w-auto text-start text-lg font-bold text-accent-1000">
                    {item?.name}
                  </span>
                  <span className="w-auto text-start text-base font-normal text-accent-1000">
                    {item?.posotion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
