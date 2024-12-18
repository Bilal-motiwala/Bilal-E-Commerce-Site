export default function Freedelvry() {
    return (
      <div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center">
        <div className="sm:w-[100%] lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col md:flex-col lg:flex-row lg:justify-evenly gap-x-4">
  
          {/* box 1 */}
          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center'>
              {/* <span><FontAwesomeIcon icon={faTruckFast} className='text-2xl'/></span> */}
            </div>
  
            <div>
              <img src="/Fastdelivery.png" alt="Free And Fast Delivery" className="ml-16 sm:ml-0" />
              <h1 className='font-bold text-center mt-2'>FREE AND FAST DELIVERY</h1>
              <p className='text-sm text-center'>Free delivery for all orders over $140</p>
            </div>
          </div>
  
          {/* box 2 */}
          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center'>
              {/* <span><FontAwesomeIcon icon={faHeadphonesAlt} className='text-2xl'/></span> */}
            </div>
  
            <div>
              <img src="/Service.png" alt="24/7 Customer Service" className="ml-14 sm:ml-0" />
              <h1 className='font-bold text-center mt-2'>24/7 CUSTOMER SERVICE</h1>
              <p className='text-sm text-center'>Friendly 24/7 customer support</p>
            </div>
          </div>
  
          {/* box 3 */}
          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center'>
              {/* <span><FontAwesomeIcon icon={faCheckSquare} className='text-2xl'/></span> */}
            </div>
  
            <div>
              <img src="/Moneyback.png" alt="Money Back Guarantee" className="ml-14 sm:ml-0" />
              <h1 className='font-bold text-center mt-2'>MONEY BACK GUARANTEE</h1>
              <p className='text-sm text-center'>We return money within 30 days</p>
            </div>
          </div>
  
          {/* boxes complete */}
        </div>
      </div>
    );
  }
  