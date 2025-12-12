import React from "react";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div>
      <CountdownTimer />
      <div style={{ backgroundImage: `url(${bottomBg})` }} className="h-[25vh] bg-cover flex justify-center items-center">
        <div className="flex gap-x-4 text-[#8486A9]">
          <div>
            <i className="fa-brands fa-twitter text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all  duration-500"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all transform duration-500"></i>
          </div>
          <div>
            <i className="fa-brands fa-github text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all transform duration-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
