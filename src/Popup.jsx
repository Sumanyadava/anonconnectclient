import React, { useState } from "react";

const Popup = ({setSelectedOption,popupfun,selectedOption , genderArray}) => {

    
  




  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    popupfun()
  };



  return (
    <>
      <div className="blur_bg"></div>
      <div className="pop">
        <button onClick={popupfun} className="close_btn">
          close
        </button>

        <div>
          <h2>Select Your Gender</h2>

          <div className="select-wrapper">
            <select
              value={selectedOption}
              className="custom-select"
              onChange={handleSelectChange}
              
            >
                {
                    genderArray.map((gen,index) => {
                        return <option value={gen} key={index}>{gen}</option>
                    })
                }
              
            </select>
          </div>

        </div>
      </div>
    </>
  );
};

export default Popup;
