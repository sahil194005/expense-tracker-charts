import React from 'react'

const TotalExpenseCard = ({ category, totalAmount,bImg }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bImg})`,
    }
    return (
        <div className='bg-white   relative  lg:min-w-[400px] min-w-[280px]  max-h-[270px]'>
        
        <div style={backgroundImageStyle} className='  h-full w-full   px-6  backgroundCard '></div>
            <div className='  absolute duration-300 flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-4 p-4 lg:p-10 lg:text-2xl  rounded-tl-[20px] rounded-br-[20px] border-white font-bold shadow-lg  '>
                <span className='flex items-center gap-2 text-white text-md'>
                    {category}
                </span>
            <span className='text-white text-xl font-bold text-center'>&#8377; {Math.abs(totalAmount)}</span>
            </div>
        </div>
        
    )
}

export default TotalExpenseCard