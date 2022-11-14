import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

export const ThemeContext = createContext();

function App() {
  //Dark mode OldSchoolFormat
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode")
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <ThemeContext.Provider value={{toggleTheme}}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeContext.Provider>
      <Toaster position="top-center"></Toaster>
    </div>
  );
}

export default App;
