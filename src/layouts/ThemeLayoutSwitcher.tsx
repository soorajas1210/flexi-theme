// layouts/ThemeLayoutSwitcher.tsx

import { useAppSelector } from "../app/hooks";
import Navbar from "../components/global/Navbar";
import { Outlet } from "react-router";
import SidebarMenu from "../components/SidebarMenu";
import Footer from "../components/global/Footer";

const globalStyles: Record<string, string> = {
  default: "bg-white text-gray-800 font-sans",
  dark: "bg-gray-900 text-white font-serif",
  colorful: " bg-colorfulBg text-colorfultext font-pacifico",
};

const ThemeLayoutSwitcher = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  return (
    <div className={globalStyles[currentTheme]}>
      {currentTheme !== "dark" && (
        <div className="sticky top-0 z-20">
          <Navbar />
        </div>
      )}
      <div className="md:flex w-full ">
        {currentTheme === "dark" && (
          <>
            <div className="w-1/5 py-4 px-2 md:flex hidden sticky top-0 bg-gray-950 h-screen text-white border border-gray-800 ">
              <SidebarMenu />
            </div>
            <div className="sticky top-0 z-20 md:hidden">
              <Navbar />
            </div>
          </>
        )}
        <div className={currentTheme === "dark" ? " w-full md:w-4/5" : ""}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ThemeLayoutSwitcher;
