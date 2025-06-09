/* eslint-disable no-unused-vars */
import DataContext from 'comon/context/MainContext';
import React, { useContext, useEffect } from 'react';
import InlineSVG from 'react-inlinesvg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from 'comon/storage/localStorage';
import HamburgerMenuIcon from 'comon/AnimationIcon/HamburgerMenuIcon';

function HamburgerMenu() {
  const { hamburgerMenuStatus, setHamburgerMenuStatus, role, userInfo } = useContext(DataContext);
  const token = getFromLocalStorage('token');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setHamburgerMenuStatus(false);
  }, [pathname]);
  // Close the menu if clicked outside
  const handleCloseMenu = (e) => {
    if (e.target.id === 'overlay') {
      setHamburgerMenuStatus(!hamburgerMenuStatus);
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/entering');
  };

  const InnerItemsconst =
    role == 'legal'
      ? [
          {
            name: 'سرمایه‌گذاری‌ها',
            label: 'my_investment',
            rout: '/my_investment',
            icon: ''
          },
          {
            name: ' اطلاعات شرکت',
            rout: '/company_info',
            label: 'company_info',
            icon: ''
          },
          {
            name: 'درخواست تامین مالی',
            rout: '/apply_for_financing',
            label: 'apply_for_financing',
            icon: ''
          },

          {
            name: 'گزارش‌های مالی',
            label: 'financial_report',
            rout: '/financial_report',
            icon: ''
          }
        ]
      : [
          {
            name: 'سرمایه‌گذاری‌ من',
            label: 'my_investment',
            rout: '/my_investment',
            icon: ''
          },
          {
            name: 'گزارش‌های مالی',
            label: 'financial_report',
            rout: '/financial_report',
            icon: ''
          },
          {
            name: 'اطلاعات کاربری',
            label: 'user_info',
            rout: '/user_info',
            icon: ''
          }
        ];

  const HamburgerMenuItems = [
    { name: 'صفحه اصلی', rout: '/', label: 'home', icon: '' },
    { name: 'طرح‌های سرمایه‌گذاری', rout: '/all_plans', label: 'all_plans', icon: '' },
    ...(token ? InnerItemsconst : []), // Spread InnerItemsconst if token exists
    {
      name: 'راهنمای سایت ',
      rout: '/user_guide',
      label: 'user_guide',
      icon: ''
    },
    { name: 'تماس با ما', rout: '/contact_us', label: 'contact_us', icon: '' },
    { name: 'درباره ما', rout: '/about_us', label: 'about_us', icon: '' }
  ];

  const handleActivity = () => {
    if (pathname?.length == 1 && pathname?.trim()?.includes('/')) {
      return 'home';
    } else if (pathname?.trim()?.includes('/all_plans')) {
      return 'all_plans';
    } else if (pathname?.trim()?.includes('/about_us')) {
      return 'about_us';
    } else if (pathname?.trim()?.includes('/user_guide')) {
      return 'user_guide';
    } else if (pathname?.trim()?.includes('/contact_us')) {
      return 'contact_us';
    } else if (pathname?.trim()?.includes('/entering')) {
      return 'entering';
    } else if (pathname?.trim()?.includes('/user_info')) {
      return 'user_info';
    } else if (pathname?.trim()?.includes('/company_info')) {
      return 'company_info';
    } else if (pathname?.trim()?.includes('/apply_for_financing')) {
      return 'apply_for_financing';
    } else if (pathname?.trim()?.includes('/my_investment')) {
      return 'my_investment';
    } else if (pathname?.trim()?.includes('/financial_report')) {
      return 'financial_report';
    } else return false;
    // else if (pathname?.trim()?.includes('/company_introduction')) {
    //   return 'company_introduction';
    // } else if (pathname?.trim()?.includes('/investment_guide')) {
    //   return 'investment_guide';
    // } else if (pathname?.trim()?.includes('/frequently_questions')) {
    //   return 'frequently_questions';
    // } else if (pathname?.trim()?.includes('/contact_us')) {
    //   return 'contact_us';
    // }
    // } else if (pathname?.trim()?.includes('/request_for_financing')) {
    //   return 'request_for_financing';
    // }
  };

  return (
    <div
      id="overlay"
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-600 ${
        hamburgerMenuStatus ? 'opacity-100 z-[1000000]' : 'opacity-0 z-[-1]'
      }`}
      onClick={handleCloseMenu}>
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] bg-white shadow-md transition-transform duration-300 transform rounded-l-[25px] ${
          hamburgerMenuStatus ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="w-[95%] h-[99%] flex flex-col  p-2 justify-between items-center">
          <div className="w-full h-[90%] flex flex-col  justify-start gap-y-4 items-center">
            {' '}
            <div className="w-full flex justify-end items-center  py-1">
              <HamburgerMenuIcon />
            </div>
            {/* login button with condition and also user info  */}
            {!token && !pathname.includes('login') ? (
              <Link
                to="/login"
                className="w-full bg-gray-600 rounded-lg text-center h-[38px] items-center justify-center font-medium text-xs flex text-white  gap-x-1 ">
                {/* ورود <strong>|</strong> ثبت نام <InlineSVG src={profile} /> */}
              </Link>
            ) : (
              <div className=" h-[20%] w-full flex flex-col  justify-center items-center gap-y-4  ">
                {/* <InlineSVG src={photoBox} className="h-[55px] w-[55px]" /> */}
                <div className="flex justify-center items-center w-full flex-col gap-y-2 ">
                  <span className="text-sm text-center font-bold text-gray-700 ">
                    {userInfo?.title}
                  </span>
                  <span className="text-xs text-center font-medium text-gray-500 ">
                    {userInfo?.phoneNumber}
                  </span>
                </div>
              </div>
            )}
            <div className="w-[95%] flex flex-col  justify-start h-auto gap-y-2  items-center">
              {' '}
              {HamburgerMenuItems.map((item, index) => (
                <Link
                  to={item.rout}
                  key={index}
                  className={`w-full flex justify-start items-center gap-x-2 pr-2 ${
                    handleActivity()
                      ? handleActivity().includes(item.label)
                        ? 'bg-gray-200 text-base font-bold'
                        : 'text-sm font-medium'
                      : 'text-sm font-medium'
                  } rounded-lg h-[38px] `}>
                  {/* <InlineSVG src={item.icon} className="h-[28px] w-[28px]" /> */}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* social meda icons */}
          <div className="h-[7%] flex justify-center items-center gap-x-3">
            {/* <InlineSVG src={facebook} />
            <InlineSVG src={linkdin} />
            <InlineSVG src={telegram} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
