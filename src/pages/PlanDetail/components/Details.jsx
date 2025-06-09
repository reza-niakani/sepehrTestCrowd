import { numberToWords } from '@persian-tools/persian-tools';
import DateFunctions from 'comon/DateFunction/DateFunctions';
import React from 'react';

function Details({ mainData }) {
  const plandata = [
    {
      title: 'سود پیش‌بینی شده سالانه',
      data:
        mainData?.plandata?.annualProfiteRate &&
        `${Number(mainData?.plandata?.annualProfiteRate * 100).toFixed()}%`
    },
    {
      title: 'دوره سرمایه‌گذاری',
      data: mainData?.plandata?.investmentPeriod && `${mainData?.plandata?.investmentPeriod}ماه`
    },
    {
      title: 'مواعد پرداخت سود',
      data:
        mainData?.plandata?.installmentPeriod &&
        `${numberToWords(mainData?.plandata?.installmentPeriod)}یکبار`
    },
    {
      title: 'تضامین',
      data: mainData?.plandata?.warranty ? mainData?.plandata?.warranty : 'فاقد ضامن'
    },
    {
      title: 'نوع طرح',
      data: mainData?.floatingPercentage
        ? Number(mainData?.plandata?.floatingPercentage * 100)
        : ' همه یا هیچ'
    },
    {
      title: 'سرمایه گذاران',
      data: mainData?.plandata?.totalInvestors
        ? Number(mainData?.plandata?.totalInvestors).toLocaleString()
        : 0
    },
    {
      title: 'مهلت سرمایه گذاری',
      data: mainData?.plandata?.underwritingEndDate
        ? `${DateFunctions.GetDateDistance(mainData?.plandata?.underwritingEndDate)}روز`
        : 0
    }
  ];
  return (
    <div className="w-full h-auto flex flex-col items-center justify-between gap-y-5  shadow-dropShadow2 lg:py-8 py-5   rounded-[20px] text-gray-700 ">
      <span className="text-start w-[95%] font-semibold lg:text-base text-sm  ">اطلاعات طرح</span>
      {plandata?.map((item, index) => (
        <div
          key={index}
          className="w-[90%] flex justify-between items-center py-3 border-b border-[#01B69B1A] text-gray-700 ">
          <span className="lg:text-sm text-xs text-start ">{item?.title}</span>
          <span className="lg:text-sm text-xs  font-bold text-end">{item?.data}</span>
        </div>
      ))}
    </div>
  );
}

export default Details;
