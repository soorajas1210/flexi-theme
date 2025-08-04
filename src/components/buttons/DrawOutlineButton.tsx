import { useAppSelector } from "../../app/hooks";

type DrawOutlineButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

const buttonBaseStyles =
  "relative px-4 py-2 font-medium border transition-colors cursor-pointer duration-300";

const themeButtonStyles: Record<string, string> = {
  default:
    "text-gray-800 bg-transparent border-gray-800 hover:bg-gray-800 hover:text-white",
  dark: "text-orange-600 bg-transparent border-orange-600 hover:bg-orange-600 hover:text-black",
  colorful:
    "text-colorfultext bg-transparent border-colorfultext hover:bg-colorfultext hover:text-white",
};

const DrawOutlineButton = ({ children, ...rest }: DrawOutlineButtonProps) => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  return (
    <button
      {...rest}
      className={`${buttonBaseStyles} ${themeButtonStyles[currentTheme]}`}
    >
      {children}
    </button>
  );
};

export default DrawOutlineButton;
