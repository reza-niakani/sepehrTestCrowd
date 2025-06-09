import getBaseUrl from 'comon/Axios/getBaseUrl';
import { truncateDescription } from 'comon/GlobalyTools/UseAbleFunctions';
import React, { useContext } from 'react';
import verify from 'asset/Pictures/Icons/greenVerify.svg';
import InlineSVG from 'react-inlinesvg';
import RingLoaderBar from 'comon/LoaderBar/RingLoader ';
import DateDistancerCounter from 'comon/DateComponents/DateDistancerCounter';
import { Link, useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from 'comon/storage/localStorage';
import DataContext from 'comon/context/MainContext';

function PlanCard({ data, innerCard = false }) {
  const navigate = useNavigate();
  const { setModal } = useContext(DataContext);
  const token = getFromLocalStorage('token');

  console.log(token);

  return (
    <div className="lg:w-[330px] w-[290px] flex flex-col items-center bg-transparent relative min-h-[570px] ">
      {/* image */}
      <img
        className="w-full h-[165px] object-cover rounded-t-[24px]"
        src={getBaseUrl() + '/' + data?.coverImagePaths?.[0]?.value}
        alt="تصویر طرح یافت نشد"
      />

      {/* main info */}
      <div
        onClick={() => navigate(`/plan_detail/${data?.id}`)}
        className="w-full bg-white rounded-t-[24px] py-3 flex flex-col items-center gap-y-3 shadow-dropShadow2 relative top-[-15px] flex-grow">
        <span className="text-sm font-bold w-[90%] text-start text-gray-700">
          {truncateDescription(data?.title, 42)}
        </span>
        <span className="w-[90%] flex justify-start text-xs items-center gap-x-1">
          <InlineSVG src={verify} />
          {data?.warranty || 'ضمانت ندارد'}
        </span>
        <div className="w-[90%] flex justify-between items-center">
          <span className="text-xs text-gray-700">مبلغ کل تامین مالی (ريال) :</span>
          <span className="text-sm text-green-1000 font-black">
            {data?.goal && Number(data?.goal).toLocaleString()}
          </span>
        </div>

        {/* Stats Section */}
        <div className="w-[90%] flex justify-center gap-x-2 items-center">
          <div className="lg:w-[140px] w-[130px] flex flex-col items-center gap-y-2">
            <div className="w-full rounded-Radius bg-gray-100 flex flex-col items-center justify-center gap-y-3 h-[75px]">
              <span className="text-center text-xs font-medium text-gray-700">
                پیش بینی سود پروژه
              </span>
              <span className="text-center text-xs font-black text-gray-700">
                %{data && Number(data?.annualProfiteRate * 100).toFixed()} سالانه
              </span>
            </div>
            <div className="w-full rounded-Radius bg-gray-100 flex flex-col items-center justify-center gap-y-3 h-[75px]">
              <span className="text-center text-xs font-medium text-gray-700">مدت طرح</span>
              <span className="text-center text-xs font-black text-gray-700">
                {data?.investmentPeriod} ماهه
              </span>
            </div>
          </div>
          <div className="lg:w-[140px] w-[130px] relative rounded-Radius bg-gray-100 flex flex-col items-center justify-center gap-y-1 h-[160px]">
            <RingLoaderBar goalAmount={data?.goal} raisedAmount={data?.amountRaised} size={70} />
            <span className="text-xs font-medium text-center">تامین شده</span>
            <span className="text-sm font-black text-center text-gray-700">
              {data?.amountRaised && Number(data?.amountRaised).toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-center text-green-1000">
              {data?.totalInvestors && Number(data?.totalInvestors).toLocaleString()} سرمایه گذار
            </span>
          </div>
        </div>

        <div className="w-[90%] bg-gray-100 text-center text-gray-700 text-xs font-semibold rounded-Radius h-[30px] flex justify-center items-center">
          زمان باقی مانده
        </div>
        <div className="w-[90%] flex justify-center text-sm min-h-[50px] items-center">
          {data?.endDate ? <DateDistancerCounter date={data?.endDate} /> : 'تاریخ پایان نامشخص'}
        </div>
      </div>

      {/* Buttons: Stay at the Bottom */}
      <div className="w-full flex justify-between items-center mt-[-5px]">
        <Link
          to={innerCard ? `/investing/plan_details/${data?.id}` : `/plan_detail/${data?.id}`}
          className="w-[49%] text-sm font-bold lg:text-base h-[43px] flex justify-center items-center text-center text-green-1000 bg-white shadow-dropShadow2 rounded-br-[22px]">
          جزئیات طرح
        </Link>
        <button
          onClick={() =>
            token ? setModal({ type: 'buyUnit', data: data }) : navigate(`/login?${data?.id}`)
          }
          to={`/inevsting?id=${data?.id}`}
          className="w-[49%] text-sm font-bold lg:text-base h-[43px] flex justify-center items-center text-center bg-green-1000 text-white shadow-dropShadow2 rounded-bl-[22px]">
          سرمایه گذاری
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
