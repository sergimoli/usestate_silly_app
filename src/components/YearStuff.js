import React, { useState } from "react";
import PropTypes from "prop-types";

function YearStuff({ currentYear }) {
  const [Year, setYear] = useState(currentYear);

  const handleYearChange = (e) => {
    const yearChanged = parseInt(e.target.value);

    if (Number.isInteger(yearChanged)) {
      setYear(yearChanged);
    } else {
      setYear(currentYear);
    }
  };

  const GetNextYear = () => {
    setYear(Year + 1);
  };

  const GetPreviousYear = () => {
    setYear(Year - 1);
  };

  return (
    <>
      <div>hello</div>
      <div>{Year}</div>
      <div>
        <button onClick={GetNextYear}>Next year</button>
        <button onClick={GetPreviousYear}>Previous year</button>
        <p>change year:</p>
        <input name="YearInput" type="text" onChange={handleYearChange} />
      </div>
    </>
  );
}

YearStuff.propTypes = {
  currentYear: PropTypes.number.isRequired,
};

export default YearStuff;
