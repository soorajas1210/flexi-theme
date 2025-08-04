import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-10 lg:px-20 py-10 bg-gray-800 text-white  border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold font-spartan mb-2">
            Theme Switcher
          </h3>
          <p className="text-sm font-serif">
            Switch between light, dark, and colorful themes to match your style.
            Enhance your browsing experience with beautiful design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 ">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 ">Contact Us</h4>
          <p className="text-sm">Email: hello@themeswitcherapp.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Location: India, 560001</p>

          {/* Social icons (dummy) */}
          <div className="flex space-x-4 mt-4 text-xl">
            <span className="hover:text-blue-500 cursor-pointer">🌐</span>

            <span className="hover:text-pink-500 cursor-pointer">📸</span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Theme Switcher App. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
