const Footer = () => {
  return (
    <footer className="px-16 py-20 w-full flex flex-col gap-8">
      <div className="p-12 border-[1px] border-[#2196F3] flex gap-32 w-full">
        <div className="flex gap-11 w-full">
          <div className="w-[130px]">Logo</div>
          <div className="flex flex-col gap-4 w-[130px]">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul>
              <li className="py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">FAQS</li>
              <li className="py-2 text-sm">Blogs</li>
              <li className="py-2 text-sm">Support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-[130px]">
            <h4 className="text-base font-semibold">Resources</h4>
            <ul>
              <li className="py-2 text-sm">Webinars</li>
              <li className="py-2 text-sm">Case Studies</li>
              <li className="py-2 text-sm">Ebooks</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">News</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-[130px]">
            <h4 className="text-base font-semibold">Stay connected</h4>
            <ul>
              <li className="py-2 text-sm">Follow Us</li>
              <li className="py-2 text-sm">Join Us</li>
              <li className="py-2 text-sm">Feedback</li>
              <li className="py-2 text-sm">Newsletter</li>
              <li className="py-2 text-sm">Updates</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[400px]">
          <span className="flex flex-col gap-4">
            <h4 className="text-base font-semibold">Subscribe</h4>
            <p className="text-base">
              Join our newsletter to stay updated on features and releases.
            </p>
          </span>
          <div className="flex flex-col gap-3">
            <span className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="focus:outline-none border-[1px] border-black h-12 w-[265px] p-3 rounded-2xl"
              />
              <button className="h-12 w-[119px] border-[1px] border-buttonprimary rounded-2xl">
                Subscribe
              </button>
            </span>
            <p className="text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full gap-6">
        <div>
          <p className="text-xs">© 2021 AgroSkill Hub. All Rights Reserved.</p>
          <ul className="flex gap-6">
            <li className="text-xs">Privacy Policy</li>
            <li className="text-xs">Terms of Service</li>
            <li className="text-xs">Cookie Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
