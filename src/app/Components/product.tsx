import Image from "next/image";
import Link from 'next/link';

function Products() {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                {/* container */}
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
                    {/* container boxes */}
                    <div className="flex flex-col">
                        <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">This Month</h3>
                        <div className="flex justify-between">
                            <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Best Selling Products</h1>
                            <Link href={"#products"} className='bg-red-500 pt-2 hover:bg-red-600 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-10 mt-3'>
                                View All
                            </Link>
                        </div>
                    </div>

                    <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-wrap md:flex-wrap lg:flex-nowrap">
                        {/* box1 */}
                        <div className="sm:w-full md:w-[300px] lg:w-[220px]">
                            <div className="group shadow-md bg-neutral-100 h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/Northcoat.png"}
                                    width={150}
                                    height={100}
                                    alt="The North Coat"
                                />
                                <span className='absolute top-1 right-1 text-red rounded-full'>
                                    <Image className="cursor-pointer ml-44" src="/Heart.png" alt="icon-explorer" height={32} width={18} />
                                    <Image className="cursor-pointer mt-3 ml-44" src="/Eye.png" alt="icon-explorer" height={32} width={24} />
                                </span>

                                {/* Add to Cart */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>
                            <h1 className="font-bold font-sans pt-2">The North Coat</h1>
                            <span className="text-red-500 font-bold">$260</span> <span className="text-gray-400 font-bold line-through ml-2">$360</span>
                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <img src="/Fivestar.png" alt="Fivestar" />
                                <span className='text-gray-400 mt-1'>(65)</span>
                            </div>
                        </div>

                        {/* box2 */}
                        <div className="sm:w-full md:w-[300px] lg:w-[220px]">
                            <div className="group shadow-md bg-neutral-100 h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/Guccibag.png"}
                                    width={150}
                                    height={100}
                                    alt="Gucci Bag"
                                />
                                <span className='absolute top-1 right-1 text-red rounded-full'>
                                    <Image className="cursor-pointer ml-44" src="/Heart.png" alt="icon-explorer" height={32} width={18} />
                                    <Image className="cursor-pointer mt-3 ml-44" src="/Eye.png" alt="icon-explorer" height={32} width={24} />
                                </span>

                                {/* Add to Cart */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>
                            <h1 className="font-bold font-sans pt-2">Gucci Duffle Bag</h1>
                            <span className="text-red-500 font-bold">$960</span> <span className="text-gray-400 font-bold line-through ml-2">$1160</span>
                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <img src="/Fivestar.png" alt="Fivestar" />
                                <span className='text-gray-400 mt-1'>(65)</span>
                            </div>
                        </div>

                        {/* box3 */}
                        <div className="sm:w-full md:w-[300px] lg:w-[220px]">
                            <div className="group shadow-md bg-neutral-100 h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/Cpucooler.png"}
                                    width={150}
                                    height={100}
                                    alt="RGB Liquid CPU Cooler"
                                />
                                <span className='absolute top-1 right-1 text-red rounded-full'>
                                    <Image className="cursor-pointer ml-44" src="/Heart.png" alt="icon-explorer" height={32} width={18} />
                                    <Image className="cursor-pointer mt-3 ml-44" src="/Eye.png" alt="icon-explorer" height={32} width={24} />
                                </span>

                                {/* Add to Cart */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>
                            <h1 className="font-bold font-sans pt-2">RGB Liquid CPU Cooler</h1>
                            <span className="text-red-500 font-bold">$160</span> <span className="text-gray-400 font-bold line-through ml-2">$170</span>
                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                                <img src="/Fivestar.png" alt="Fivestar" />
                                <span className='text-gray-400 mt-1'>(65)</span>
                            </div>
                        </div>

                        {/* box4 */}
                        <div className="sm:w-full md:w-[300px] lg:w-[220px]">
                            <div className="group shadow-md bg-neutral-100 h-[180px] flex justify-center items-center cursor-pointer relative">
                                <Image
                                    src={"/Bookself.png"}
                                    width={150}
                                    height={100}
                                    alt="Game Shelf"
                                />
                                <span className='absolute top-1 right-1 text-red rounded-full'>
                                    <Image className="cursor-pointer ml-44" src="/Heart.png" alt="icon-explorer" height={32} width={18} />
                                    <Image className="cursor-pointer mt-3 ml-44" src="/Eye.png" alt="icon-explorer" height={32} width={24} />
                                </span>

                                {/* Add to Cart */}
                                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </button>
                            </div>
                            <h1 className="font-bold font-sans pt-2">Small BookShelf</h1>
                            <span className="text-red-500 font-bold">$320</span>
                            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                                <img src="/Fivestar.png" alt="Fivestar" />
                                <span className='text-gray-400 mt-1'>(65)</span>
                            </div>
                        </div>
                    </div>
                    {/* box complete */}
                </div>
            </div>
        </main>
    )
}

export default Products;
