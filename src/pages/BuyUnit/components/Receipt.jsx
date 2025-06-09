import Axios from 'comon/Axios/Axios';
import { ErrorHandler } from 'comon/GlobalyTools/ErrorHandler';
import FileUploadPage from 'comon/Input/uploadInput';
import BouncingDotsLoader from 'comon/Loading/BouncingDotsLoader';
import React, { useEffect, useState } from 'react';

function Receipt({ setStep, data, amount, showName, setModal }) {
  const [isloading, setIsloading] = useState(false);
  const [receiptData, setReceiptData] = useState();
  const [filePath, setFilePath] = useState();
  const [selectedfile, setSelectedfile] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    data?.id && ReceiptPreview();
  }, [data?.id]);

  const disable = receiptData;
  const calculateClearAmountAsPay = () => {
    const res = amount % data?.unitAmount;
    return {
      data: amount - res || 0,
      status: res == 0 ? false : true,
      text:
        res == 0
          ? 'مبلغ سرمایه گذاری :'
          : ' مبلغ سرمایه گذاری اصلاحی ( مبلغ باید مضربی از قیمت هر واحد باشد ):'
    };
  };

  const ReceiptPreview = async () =>
    await Axios.post('/OfflinePayment/ReceiptPreview', {
      planId: data?.id,
      amount: calculateClearAmountAsPay()?.data
    })
      .then((res) => setReceiptData(res?.data))
      .catch(() => setReceiptData(false));

  const CreatePayment = async (id) =>
    await Axios.post('/OfflinePayment/Create', {
      amount: calculateClearAmountAsPay()?.data,
      walletFlowId: id,
      filePath
    })
      .then((res) => res?.data)
      .catch(() => false);

  const unitCount = Number(calculateClearAmountAsPay()?.data / data?.unitAmount).toFixed() || 0;

  const CreateInvestorOrder = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const res = await Axios.post('/Orders/investor/Create', {
        investmentPlanId: data?.id,
        unitCount: unitCount,
        isVisible: showName
      });
      const paymentRes = await CreatePayment(res?.data?.walletFlowId);
      console.log('res', paymentRes);

      if (paymentRes) {
        setModal({ type: 'success', data: paymentRes?.offlinePaymentId });
      } else {
        setModal({ type: 'failed', data: null });
      }
    } catch (error) {
      console.log(error);

      if (error.response) {
        // Backend error details
        setError(ErrorHandler(error.response.data?.title));
      } else {
        // General error message
        setError('خطا! لطفا زمانی دیگر تلاش کنید ');
      }
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-[400px] pt-8 gap-y-6">
      <span className=" w-full text-start  text-gray-700  text-sm font-semibold">
        {' '}
        اطلاعات سفارش{' '}
      </span>
      <div className="w-full flex lg:flex-row flex-col justify-between items-center border border-gray-400 rounded-md px-3 min-h-[42px] py-2 h-auto  ">
        <span className=" lg:w-auto w-full text-start  text-sm  text-gray-700 ">نام طرح :</span>
        <span className=" lg:text-end text-start  text-sm font-semibold text-gray-700 lg:w-auto w-full ">
          {data?.title}{' '}
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center border border-gray-400 rounded-md px-3 min-h-[42px] h-auto py-2 ">
        <span
          className={` text-start ${
            calculateClearAmountAsPay()?.status ? 'text-xs ' : ' text-sm'
          } font-medium text-gray-700 `}>
          {' '}
          {calculateClearAmountAsPay()?.text}
        </span>
        <span className=" text-center  text-sm font-semibold text-gray-700 ">
          {calculateClearAmountAsPay()?.data &&
            Number(calculateClearAmountAsPay()?.data).toLocaleString()}{' '}
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center border border-gray-400 rounded-md px-3 min-h-[42px] h-auto  ">
        <span className=" text-start  text-sm font-medium text-gray-700 ">
          تعداد واحد درخواستی :
        </span>
        <span className=" text-end   font-semibold text-sm  text-gray-700 ">
          {unitCount && Number(unitCount).toLocaleString()}{' '}
        </span>
      </div>
      <FileUploadPage
        icon={true}
        fileAddress={filePath}
        selectedfile={selectedfile}
        setSelectedfile={setSelectedfile}
        label="عکس یا اسکن فیش"
        setFileAddress={setFilePath}
        requiresSigning={true}
      />
      {/*  buttons */}
      {error && <span className=" text-start text-sm text-red-600 ">{error}</span>}
      <div className="w-full flex flex-wrap justify-between items-center  pt-8   ">
        {' '}
        <button
          onClick={CreateInvestorOrder}
          disabled={!disable}
          className={`w-[115px] lg:h-[48px] h-[38px] ${!isloading && 'bg-green-1000'} ${
            !disable && ' opacity-60'
          } text-white text-sm font-medium rounded-md text-center flex justify-center items-center focus:outline-none focus:ring-0 focus:border-none`}>
          {isloading ? <BouncingDotsLoader /> : 'ثبت'}
        </button>
        <button
          onClick={() => setStep('paymethod')}
          className={`w-[115px] lg:h-[48px] h-[38px] text-green-1000  border border-green-1000 text-sm font-medium rounded-md text-center flex justify-center items-center focus:outline-none focus:ring-0 `}>
          بازگشت{' '}
        </button>
      </div>
    </div>
  );
}

export default Receipt;
