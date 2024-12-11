function Category() {
  return (
      <div className="w-full flex justify-center items-center mt-10 mb-1">
          {/* container */}
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] border-b-2 border-neutral-100 pb-10">

              {/* container boxes */}
              <div className="flex flex-col sm:pl-[6%] md:pl-0">
                  <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Categories</h3>
                  <div className="flex">
                      <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Browse By Category</h1>
                  </div>
              </div>

              <div className="flex sm:flex-wrap gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5">
                  {/* box1 */}
                  <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] lg:w-[220px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                      <img src="/Phones.png" alt="Phones" />
                      <p>Phones</p>
                  </div>

                  {/* box2 */}
                  <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] lg:w-[220px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                      <img src="/Computers.png" alt="Computers" />
                      <p>Computers</p>
                  </div>

                  {/* box 3 */}
                  <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] lg:w-[220px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                      <img src="/Smartwatch.png" alt="Smartwatch" />
                      <p>SmartWatch</p>
                  </div>

                  {/* box4 */}
                  <div className="group border-solid border-2 shadow-2xl rounded-md bg-red-500 sm:w-[120px] md:w-[200px] lg:w-[220px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                      <img src="/Camera.png" alt="Camera" />
                      <p>Camera</p>
                  </div>

                  {/* box 5 */}
                  <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] lg:w-[220px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                      <img src="/Headphones.png" alt="Headphones" />
                      <p>Headphones</p>
                  </div>

                  {/* box 6 */}
                  <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] lg:w-[220px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                      <img src="/Gaming.png" alt="Gaming" />
                      <p>Gaming</p>
                  </div>
                  {/* box complete */}
              </div>
          </div>
      </div>
  );
}
export default Category;
