import React from 'react';

function WorkHistory({ data }) {
  return (
    <div className=" w-[90%] min-h-[300px] p-5 flex flex-col items-center justify-center gap-y-8   bg-white rounded-large  border-2 border-gold-1000">
      <span className="w-full border-b border-gray-200 py-2 text-gray-700 ">سابقه کاری </span>
      <ul className="w-[90%]  flex flex-col items-start gap-y-5 list-inside  list-disc  ">
        {data?.map((item, index) => (
          <li key={index} className=" text-accent-1000 text-start whitespace-nowrap text-base ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkHistory;
