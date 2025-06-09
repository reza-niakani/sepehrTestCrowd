import AccordionFaqModel from 'comon/Accordion/AccordionFaqModel';
import getBaseUrl from 'comon/Axios/getBaseUrl';
import DateFunctions from 'comon/DateFunction/DateFunctions';
import { shareHoldersEnum } from 'comon/DB/PositionTypeEnum';
import { FindFromArrayById, FormatTextWithLineBreaks } from 'comon/GlobalyTools/UseAbleFunctions';
import React from 'react';

function FixedGlobalyDetailsBlock({ mainData, token }) {
  console.log(mainData);

  const CompanyInfo = [
    { title: 'نام شرکت:', data: mainData?.companyInfo?.legalPerson?.companyName },
    {
      title: 'استان محل ثبت:',
      data: mainData?.companyInfo?.legalPerson?.registerPlace || 'نامشخص'
    },
    { title: 'وب‌سایت:', data: mainData?.companyInfo?.legalPerson?.website || 'ندارد' },
    { title: 'شناسه ملی شرکت:', data: mainData?.companyInfo?.username },
    {
      title: 'تاریخ ثبت:',
      data:
        mainData?.companyInfo?.legalPerson?.registerDate &&
        DateFunctions.getDate(mainData?.companyInfo?.legalPerson?.registerDate)
    },
    { title: 'شماره ثبت:', data: mainData?.companyInfo?.legalPerson?.registerNumber }
  ];

  const ValidDocuments =
    mainData?.documents && mainData?.documents?.filter((item) => item?.type !== 6);

  const ValidPeriodictReports =
    mainData?.documents && mainData?.documents?.filter((item) => item?.type == 6);

  return (
    <div className="lg:w-[48%] w-full flex flex-col lg:min-w-[660px] min-w-[320px] items-center justify-start gap-y-5 lg:sticky lg:top-5  h-[80%]">
      {/* image */}
      <img
        src={getBaseUrl() + '/' + mainData?.plandata?.coverImagePaths?.[0]?.value}
        className="w-full rounded-large h-[240px] lg:h-[360px]"
      />
      <span className="text-start w-full font-bold lg:text-2xl text-base ">
        {mainData?.plandata?.title}
      </span>
      <AccordionFaqModel
        answer={FormatTextWithLineBreaks(mainData?.plandata?.description)}
        question="معرفی طرح"
        bgColor="bg-gray-100 rounded-large"
      />
      <AccordionFaqModel
        answer={
          <div className="w-full h-auto flex flex-col items-center justify-between gap-y-5 text-gray-700 ">
            {/* base info */}
            {CompanyInfo?.map((item, index) => (
              <div
                key={index}
                className={`w-full flex justify-between items-center py-3 ${
                  index != 5 && 'border-b'
                } border-[#01B69B1A] text-gray-700 `}>
                <span className="lg:text-sm text-xs text-start ">{item?.title}</span>
                <span className="lg:text-sm text-xs  font-bold text-end">{item?.data}</span>
              </div>
            ))}
            {/* stock holder */}
            <span className="text-start sticky top-0 bg-gray-100  w-full border-b-2 border-[#01b69b91] py-2 font-semibold lg:text-base text-sm  ">
              هیات مدیره و مدیر عامل
            </span>
            {mainData?.companyInfo?.stakeholders?.map((item, index) => (
              <div
                key={index}
                className={`w-full flex justify-between items-center py-3 ${
                  index !== mainData?.companyInfo?.stakeholders?.length - 1 && 'border-b'
                } border-[#01B69B1A] text-gray-700 `}>
                <span className="lg:text-sm text-xs text-start ">
                  {item?.firstName}
                  {'  '} {item?.lastName}
                </span>
                <span className="lg:text-sm text-xs  font-bold text-end">
                  {' '}
                  {item?.positionType
                    ? FindFromArrayById(shareHoldersEnum, item?.positionType)?.name
                    : ' --- '}
                </span>
              </div>
            ))}
            {/* share holder */}
            <span className="text-start sticky top-0 bg-gray-100  w-full border-b-2 border-[#01b69b91] py-2 font-semibold lg:text-base text-sm  ">
              سهامداران بالای 10٪{' '}
            </span>
            {mainData?.companyInfo?.shareHolders?.length > 0 ? (
              mainData?.companyInfo?.shareHolders?.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex justify-between items-center py-3 ${
                    index !== mainData?.companyInfo?.shareHolders?.length - 1 && 'border-b'
                  } border-[#01B69B1A] text-gray-700 `}>
                  <span className="lg:text-sm text-xs text-start ">
                    {item?.firstName}
                    {'  '} {item?.lastName}
                  </span>
                  <span className="lg:text-sm text-xs text-start ">
                    %{item?.percentageVotingRight}
                  </span>
                  <span className="lg:text-sm text-xs  font-bold text-end">
                    {' '}
                    {item?.positionType
                      ? FindFromArrayById(shareHoldersEnum, item?.positionType)?.name
                      : ' --- '}
                  </span>
                </div>
              ))
            ) : (
              <span className="w-full text-center py-4 text-base font-semibold text-gray-700">
                این طرح سرمایه گذار بالای 10 % ندارد !
              </span>
            )}
          </div>
        }
        question="اطلاعات شرکت"
        bgColor="bg-gray-100 rounded-large"
      />

      <AccordionFaqModel
        answer={
          <div className="w-full h-auto flex flex-col items-center justify-between gap-y-5 text-gray-700 ">
            {/* base info */}
            {token ? (
              ValidDocuments && ValidDocuments?.length > 0 ? (
                ValidDocuments?.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full flex justify-between items-center py-2 ${
                      index !== ValidDocuments?.length - 1 && 'border-b'
                    } border-[#01B69B1A] text-gray-700 `}>
                    <span className="lg:text-sm text-xs text-start "> {item?.description}</span>
                    <a
                      rel="noreferrer"
                      type="download"
                      target="_blank"
                      href={getBaseUrl() + '/' + item?.path}
                      className=" lg:text-sm text-xs  font-bold text-end underline hover:text-sky-400  flex cursor-pointer justify-center items-center ">
                      دانلود
                      {/* <InlineSVG src={download} /> */}
                    </a>
                  </div>
                ))
              ) : (
                <span className="w-full text-center py-4 text-base font-semibold text-gray-700">
                  مدارک و مستنداتی برای این طرح بارگذاری نشده است!
                </span>
              )
            ) : (
              <span className="w-full text-center py-4 text-base font-semibold text-gray-700">
                برای مشاهده این قسمت لطفا وارد شوید!
              </span>
            )}
          </div>
        }
        question="مدارک و مستندات"
        bgColor="bg-gray-100 rounded-large"
      />
      <AccordionFaqModel
        answer={
          <div className="w-full h-auto flex flex-col items-center justify-between gap-y-5 text-gray-700 ">
            {/* base info */}
            {token ? (
              ValidPeriodictReports && ValidPeriodictReports?.length > 0 ? (
                ValidPeriodictReports?.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full flex justify-between items-center py-2 ${
                      index !== ValidPeriodictReports?.length - 1 && 'border-b'
                    } border-[#01B69B1A] text-gray-700 `}>
                    <span className="lg:text-sm text-xs text-start "> {item?.description}</span>
                    <a
                      rel="noreferrer"
                      type="download"
                      target="_blank"
                      href={getBaseUrl() + '/' + item?.path}
                      className=" lg:text-sm text-xs  font-bold text-end underline hover:text-sky-400  flex cursor-pointer justify-center items-center ">
                      دانلود
                      {/* <InlineSVG src={download} /> */}
                    </a>
                  </div>
                ))
              ) : (
                <span className="w-full text-center py-4 text-base font-semibold text-gray-700">
                  گزارش دور‌ای برای این طرح بارگذاری نشده است!
                </span>
              )
            ) : (
              <span className="w-full text-center py-4 text-base font-semibold text-gray-700">
                برای مشاهده این قسمت لطفا وارد شوید!
              </span>
            )}
          </div>
        }
        question="گزارش های دوره ای"
        bgColor="bg-gray-100 rounded-large"
      />
      <AccordionFaqModel
        answer={
          <div className="w-full h-auto flex flex-col items-center justify-between gap-y-5 text-gray-700 ">
            <div className="w-full flex  justify-between items-center text-gray-700 text-sm font-medium">
              <span>جمع مبلغ سرمایه‌گذاری حقیقی (ریال)</span>
              <span>
                {' '}
                {Number(mainData?.plandata?.individualInvestorValueSum).toLocaleString() || 0}{' '}
              </span>
            </div>
            <div className="w-full flex  justify-between items-center text-gray-700 text-sm font-medium">
              <span>جمع مبلغ سرمایه‌گذاری حقوقی (ریال)</span>
              <span>
                {' '}
                {Number(mainData?.plandata?.legalInvestorValueSum).toLocaleString() || 0}{' '}
              </span>
            </div>

            <span className="text-start sticky top-0 bg-gray-100  w-full border-b-2 border-[#01b69b91] py-2 font-semibold lg:text-base text-sm  ">
              اسامی سرمایه گذاران قابل مشاهده{' '}
            </span>
            <div className="w-full h-auto gap-4 flex flex-wrap items-center justify-between ">
              {' '}
              {mainData?.Investors?.length > 0 && mainData?.Investors ? (
                mainData?.Investors?.map((item, index) => (
                  <span
                    key={index}
                    className={`lg:text-sm text-xs text-start  w-auto text-nowrap  text-gray-700 `}>
                    {item}{' '}
                  </span>
                ))
              ) : (
                <span className="w-full text-center py-4 text-base font-semibold text-gray-700">
                  سرمایه گذار قابل مشاهده‌ایی یافت نشد{' '}
                </span>
              )}
            </div>
          </div>
        }
        question="سرمایه گذاران"
        bgColor="bg-gray-100 rounded-large"
      />
    </div>
  );
}

export default FixedGlobalyDetailsBlock;
