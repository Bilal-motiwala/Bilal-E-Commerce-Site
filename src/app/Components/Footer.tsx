import React from 'react'
import Image from 'next/image'
 const Footer = () => {
  return (
    <div>
        <div className='bg-black w-full  h-[440px] top-[5462px] pt-12 '>
            <div className=' w-[1170px] flex justify-around  h-[236px] mt-[80px] ml-[135px] gap-[87px]  '>

                <div className='w-[217px] h-[188px] gap-[16px] '>
                    <p className=' w-[118px] h-[24px] font-bold text-[24px] leading-6 tracking-[3%] text-[#FAFAFA]'>Exclusive</p>
                    <p className=' w-[101px] h-[28px] text-[20px] font-medium leading-7 text-[#FAFAFA]'>Subscribe</p>
                    <p className=' w-[206px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'> Get 10% off your order</p>
                    <input type="text" placeholder='Enter your email' className=' bg-black w-[217px] h-[48px] rounded border-[1.5px] pt-[12px] pb-[12px] pl-[16px] gap-[32px]'/>
                </div>

                <div className='w-[175px] h-[180px] gap-[24px]'>
                    <p className=' w-[81px] h-[28px] text-[20px] font-medium leading-7 text-[#FAFAFA]'>Support</p>
                    <p className=' w-[175px] h-[48px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh. </p>
                    <p className=' w-[175px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'> exclusive@gmail.com</p>
                    <p className='w-[165px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'> +88015-88888-9999</p>
                </div>

                <div className='w-[123px] h-[236px] gap-[24px] '>
                <p className=' w-[85px] h-[28px] text-[20px] font-medium leading-7 text-[#FAFAFA]'>Account</p>
                <p className=' w-[94px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>My Account </p>
                <p className=' w-[123px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Login / Register </p>
                <p className=' w-[35px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Cart </p>
                <p className=' w-[61px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Wishlist </p>
                <p className=' w-[41px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Shop</p>
                </div>

                <div className='w-[109px] h-[196] gap-[24px]'>
                <p className=' w-[101px] h-[28px] text-[20px] font-medium leading-7 text-[#FAFAFA]'>Quick Link</p>
                <p className=' w-[109px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Privacy Policy</p>
                <p className=' w-[123px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Terms of Use </p>
                <p className=' w-[35px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>FAQ</p>
                <p className=' w-[35px] h-[24px] font-normal text-[16px] leading-6 text-[#FAFAFA]'>Contact</p>
                </div>

                <div className='w-[198px] h-[210px] gap-[24px]'>
                <p className=' w-[148px] h-[28px] text-[20px] font-medium leading-7 text-[#FAFAFA]'>Download App</p>
                <p className=' w-[194px] h-[18px] font-normal text-[12px] opacity-[70%] leading-6 text-[#FAFAFA]'>Save $3 with App New User Only</p>
                <Image src="/Qrcode.png" alt="image" height={84} width={140} className='gap-[8px] mt-3 ml-2' />
                <Image src="/Fbicons.png" alt="image" height={24} width={168} className='gap-[24px] mt-2 ' />
                </div>

                

            </div>
            <div className='w-[1440px] border-[1px] opacity-[40%] bg-[#FAFAFA]'></div>
            <div className='w-[1440px] h-[40px]  top-[376px] gap-[16px] opacity[40%]'>
                <div className='w-[337px] h-[24px] gap-[12px] flex  ml-[550px] mt-5 opacity-[60%]'>
                <Image src="/Copyright.png" alt="" width={16.67} height={16.67} className='border-[1.5px] left-[1.67]'/>
                <p className='w-[311px] h-[24px] text-[16px]  font-normal leading-6 text-[#FAFAFA]'>Copyright Rimel 2022. All right reserved</p>
                </div>

                </div>

        </div>






























    </div>
  )
}
export default Footer
