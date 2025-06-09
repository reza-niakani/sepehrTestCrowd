import InnerPageStructure from 'comon/pageStructures/InnerPageStructure';
import React, { useContext, useEffect, useState } from 'react';
import InlineSVG from 'react-inlinesvg';
import advertisment from 'asset/Pictures/Images/advertisment.svg';
import support from 'asset/Pictures/Icons/support.svg';
import Axios from 'comon/Axios/Axios';
import DataContext from 'comon/context/MainContext';
import { useNavigate, useParams } from 'react-router-dom';
import StartPage from './components/StartPage';
import SejamInfo from './components/SejamInfo';
import info from 'asset/Pictures/Icons/infoIcon.svg';
import chevron from 'asset/Pictures/Icons/chevronLeftgreen.svg';
import Logs from './components/Logs';

function UserInfo() {
  const { role } = useContext(DataContext);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    UserInfo();
  }, []);

  const { name } = useParams();
  const navigate = useNavigate();

  const UserInfo = async () =>
    await Axios.get('/Accounts/GetUserSejamInfo')
      .then((res) => setUserInfo(res?.data))
      .catch(() => setUserInfo(false));

  const HandleComponent = () => {
    switch (name) {
      case '':
        return {
          showtitle: false,
          title: null,
          component: <StartPage userInfo={userInfo} role={role} />
        };
      case 'sejam_info':
        return {
          showtitle: true,
          title: role == 'legal' ? 'اطلاعات شرکت' : 'اطلاعات فردی ',
          component: <SejamInfo userInfo={userInfo} role={role} />
        };
      case 'logs':
        return {
          showtitle: true,
          title: 'گزارش ورود و خروج',
          component: <Logs userInfo={userInfo} role={role} />
        };
      default:
        return {
          showtitle: false,
          title: null,
          component: <StartPage userInfo={userInfo} role={role} />
        };
    }
  };

  return (
    <InnerPageStructure>
      {/* title */}
      <div className="w-full flex flex-col  justify-start items-center gap-y-3 lg:pb-0 pb-20 ">
        {' '}
        {HandleComponent()?.showtitle && (
          <div className="px-4 lg:w-[95%] w-full flex  justify-between items-center border border-[#E0E0E0] rounded-[20px] lg:h-[65px] h-[60px] bg-white text-base text-gray-700  ">
            {' '}
            <div className="w-auto flex justify-start items-center gap-x-3 flex-nowrap">
              {' '}
              <div
                className={`lg:w-12 w-7 lg:h-12 h-7 flex justify-center items-center rounded-lg drop-shadow-md  bg-white   }`}>
                <InlineSVG src={info} />
              </div>{' '}
              <span> {HandleComponent()?.title}</span>
            </div>
            <InlineSVG src={chevron} className="cursor-pointer" onClick={() => navigate(-1)} />
          </div>
        )}
        {/* main part  */}
        {HandleComponent()?.component}
      </div>
      {/*  asster sidebar  */}
      <div className=" min-w-[240px] w-auto hidden lg:flex flex-col items-center justify-start gap-y-2 ">
        <InlineSVG src={advertisment} />
        <a
          href="tel:۰۲۱-۵۹۱۶۱۰۰"
          className="w-full  rounded-lg border border-[#E0E0E0] flex items-center justify-center gap-x-5 text-sm text-[#616161] bg-white h-[42px]">
          <div className="w-auto justify-start items-center flex gap-x-2 ">
            <InlineSVG
              src={support}
              className="lg:w-[95%] lg:h-auto h-auto lg:object-contain object-cover"
            />
            پشتیبانی
          </div>
          ۰۲۱-۵۹۱۶۱۰۰
        </a>
      </div>
    </InnerPageStructure>
  );
}

export default UserInfo;
