import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setTheme } from "../features/theme/themeSlice";
import type { ThemeType } from "../types/theme";
import { MENUITEMS } from "../utils/constants";
import logo from "../assets/logo/logo-white.png";
import { Link, useLocation } from "react-router";

const SidebarMenu = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.theme);
  const location = useLocation();

  const themeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("theme", e.target.value as ThemeType);
    dispatch(setTheme(e.target.value as ThemeType));
  };
  return (
    <div className="flex items-center flex-col gap-4  px-5  ">
      <div className="relative inline-block text-left self-end">
        <select
          value={currentTheme}
          onChange={themeChangeHandler}
          className="appearance-none  px-2 py-1 text-sm bg-gray-800 text-white rounded-full  shadow-md cursor-pointer focus:outline-none  transition duration-200"
          defaultValue="default"
        >
          <option value="default">🌤</option>
          <option value="dark">🌙</option>
          <option value="colorful">🎨</option>
        </select>
      </div>

      <div className="mt-20 space-y-16 w-full">
        <div className="justify-center w-full flex">
          <Link to="/">
            <img src={logo} alt="App logo" className="w-52  object-cover " />
          </Link>
        </div>
        <div className="w-full">
          {MENUITEMS?.map((items) => {
            return (
              <div
                key={items.path}
                className={`border-b  first:border-t border-slate-700 py-4 ${
                  location.pathname === items.path
                    ? "text-red-400 font-semibold"
                    : ""
                }`}
              >
                <p className="hover:translate-x-1 cursor-pointer duration-300 ease-in-out hover:text-gray-400">
                  <Link to={items.path}>{items.label}</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
