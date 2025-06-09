import DataContext from 'comon/context/MainContext';
import React, { useContext } from 'react';
import InlineSVG from 'react-inlinesvg';
import diamond from 'asset/Pictures/Images/diamond.svg';
import failed from 'asset/Pictures/Images/failed.svg';
import PrintMainButton from 'comon/Print/PrintMainButton';

function Status() {
  const { modal, setModal } = useContext(DataContext);

  return (
    <div
      className="w-full flex flex-col items-center justify-start rounded-large bg-white drop-shadow-lg h-auto min-h-[300px] py-8 gap-y-12 lg:max-w-[500px] "
      style={{
        backgroundImage:
          'radial-gradient(100% 100% at 100% 0%, #EFFCFD 30%, rgba(255, 255, 255, 0) 100%)'
      }}>
      <InlineSVG src={modal?.type == 'success' ? diamond : failed} className="mt-10" />
      <span className="w-full text-center text-gray-700 font-semibold ">
        {modal?.type == 'success' ? 'درخواست با موفقیت انجام شد' : ' درخواست ناموفق!'}
      </span>

      {modal?.type == 'success' && modal?.data && (
        <>
          <span className="text-center w-full text-gray-500 font-semibold ">
            کدرهگیری: {modal?.data}
          </span>

          <PrintMainButton
            documentTitle="کدرهگیری "
            pdf={
              <div
                className="w-full flex flex-col items-center justify-center rounded-large bg-white drop-shadow-lg h-full min-h-[500px] py-8 gap-y-5 lg:max-w-[500px] "
                style={{
                  backgroundImage:
                    'radial-gradient(100% 100% at 100% 0%, #EFFCFD 30%, rgba(255, 255, 255, 0) 100%)'
                }}>
                <InlineSVG src={diamond} />
                <span className="text-center w-full text-gray-500 font-semibold ">
                  کدرهگیری: {modal?.data}
                </span>
              </div>
            }
          />
        </>
      )}
      <button
        onClick={() => setModal()}
        className="w-[80%] rounded-md border border-gray-700 text-gray-700 text-center focus:outline-none focus:ring-0  bg-transparent h-[40px]">
        بستن
      </button>
    </div>
  );
}

export default Status;
