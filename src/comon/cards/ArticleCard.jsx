import React from 'react';
import InlineSVG from 'react-inlinesvg';
import { useNavigate } from 'react-router-dom';

function ArticleCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(data?.link)}
      className="w-[330px] h-[300px] max-h-[305px] cursor-pointer rounded-large bg-primary-100  flex justify-center items-center flex-col ">
      <div className="w-[90%] flex flex-col items-center justify-between h-[90%] gap-y-3  ">
        <InlineSVG src={data.img} className="w-[305px] h-[150px] rounded-md " />
        <span className="text-sm w-full font-black text-start text-gray-700 ">{data.title}</span>
        <p className="text-sm w-full  text-gray-700  text-start">{data.description}</p>
        <span className="text-sm w-full text-start text-gray-200 ">{data.date}</span>
      </div>
    </div>
  );
}

export default ArticleCard;
