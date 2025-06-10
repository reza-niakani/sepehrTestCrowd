/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import PrivateRouts from './setting/privateRoute';
import NotFound from 'comon/NotFound/NotFound';
import HomePage from 'pages/home/HomePage';
import AllPlans from 'pages/AllPlans/AllPlans';
import PlanDetail from './../../pages/PlanDetail/PlanDetail';
import EnteringMainCompo from 'pages/Login/EnteringMainCompo';
import Dashboard from 'pages/Dashboard/Dashboard';
import Investing from 'pages/Investing/Investing';
import PanelPlanDetails from 'pages/PanelPlanDetails/PanelPlanDetails';
import FinancialReport from 'pages/FinancialReport/FinancialReport';
import UserInfo from 'pages/UserInfo/UserInfo';
import RequestForFinancing from 'pages/RequestForFinancing/RequestForFinancing';
import AboutUs from 'pages/AboutUs/AboutUs';
import ContactUs from 'pages/ContactUs/ContactUs';
import UserGuide from 'pages/UserGuide/UserGuide';

const RoutsComponent = () => {
  return (
    <>
      <Routes>
        {/* private routes */}
        <Route element={<PrivateRouts />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/financial_report" element={<FinancialReport />} />
          <Route path="/user_info" element={<UserInfo />} />
          <Route path="/user_info/:name" element={<UserInfo />} />
          <Route path="/investing/plan_details/:id" element={<PanelPlanDetails />} />
          <Route path="/request_for_financing" element={<RequestForFinancing />} />
        </Route>

        {/* impersonate user */}
        {/* <Route path="/impersonate" element={<Impersonate />} /> */}

        {/* globaly rout */}
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about_us" exact element={<AboutUs />} />
        <Route path="/contact_us" exact element={<ContactUs />} />
        <Route path="/user_guide" exact element={<UserGuide />} />
        <Route path="/login" exact element={<EnteringMainCompo />} />
        <Route path="/plan_detail/:id" exact element={<PlanDetail />} />
        <Route path="/all_plans" exact element={<AllPlans />} />
        {/* 
        <Route path="/investing/:id" exact element={<Investing />} />
        <Route path="/about_us" exact element={<AboutUs />} />
        <Route path="/contact_us" exact element={<ContactUs />} />
        <Route path="/user_guide" exact element={<UserGuide />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutsComponent;

// check "/" rout when token is false
