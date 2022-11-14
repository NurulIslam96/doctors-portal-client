import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const ToggleMode = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <input
        id="toggleMode"
        type="checkbox"
        className="hidden peer"
        onClick={toggleTheme}
      />
      <span
        className="px-3 py-1  bg-slate-600 transition-all duration-200
    pointer-events-none peer-checked:bg-gray-300 peer-checked:text-black text-white"
      >
        Light
      </span>
      <span
        className="px-3 py-1 transition-all duration-200
    pointer-events-none bg-gray-300 peer-checked:bg-slate-600 text-black peer-checked:text-white "
      >
        Dark
      </span>
    </>
  );
};

export default ToggleMode;
