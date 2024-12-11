import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col border-b-[0.5px] pb-4 border-[#000000]">
      {/* Top 01 */}
      <div className="w-full h-[48px] bg-[#000000] flex items-center caret-transparent">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Heading and Link */}
          <div className="flex items-center justify-center gap-2 text-[12px] sm:text-[14px] leading-[24px] text-[#FAFAFA] text-center">
            <h3 className="text-nowrap tracking-wide poppins-regular-400">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h3>
            <Link
              href="/"
              className="poppins-regular-600 underline ml-2 sm:ml-9"
            >
              Shop Now
            </Link>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-[#FAFAFA]">English</p>
            <Image
              src="/DropDown.png"
              alt="Dropdown"
              height={20}
              width={20}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>

      {/* Top 02 */}
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 pt-4">
        {/* Logo and Navigation */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-4">
          {/* Logo */}
          <Image
            src="/Logo.png"
            alt="Logo"
            height={24}
            width={118}
            className="h-auto max-w-full"
          />

          {/* Navigation */}
          <nav className="hidden lg:flex text-[16px] poppins-regular-400 gap-6 text-[#000000]">
            <ul className="flex gap-6">
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                Home
              </li>
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                Contact
              </li>
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                About
              </li>
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                Sign Up
              </li>
            </ul>
          </nav>

         
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4 w-full lg:w-auto mt-4 lg:mt-0">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-[#F5F5F5] py-1 px-2 rounded-md w-full sm:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="placeholder:text-[12px] bg-transparent outline-none w-full"
            />
            <Image
              src="/Search.png"
              alt="Search Icon"
              height={24}
              width={24}
              className="h-auto w-auto cursor-pointer"
            />
          </div>

          {/* Favorite Icon */}
          <div>
            <Image
              src="/Heart.png"
              alt="Favorite"
              height={24}
              width={24}
              className="h-auto w-auto cursor-pointer"
            />
          </div>

          {/* Cart Icon */}
          <div>
            <Image
              src="/Shop.png"
              alt="Cart"
              height={24}
              width={24}
              className="h-auto w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
