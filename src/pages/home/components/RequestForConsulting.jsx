import Axios from 'comon/Axios/Axios';
import DateFunctions from 'comon/DateFunction/DateFunctions';
import { formatIranianMobile, handleNumberInput } from 'comon/GlobalyTools/UseAbleFunctions';
import BouncingDotsLoader from 'comon/Loading/BouncingDotsLoader';
import React, { useState } from 'react';

function RequestForConsulting() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [fullname, setFullname] = useState();
  const [response, setResponse] = useState();
  const [isloadIng, setIsloadIng] = useState();

  const CreateConsultingRequest = async (e) => {
    e.preventDefault();

    setIsloadIng(true);
    await Axios.post('/Consultation/Create', {
      fullName: fullname,
      phoneNumber: formatIranianMobile(phoneNumber),
      approximateAmount: 1,
      date: DateFunctions.getFormattedTodayDate(),
      timeRange: 1
    })
      .then((res) => {
        console.log('response', res);

        setResponse({ text: 'ثبت شد ', color: ' text-green-1000 ' });
      })
      .catch(() => setResponse({ text: '   خطا ! ثبت ناموفق ', color: ' text-red-600' }))
      .finally(() => {
        setIsloadIng(false);
        setTimeout(() => {
          setResponse();
        }, 2000);
      });
  };

  const disable =
    !!phoneNumber && !!fullname && phoneNumber?.length > 10 && phoneNumber?.length < 13;

  return (
    <div className="lg:w-[70%] w-full h-[80%] flex lg:justify-start gap-y-5 justify-center  items-center">
      {/* form  */}
      <div className="lg:w-[28%] w-[70%] h-full flex flex-col lg:justify-center lg:gap-y-5 gap-y-4 justify-end  items-center">
        <span className=" lg:text-[50px] text-2xl font-black text-gray-700  text-center  ">
          کــــرادفاندیـــنگ
        </span>
        <span className="lg:w-full w-[80%] lg:text-justify text-center lg:text-xl text-sm  font-medium  text-gray-700  ">
          فرصتی برای سرمایه گذاری پر سود پیش بینی سود بیش از ۴۰٪
        </span>
        <form
          onSubmit={CreateConsultingRequest}
          className="w-[95%] lg:min-w-[290px] flex flex-col  lg:gap-y-5 gap-y-3 items-center py-5 bg-white shadow-dropShadow2 rounded-large justify-center  ">
          {/* phone number  */}
          <div className="w-[90%] flex items-center justify-between   ">
            <label
              htmlFor="phoneNumber"
              className="lg:text-xs text-[10px] text-gray-700  font-bold w-auto text-nowrap  ">
              شماره تماس
            </label>
            <input
              maxLength={13}
              value={phoneNumber}
              placeholder="شماره تماس خود را به صورت (09111111111)  "
              name="phoneNumber"
              className={` rounded-lg w-[60%] lg:min-w-[165px] border   focus:outline-none text-sm focus:ring-0 placeholder:text-[10px] placeholder:text-start   text-center placeholder:text-gray-300 text-gray-700  placeholder:pr-3 h-[33px] `}
              inputMode="numeric"
              onChange={(e) => handleNumberInput(e, setPhoneNumber)}
            />
          </div>
          {/*  full name  */}
          <div className="w-[90%] flex items-center justify-between   ">
            <label
              htmlFor="fullName"
              className="lg:text-xs text-[10px] text-gray-700  font-bold w-auto text-nowrap  ">
              نام و نام خانوادگی{' '}
            </label>
            <input
              placeholder="نام و نام خانوادگی خودرا وارد کنید"
              value={fullname}
              name="fullName"
              className={`rounded-lg w-[60%] lg:min-w-[165px] border focus:outline-none focus:ring-0 text-sm  placeholder:text-start  placeholder:text-[10px] text-center placeholder:text-gray-300 text-gray-700  placeholder:pr-3 h-[33px] `}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          {response && (
            <span className={`${response?.color}  text-xs text-start font-medium `}>
              {response?.text}
            </span>
          )}
          <button
            type="submit"
            disabled={!disable}
            className={` w-[90%] focus:outline-none focus:ring-0 text-center rounded-lg  ${
              !disable && ' opacity-60'
            } focus:border-0 text-white font-black lg:text-base text-sm h-[33px] ${
              isloadIng ? 'border border-green-1000' : 'bg-green-1000  '
            }`}>
            {isloadIng ? <BouncingDotsLoader /> : 'درخواست مشاوره'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestForConsulting;
