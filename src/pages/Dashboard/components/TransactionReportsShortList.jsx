import React, { useEffect, useState } from 'react';
import InlineSVG from 'react-inlinesvg';
import dollor from 'asset/Pictures/Icons/dollor.svg';
import arrowLeft from 'asset/Pictures/Icons/chevronLeftgreen.svg';
import { Link } from 'react-router-dom';
import Axios from 'comon/Axios/Axios';
import { FinancialEnumFinder } from 'comon/DB/FinancialEnum';
import BouncingDotsLoader from 'comon/Loading/BouncingDotsLoader';
import useDeviceDetection from 'comon/DeviceDetector/useDeviceDetection';
import { truncateDescription } from 'comon/GlobalyTools/UseAbleFunctions';

function TransactionReportsShortList() {
  const [transactions, setTransactions] = useState();
  const [isloading, setIsloading] = useState();
  const isMobile = useDeviceDetection();

  useEffect(() => {
    GetLastTransactions();
  }, []);

  const GetLastTransactions = async () => {
    setIsloading(true);
    await Axios.post('/Wallet/GetWalletFlows', {
      //   userId: 'string',
      //   status: 1,
      operationTypes: [],
      planId: null,
      pagination: {
        take: 6,
        skip: 0
      }
    })
      .then((res) => setTransactions(res?.data))
      .catch(() => false)
      .finally(() => setIsloading(false));
  };

  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-3 ">
      <div className="lg:w-[95%] w-full flex items-center justify-between">
        <div className="w-auto flex-nowrap items-center flex justify-start gap-x-2">
          <div className="lg:w-12 w-8 lg:h-12 h-8 flex justify-center items-center rounded-large drop-shadow-md  bg-white   ">
            <InlineSVG src={dollor} />
          </div>
          <span className=" text-base text-gray-700 font-medium ">آخرین تراکنش </span>
        </div>
        <Link
          to="/financial_report"
          className=" text-green-1000 lg:h-12 h-8 flex justify-center  items-center gap-x-2 bg-white rounded-large drop-shadow-md text-sm lg:font-bold font-semibold     px-3 ">
          همه تراکنش ها <InlineSVG src={arrowLeft} />
        </Link>
      </div>
      {/* tabel reports  */}
      {isloading ? (
        <BouncingDotsLoader />
      ) : transactions?.length > 0 ? (
        <div className="lg:w-[95%] w-full flex justify-start items-center border border-[#E0E0E0] rounded-[16px] border-collapse overflow-x-scroll lg:pt-3 pt-1 bg-white">
          <table className="table-auto w-full ">
            <thead className="">
              <tr className="w-full border-b border-dashed border-[#E0E0E0]">
                {/* ✅ Removed 'flex' */}
                <th className="text-start text-xs text-nowrap text-gray-500 px-4 py-3">نام طرح</th>
                <th className="text-start text-xs text-nowrap text-gray-500 px-4 py-3">
                  {isMobile ? 'مبلغ (ریال)' : 'مبلغ تراکنش (ریال)'}
                </th>
                <th className="text-start text-xs text-nowrap text-gray-500 px-4 py-3">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((item, index) => (
                <tr
                  key={index}
                  className={`  ${
                    index < transactions?.length - 1 && 'border-b'
                  } border-dashed border-[#E0E0E0]`}>
                  <td className="lg:px-4 lg:py-5 p-2 lg:text-xs text-[8px] text-gray-700 min-w-[150px]  text-wrap whitespace-pre-line ">
                    {isMobile ? truncateDescription(item?.planTitle, 40) : item?.planTitle}
                  </td>
                  <td className="lg:px-4 lg:py-5 p-2 text-xs text-gray-700     font-bold">
                    {item?.moneyAmount && Number(item?.moneyAmount).toLocaleString()}{' '}
                  </td>
                  <td className="lg:px-4 lg:py-5 p-2 text-xs text-gray-700  ">
                    <span
                      className={`w-auto border  text-nowrap max-w-[200px]  text-center  p-2 rounded-large justify-center sitems-center lg:text-xs text-[8px]  `}
                      style={{
                        color: FinancialEnumFinder(item?.status)?.color,
                        borderColor: FinancialEnumFinder(item?.status)?.color
                      }}>
                      {' '}
                      {FinancialEnumFinder(item?.status)?.name}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <span className="w-[80%] text-center text-sm font-bold text-green-1000 bg-[#01B69B08]   border border-green-1000 rounded-large h-[42px]  flex items-center justify-center">
          تراکنشی برای شما ثبت نشده!
        </span>
      )}
    </div>
  );
}

export default TransactionReportsShortList;
