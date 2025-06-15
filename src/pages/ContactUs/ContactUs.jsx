/* eslint-disable no-unused-vars */
import React from 'react';
import callus from 'asset/Pictures/Icons/callUs.svg';
import location from 'asset/Pictures/Icons/location.svg';
import mail from 'asset/Pictures/Icons/mail.svg';
import socialMedia from 'asset/Pictures/Icons/socialMedia.svg';
import InlineSVG from 'react-inlinesvg';
import linkedIn from 'asset/Pictures/Icons/linkeIIn.svg';
import insta from 'asset/Pictures/Icons/instagram.svg';
import telegram from 'asset/Pictures/Icons/telegram.svg';

function ContactUs() {
  const contactUsData = [
    {
      icon: location,
      title: 'آدرس دفتر مرکزی',
      data: (
        <p className="w-full text-justify text-sm text-gray-600  ">
          ساختمان مرکزی : تهران، بلوار نلسون ماندلا، نبش آرش غربی، پلاک 113
        </p>
      )
    },
    {
      icon: callus,
      title: 'شماره تماس',
      data: (
        <div className="w-[90%] flex flex-col   justify-start gap-y-3 items-center  text-gray-600  text-sm    ">
          <a
            href="tel:02142358"
            className="hover:text-accent-1000  w-full text-start hover:underline underline-offset-4 hover:font-medium">
            021-42358{' '}
          </a>
          <span className="w-full text-start  ">شنبه تا چهارشنبه 8تا 17</span>
        </div>
      )
    },
    {
      icon: mail,
      title: 'ایمیل',
      data: (
        <a
          href="mailto:info@sepehrib.com"
          className="hover:text-accent-1000  w-[90%] text-start  text-gray-600 hover:underline underline-offset-4 hover:font-medium">
          info@sepehrib.com{' '}
        </a>
      )
    },
    {
      icon: socialMedia,
      title: 'شبکه‌های اجتماعی',
      data: (
        <div className="w-[90%]  flex flex-wrap justify-start gap-x-7  text-gray-800  text-sm  font-bold ">
          <a
            href="https://www.linkedin.com/company/sepehr-investment-bank/"
            target="_blank"
            className="w-auto flex flex-nowrap items-center gap-x-1  hover:text-accent-1000 "
            rel="noreferrer">
            <InlineSVG src={linkedIn} />
            لینکدین
          </a>
          <a
            href="https://instagram.com/sepehrib"
            target="_blank"
            rel="noreferrer"
            className="w-auto flex flex-nowrap items-center gap-x-1  hover:text-accent-1000 ">
            <InlineSVG src={insta} />
            اینستاگرام{' '}
          </a>
          <a
            href="https://t.me/SepehrIB_co/"
            target="_blank"
            rel="noreferrer"
            className="w-auto flex flex-nowrap items-center gap-x-1  hover:text-accent-1000 ">
            <InlineSVG src={telegram} />
            تلگرام{' '}
          </a>
        </div>
      )
    }
  ];
  return (
    <div className="w-full flex flex-col items-center justify-start  gap-y-20">
      {/* title  */}
      <div className="  bg-[url('asset/Pictures/BackGround/landingBg.svg')]  bg-cover w-screen  bg-no-repeat  bg-center h-[800px] flex flex-col justify-center   items-center gap-y-16 lg:py-0 py-6  ">
        <div className=" w-[50%] flex flex-col items-center justify-center h-auto gap-y-10 lg:pt-28 ">
          {' '}
          <span className="lg:text-4xl text-lg  font-extrabold text-accent-1000  w-full text-center ">
            {' '}
            تماس با ما{' '}
          </span>
          <p
            style={{ lineHeight: '35px' }}
            className="w-[70%] text-center  lg:text-xl font-medium text-base  text-dark-700 lg:p-2">
            ما در سپهر کراد مشتاق شنیدن نظرات، سوالات و پیشنهادات شما هستیم. برای ارتباط با ما
            می‌توانید از یکی از روش‌های زیر استفاده کنید:
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-12 items-center max-w-[1440px] ">
          {contactUsData?.map((item, index) => (
            <div
              key={index}
              className="lg:w-[45%] lg:min-w-[505px] max-w-[435px] flex w-full  flex-col items-center  justify-between p-5  bg-white   rounded-large drop-shadow-md h-[150px] ">
              <div className="w-[95%] justify-start items-center gap-x-2 flex ">
                <InlineSVG src={item.icon} className="w-[50px] h-[50px]" />
                <span className=" lg:text-lg text-base font-bold   ">{item?.title}</span>
              </div>
              <div className="w-[95%] justify-center items-center gap-x-2 flex ">{item?.data}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] flex lg:flex-row flex-col lg:justify-center justify-between p-5  gap-12 items-center max-w-[1440px] "></div>
    </div>
  );
}

export default ContactUs;
