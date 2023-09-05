import React from 'react'

// const TotalExpenseCard = ({ category, totalAmount, bImg }) => {

//     return (
//         <div className='   flex flex-col items-center justify-center  rounded-br-[20px] border-white font-bold shadow-lg  '>
//             <span className='flex items-center gap-2 text-white text-md'>
//                 {category}
//             </span>
//             <span className='text-white text-xl font-bold text-center'>&#8377; {Math.abs(totalAmount)}</span>
//         </div>

//     )
// }

const TotalExpenseCard = ({ category, totalAmount }) => {

    return (
        <div className='border  bg-white rounded-md flex flex-col justify-center px-6 
        max-h-[170px] min-h-[120px] min-w-[240px] sm:min-h-[160px]  sm:min-w-[250px]   md:min-w-[200px] lg:min-h-[150px]
         '>
            <span className='flex items-center gap-2 text-gray-400 text-md'>
                <div className=' h-[10px] w-[10px] rounded-full bg-red-600'></div>
                {category}
            </span>
            <span className='text-gray-700 text-xl font-bold'>&#8377; {Math.abs(totalAmount)}</span>

        </div>
    )
}

export default TotalExpenseCard