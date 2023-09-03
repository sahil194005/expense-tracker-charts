import React from 'react'


const TotalExpenseCard = ({category,totalAmount}) => {

    return (
        <div className='border  bg-white rounded-md flex flex-col justify-center px-6 min-w-[280px] max-h-[170px] '>
            <span className='flex items-center gap-2 text-gray-400 text-md'>
                <div className=' h-[10px] w-[10px] rounded-full bg-red-600'></div>
                {category}
            </span>
            <span className='text-gray-700 text-xl font-bold'>&#8377; {Math.abs(totalAmount)}</span>
            
        </div>
    )
}

export default TotalExpenseCard