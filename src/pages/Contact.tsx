import { useAppSelector } from "../app/hooks";
import DrawOutlineButton from "../components/buttons/DrawOutlineButton";
import { motion } from "motion/react";

const contactStyles: Record<string, string> = {
  default:
    "px-4 py-5 md:py-10 sm:px-6 lg:px-20 xl:px-32 w-full bg-slate-50  text-gray-900  min-h-screen",
  dark: "px-4 py-5 md:py-10 sm:px-6 lg:px-20 xl:px-32 w-full bg-gray-900  text-white  min-h-screen",
  colorful:
    "px-4 py-5 md:py-10 sm:px-6 lg:px-20 xl:px-32 w-full bg-colorfulBg  text-colorfultext  min-h-screen",
};

const Contact = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={contactStyles[currentTheme]}
    >
      <div className=" mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center ">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed ">
              We'd love to hear from you! Whether you have a question about
              features, feedback, or anything else, our team is ready to answer
              all your questions.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold  ">Email</h4>
                <p className="text-sm">support@themeswitcherapp.com</p>
              </div>

              <div>
                <h4 className="font-semibold  ">Phone</h4>
                <p className="text-sm"> +91 98765 43210</p>
              </div>

              <div>
                <h4 className="font-semibold  ">Address</h4>
                <p className="text-sm">
                  123 Theme Street, Design City, India - 560001
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded border border-gray-300  bg-white  text-black "
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded border border-gray-300  bg-white  text-black "
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full p-2 rounded border border-gray-300  bg-white  text-black "
                placeholder="Type your message..."
              ></textarea>
            </div>

            <DrawOutlineButton>Send Message</DrawOutlineButton>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
