import Image from "next/image";

function Explore() {
  return (
    <main>
      <div id="products" className="w-full flex justify-center items-center mt-10 mb-1">
        {/* container */}
        <div className="w-[90%] sm:w-[95%] md:w-[80%] lg:w-[80%]">
          {/* container boxes */}
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
              Our Products
            </h3>
            <div className="flex">
              <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
                Explore Our Products
              </h1>
            </div>
          </div>

          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
            {/* box1 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                {/* Image */}
                <Image
                  src={"/Dogfood.png"}
                  width={100}
                  height={100}
                  alt="Breed Dry Dog Food"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">Breed Dry Dog Food</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$100</span>

                <img src="/Threestar.png" alt="Threestar" />
                <span className="text-gray-400 mt-2">(35)</span>
              </div>
            </div>

            {/* box2 */}
            <div className="pt-4">
              <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                {/* Image */}
                <Image
                  src={"/DSLRcamera.png"}
                  width={150}
                  height={100}
                  alt="DSLR CAMERA"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">CANON EOS DSLR CAMERA </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$360</span>

                <img src="/Fourstar.png" alt="Four Star" />
                <span className="text-gray-400 mt-2">(95)</span>
              </div>
            </div>

            {/* box 3 */}
            <div className="pt-4">
              <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center">
                <Image
                  src={"/Gaminglaptop.png"}
                  width={150}
                  height={100}
                  alt="ASUS FHD GAMING LAPTOP"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">ASUS FHD GAMING LAPTOP </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$700</span>
                <img src="/Fivestar.png" alt="Fivestar" />
                <span className="text-gray-400 mt-2">(325)</span>
              </div>
            </div>

            {/* box4 */}
            <div className="pt-4">
              <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center">
                <Image
                  src={"/Productset.png"}
                  width={150}
                  height={100}
                  alt="Curology Product Set"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">Curology Product Set </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$500</span>
                <img src="/Fivestar.png" alt="Fivestar" />
                <span className="text-gray-400 mt-2">(145)</span>
              </div>
            </div>
            {/* other boxes */}
            {/* box complete */}
          </div>

          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
            {/* box1 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                {/* Image */}
                <Image
                  src={"/Electriccar.png"}
                  width={150}
                  height={100}
                  alt="Kids Electric Car"
                />
                <span className="bg-green-500 px-2 rounded-md text-white absolute top-2 left-2">New</span>
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">Kids Electric Car </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$960</span>
                <img src="/Fivestar.png" alt="Fivestar" />
                <span className="text-gray-400 mt-2">(65)</span>
              </div>
              <img src="/Redcolor.png" alt="" />
            </div>

            {/* box2 */}
            <div className="pt-4">
              <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                {/* Image */}
                <Image
                  src={"/Zoomsoccer.png"}
                  width={150}
                  height={100}
                  alt="Jr. Zoom Soccer Cleats Shoes"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">JR. Zoom Soccer Cleats </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$1160</span>
                <img src="/Fivestar.png" alt="Fivestar" />
                <span className="text-gray-400 mt-2">(35)</span>
              </div>
              <img src="/Yellowcolor.png" alt="" />
            </div>

            {/* box 3 */}
            <div className="pt-4">
              <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center">
                <Image
                  src={"/GP11USB.png"}
                  width={150}
                  height={100}
                  alt="GP11 Shooter USB Gamepad"
                />
                <span className="bg-green-500 px-2 rounded-md text-white absolute top-2 left-2">New</span>
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">GP11 Shooter USB Gamepad </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$660</span>
                <img src="/Fourhalfstar.png" alt="Fivestar" />
                <span className="text-gray-400 mt-2">(55)</span>
              </div>
              <img src="/Blackcolor.png" alt="" />
            </div>

            {/* box4 */}
            <div className="pt-4">
              <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center">
                <Image
                  src={"/Satinjacket.png"}
                  width={150}
                  height={100}
                  alt="Quilted Satin Jacket"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <Image
                    className="cursor-pointer ml-44"
                    src="/Heart.png"
                    alt="icon-explorer"
                    height={32}
                    width={18}
                  />
                  <Image
                    className="cursor-pointer mt-3 ml-44"
                    src="/Eye.png"
                    alt="icon-explorer"
                    height={32}
                    width={24}
                  />
                </span>

                {/* Add to Cart */}
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>

              <h1 className="font-bold font-sans pt-2">Quilted Satin Jacket </h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                <span className="text-red-500 font-bold mt-2">$660</span>
                <img src="/Fourhalfstar.png" alt="Fivestar" />
                <span className="text-gray-400 mt-2">(55)</span>
              </div>
              <img src="/Greencolor.png" alt="" />
              </div>

              </div>
              </div>
              </div>
              
              </main>
  );
}

export default Explore;
