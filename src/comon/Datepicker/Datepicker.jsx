/* eslint-disable no-unused-vars */
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import InlineSVG from 'react-inlinesvg';
import calender from 'asset/Pictures/Icons/calendar.svg';
import './style.css';

const DatePickerPersian = ({ value, onchange, name }) => {
  // Function to handle the date conversion correctly
  const handleDateChange = (date) => {
    const jsDate = date.toDate(); // Convert the date to a JavaScript Date object
    jsDate.setHours(12, 0, 0, 0); // Set the time to noon to avoid timezone issues
    onchange(jsDate.toISOString(), name); // Pass the ISO string to the onchange handler
  };

  return (
    <div className={`h-auto flex flex-col items-end relative  w-full`}>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={value}
        onChange={handleDateChange}
        name={name}
        render={
          <input
            dir="rtl"
            className=" focus:border-[#E0E0E0] focus:ring-0 relative focus:outline-none cursor-pointer  placeholder:text-[#CCCCCC] placeholder:text-xs w-full h-[42px] pr-2 rounded-lg  border text-sm text-gray-700  border-[#E0E0E0] "
          />
        }
      />
      <InlineSVG src={calender} className="absolute top-3 left-3" />
    </div>
  );
};

export default DatePickerPersian;
