import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7f7f8]  pt-10 pb-4 md:py-20 text-gray-700 ">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <h2 className="font-playfair text-black text-3xl font-bold ">BUSINESSLY</h2>
        <hr className="bg-black h-[2px] my-8"/>
        <div className="grid grid-cols-1 font-sans text-center sm:text-start sm:grid-cols-2 md:grid-cols-2  md:my-20 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-2">About</h4>
            <p className="text-md text-gray-500">
            We are committed to delivering innovative solutions and high-quality services that meet the evolving needs of our users.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-500 text-md">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Staff</li>
              <li>Advertise</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-gray-500 text-md">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Extra Crunch Terms</li>
              <li>Code of Conduct</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="space-y-1 text-gray-500 text-md">
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col font-sans justify-between w-full sm:flex sm:flex-row sm:gap-4   text-sm text-gray-500">
          <p>Copyright © 2024 Business Blog</p>
          <p>Powered by Business Blog</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
