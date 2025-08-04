import { useAppSelector } from "../app/hooks";
import { motion } from "motion/react";

const aboutCardStyles: Record<string, string> = {
  default: "bg-slate-100 text-gray-800",
  dark: "bg-gray-900 text-white",
  colorful: " text-gray-900 text-lg",
};

const About = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={`min-h-screen py-5 md:py-10 px-4 w-full md:px-16 ${
        aboutCardStyles[currentTheme] ?? aboutCardStyles.default
      }`}
    >
      <div className=" mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Welcome to Theme Switcher App
        </h1>

        <div className="space-y-6 text-justify leading-relaxed  ">
          <p>
            This is a dummy paragraph to demonstrate the text styling in various
            themes. Switch themes to see the difference. This extended version
            provides more content to better showcase how different themes handle
            typography, colors, and spacing.
          </p>
          <p>
            You can observe how font families change between serif and
            sans-serif options, how color schemes adapt from light to dark
            modes, and how spacing and layout adjustments create different
            visual experiences. The additional text allows you to see how themes
            affect readability across longer passages.
          </p>
          <p>
            How line heights and paragraph spacing contribute to the overall
            reading experience, and how different design approaches handle text
            density and visual hierarchy. This makes it easier to evaluate theme
            effectiveness and ensure your styling choices work well with real
            content rather than just short snippets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md group transition transform hover:scale-105 bg-white dark:bg-gray-800"
            >
              <img
                src={
                  "https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=dummy+image"
                }
                alt="Demo"
                className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Theme Card {i}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This is a themed content block. Switch themes to see how this
                  card adapts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
