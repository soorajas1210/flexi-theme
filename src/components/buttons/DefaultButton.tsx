import { useAppSelector } from "../../app/hooks";

const defaultButtonStyles: Record<string, string> = {
  default:
    "px-4 py-1 font-medium text-sm cursor-pointer bg-stone-500 text-white  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
  dark: "px-4 py-1 font-medium text-sm cursor-pointer bg-orange-600   w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
  colorful:
    "px-4 py-1 font-medium text-sm cursor-pointer bg-colorfulButton  w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
};

const DefaultButton = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  return (
    <button className={defaultButtonStyles[currentTheme]}>Add to cart</button>
  );
};

export default DefaultButton;
