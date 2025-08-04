import { lazy, Suspense, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTheme } from "../../features/theme/themeSlice";
import type { ThemeType } from "../../types/theme";
import { MENUITEMS } from "../../utils/constants";
import logo from "../../assets/logo/logo-black.png";
import logoWhite from "../../assets/logo/logo-white.png";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
const SidebarMenu = lazy(() => import("../SidebarMenu"));

const navbarStyles: Record<string, string> = {
  default:
    "flex justify-between items-center shadow  bg-white w-full h-20 px-6 md:px-24",
  dark: "flex justify-between items-center bg-gray-900 text-white w-full h-20 px-6 md:px-24",
  colorful:
    "flex justify-between items-center shadow  bg-colorfulNav text-white w-full h-20 px-6 md:px-24",
};

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.theme);
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("theme", e.target.value as ThemeType);
    dispatch(setTheme(e.target.value as ThemeType));
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={navbarStyles[currentTheme]}
      >
        <div className="w-32 sm:w-40">
          <Link to="/">
            <img
              src={currentTheme === "dark" ? logoWhite : logo}
              alt="App logo"
              className="w-full object-cover"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center justify-center">
          {currentTheme !== "dark" && (
            <div className="flex items-center gap-4">
              {MENUITEMS?.map((items) => (
                <p
                  key={items.path}
                  className={
                    location.pathname === items.path
                      ? ` rounded-sm px-2 py-1 ${
                          currentTheme === "default"
                            ? "text-amber-100 bg-gray-600"
                            : "text-colorfulYellow"
                        }`
                      : "px-2 py-1"
                  }
                >
                  <Link to={items.path}>{items.label}</Link>
                </p>
              ))}
            </div>
          )}
          <div className="relative inline-block text-left">
            <select
              value={currentTheme}
              onChange={themeChangeHandler}
              className="appearance-none w-36 px-4 py-2 pr-8 rounded-lg bg-white border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="default">🌤 Default</option>
              <option value="dark">🌙 Dark</option>
              <option value="colorful">🎨 Colorful</option>
            </select>
            <div className="pointer-events-none absolute top-2/4 right-3 -translate-y-2/4 text-gray-500 text-sm">
              ▼
            </div>
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Slide */}
      <div
        className={`fixed top-20 left-0 w-3/4 max-w-xs h-full z-50 text-sm  shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${currentTheme !== "dark" ? "bg-white" : "bg-gray-900"}`}
      >
        {currentTheme !== "dark" ? (
          <div className="p-6 space-y-4">
            {MENUITEMS?.map((items) => (
              <p key={items.path}>
                <Link
                  to={items.path}
                  className={`block px-4 py-2 rounded ${
                    location.pathname === items.path
                      ? "bg-green-500 text-white"
                      : "text-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {items.label}
                </Link>
              </p>
            ))}

            {/* Theme Select for Mobile */}
            <select
              value={currentTheme}
              onChange={(e) => {
                themeChangeHandler(e);
                setIsMenuOpen(false);
              }}
              className="min-w-[140px] max-w-[180px] px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="default">🌤 Default</option>
              <option value="dark">🌙 Dark</option>
              <option value="colorful">🎨 Colorful</option>
            </select>
          </div>
        ) : (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SidebarMenu />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default Navbar;
