import Image from "next/image";
import Link from 'next/link';

function Herro() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="sm:w-full md:w-full lg:w-[80%] flex flex-wrap">
                {/* Left side */}
                <div className='border-r-2 border-neutral-100 p-10 sm:hidden md:block pb-0'>
                    <ul>
                        <li className='leading-loose hover:underline cursor-pointer'>Woman&apos;s Fashion</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Men&apos;s Fashion</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Electronics</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Home & Lifestyle</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Medicine</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Sports & Outdoor</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Baby&apos;s & Toys</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Groceries & Pets</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Health & Beauty</li>
                    </ul>
                </div>

                {/* Right side */}
                <div className='sm:w-full md:w-[650px] lg:w-[770px] sm:ml-0 md:ml-0 lg:ml-3 sm:mt-0 md:mt-10 sm:h-[250px] md:h-[280px] bg-black flex flex-wrap justify-between pt-6'>
                    {/* Left content */}
                    <div className='text-white sm:w-full md:w-[200px] pt-4 ml-5'>
                        {/* Icon div */}
                        <div className='flex gap-x-2 items-center'>
                            <span></span>
                            <span className='sm:text-[10px] md:text-xs'>iPhone 14 Series</span>
                        </div>

                        <h1 className='sm:text-md md:text-4xl font-bold my-6'>Up to 10% off Voucher</h1>
                        <Link href={"#products"} className='underline underline-offset-4 hover:font-bold'>Shop Now-&gt;</Link>
                    </div>

                    {/* Spots
                    <div className='w-[110px] h-[14px] top-[319px] left-[353px] gap-3 flex mt-60 sm:hidden md:block'>
                        <div className='w-3 h-3 opacity-50 bg-[#FFFF] rounded-lg'></div>
                        <div className='w-3 h-3 opacity-50 bg-[#FFFF] rounded-lg'></div>
                        <div className='w-[14px] h-[14px] opacity-50 bg-[#DB4444] rounded-lg'></div>
                        <div className='w-3 h-3 opacity-50 bg-[#FFFF] rounded-lg'></div>
                        <div className='w-3 h-3 opacity-50 bg-[#FFFF] rounded-lg'></div>
                    </div> */}

                    {/* Right image */}
                    <div className='sm:w-full md:w-auto'>
                        <Image
                            src={"/Hero.png"}
                            width={350}
                            height={200}
                            alt='hero images'
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herro;
