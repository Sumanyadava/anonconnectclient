import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Popup from "./popup";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCountry, setIsCountry] = useState(false);

  const [selectedOption, setSelectedOption] = useState("Male");
  const [selectedCounter, setSelectedCounter] = useState("India");

  const genderArray = ["Male", "Female", "Others"];
  const countryArray = ["india", "mexico"];

  const [video2Width, setVideo2Width] = useState("30%" ); 
  const [chatbtn, setChatbtn] = useState(false)

  const popupfun = () => {
    setIsVisible(!isVisible);
  };

  const handleVideo2Click = () => {
    setChatbtn(!chatbtn)

    if (chatbtn == false) {
      setVideo2Width("0");   
    }else{
      setVideo2Width("30%");   
    }
    
    
  };
  console.log(chatbtn);

  return (
    <div className="bdy">
      <div className="video_wrap">
        <div className="video1">



          <div
            className="video2"
            style={{ width: video2Width, transition: "width 0.5s ease" }}
          >
            <button className="btn" onClick={handleVideo2Click}>
              {
                chatbtn ? <>&#9993;</> : <>&#10060;</> 
              }
            </button>
          </div>
        </div>
      </div>
      <div className="btn_wrap">
        <button className="btn_con" id="start">
          START
        </button>
        <button className="btn_con" id="stop">
          STOP
        </button>
        <button className="btn_con" id="gender" onClick={popupfun}>
          {selectedOption}
        </button>
        <button
          className="btn_con"
          id="country"
          onClick={() => setIsCountry(!isCountry)}
        >
          {selectedCounter}
        </button>
        {isVisible ? (
          <Popup
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            popupfun={popupfun}
            genderArray={genderArray}
          />
        ) : (
          ""
        )}

        {isCountry ? (
          <Popup
            selectedOption={selectedCounter}
            setSelectedOption={setSelectedCounter}
            genderArray={countryArray}
            popupfun={() => {
              setIsCountry(!isCountry);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
