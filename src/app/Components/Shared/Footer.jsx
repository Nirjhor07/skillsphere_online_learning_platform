import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer
        className="bg-[#0B1220] text-gray-300 px-10 pt-16 pb-6 
      Container mx-auto "
      >
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Logo + Description */}
          <div className="col-span-2">
            <div className="flex gap-1 items-center">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                S
              </div>
              <h2 className="text-white text-2xl font-bold mb-3">
                SkillSphere
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering learners with high-quality online courses, expert
              instructors, and practical skills for career growth. Learn
              anytime, anywhere, and unlock your full potential with
              SkillSphere.
            </p>
          </div>

          {/* products */}
          <div>
            <h6 className="text-white font-semibold mb-4">Platform</h6>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">All Courses</li>
              <li className="hover:text-white cursor-pointer">
                Popular Classes
              </li>
              <li className="hover:text-white cursor-pointer">
                Expert Instructors
              </li>
              <li className="hover:text-white cursor-pointer">Certificates</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h6 className="text-white font-semibold mb-4">Company</h6>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">
                Become an Instructor
              </li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/*  Resources */}
          <div>
            <h6 className="text-white font-semibold mb-4">Resources</h6>
            <ul className="space-y-2 text-sm mb-6">
              <li className="hover:text-white cursor-pointer">Student Guide</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Learning Community
              </li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
            <div />
            {/* Social Icons */}
            <div>
              <h6 className="text-white font-semibold mb-3">Social Links</h6>
              <div className="flex gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://www.facebook.com/share/18jAJiFdp8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/nirjhorakash?igsh=ZGltNHlxc3h2amlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t border-gray-700 mt-10 pt-6 flex 
        flex-col md:flex-row justify-between items-center text-sm text-gray-400 container mx-auto px-9"
        >
          <p>© 2026 SkillSphere. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
