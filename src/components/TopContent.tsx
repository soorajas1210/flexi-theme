import { useAppSelector } from "../app/hooks";
import DrawOutlineButton from "./buttons/DrawOutlineButton";

const baseStyles: Record<string, string> = {
  default:
    "px-4 sm:px-10 md:px-16 lg:px-20 py-5 space-y-10 bg-stone-200 pt-10 md:pt-16",
  dark: "px-4 sm:px-10 md:px-16 lg:px-20 py-5 space-y-10 pt-10 md:pt-16",
  colorful:
    "px-4 sm:px-10 md:px-16 lg:px-20 space-y-16 bg-colorfulBg3 py-10 md:py-16 xl:py-24",
};

const TopContent = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  return (
    <div className={baseStyles[currentTheme]}>
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-5">
        Welcome to Theme Switcher App
      </h1>
      <p className="text-base">
        This is a dummy paragraph to demonstrate the text styling in various
        themes. Switch themes to see the difference. This extended version
        provides more content to better showcase how different themes handle
        typography, colors, and spacing. You can observe how font families
        change between serif and sans-serif options, how color schemes adapt
        from light to dark modes, and how spacing and layout adjustments create
        different visual experiences. The additional text allows you to see how
        themes affect readability across longer passages, how line heights and
        paragraph spacing contribute to the overall reading experience, and how
        different design approaches handle text density and visual hierarchy.
        This makes it easier to evaluate theme effectiveness and ensure your
        styling choices work well with real content rather than just short
        snippets.
      </p>
      <DrawOutlineButton>Read More</DrawOutlineButton>
    </div>
  );
};

export default TopContent;
