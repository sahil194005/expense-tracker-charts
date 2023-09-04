import React, { useEffect, useContext } from 'react'
import TotalExpenseCard from '../components/TotalExpenseCard'
import { GlobalContext } from '../Context/gobalContext'
import Food from '../assets/food.jpg'
import entertainment from '../assets/entertainment.jpg'
import bills from '../assets/bills.jpg'
import MyResponsivePie from '../components/Charts/PieChart'
const Dashboard = () => {
  const { expenses } = useContext(GlobalContext)
  let FoodExpense = 0;
  let EntertainmentExpense = 0;
  let BillsExpense = 0;
  expenses.forEach((expense) => {
    if (expense.category === "Entertainment") {
      EntertainmentExpense += expense.amount;
    }
    else if (expense.category === "Bills & Payments") {
      BillsExpense += expense.amount;
    }
    else {
      FoodExpense += expense.amount;
    }
  })

  return (
    <div className='w-full h-full '>

      <div className=' flex max-h-[400px] gap-4 justify-evenly flex-wrap min-h-[300px] w-full '>
        <TotalExpenseCard category={"Entertainment"}
          totalAmount={EntertainmentExpense} bImg={entertainment}
        />
        <TotalExpenseCard category={"Bills & Payments"}
          totalAmount={BillsExpense} bImg={bills}
        />
        <TotalExpenseCard category={"Food & Drinks"}
          totalAmount={FoodExpense} bImg={Food}
        />

      </div>
      <div className='h-[500px] w-[500px]'>
        <MyResponsivePie />
      </div>
    </div>
  )
}

export default Dashboard

