import React, { useState } from 'react';

function PayMethod({ setStep }) {
  const [selectedMethod, setSelectedMethod] = useState();

  const methods = [
    {
      key: 'gatway',
      title: 'واریز از طریق کارت بانکی',
      desc: 'با هر کارت بانکی بنام سرمایه‌گذار'
    },
    {
      key: 'reciept',
      title: 'واریز از طریق شعب بانک (فیش واریزی)',
      desc: 'با شناسه واریز'
    }
  ];

  return (
    <div className="lg:w-[90%] w-full flex flex-col items-center justify-start h-[400px] pt-8 gap-y-6">
      {methods.map((item, index) => (
        <div
          onClick={() => setSelectedMethod(item.key)}
          key={index}
          className={`w-full cursor-pointer rounded-lg  h-[80px] flex flex-col items-center justify-center gap-y-3 ${
            item.key == selectedMethod
              ? 'border-2 border-green-1000 drop-shadow-lg'
              : 'border border-gray-[#E0E0E0]'
          } `}>
          <div className="w-[90%] flex justify-start gap-x-2 items-center">
            <input
              onClick={() => setSelectedMethod(item.key)}
              type="radio"
              checked={selectedMethod == item.key}
              className="w-4 border border-green-1000 text-green-1000  focus:outline-none focus:ring-0"
            />
            <span className="text-sm text-gray-700 lg:font-bold font-semibold text-start">
              {item.title}
            </span>
          </div>
          <span className="text-xs text-[#787878] text-start w-[90%] pr-4">{item.desc}</span>
        </div>
      ))}
      <div className="w-full flex justify-between items-center lg:mt-28  mt-32        ">
        {' '}
        <button
          disabled={!selectedMethod}
          onClick={() => setStep(selectedMethod)}
          className={`w-[115px] lg:h-[48px] h-[38px] bg-green-1000 ${
            !selectedMethod && ' opacity-60'
          } text-white text-sm font-medium rounded-md text-center flex justify-center items-center focus:outline-none focus:ring-0 focus:border-none`}>
          ادامه
        </button>
        <button
          onClick={() => setStep('setamount')}
          className={`w-[115px] lg:h-[48px] h-[38px] text-green-1000  border border-green-1000 text-sm font-medium rounded-md text-center flex justify-center items-center focus:outline-none focus:ring-0 `}>
          ویرایش مبلغ{' '}
        </button>
      </div>
    </div>
  );
}

export default PayMethod;
