import React, { useEffect, useContext } from 'react'
import TotalExpenseCard from '../components/TotalExpenseCard'
import { GlobalContext } from '../Context/gobalContext'

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
    <div className=' flex max-h-[400px] gap-4 justify-evenly flex-wrap min-h-[300px] w-full '>
      <TotalExpenseCard category={"Entertainment"}
        totalAmount={EntertainmentExpense}
      />
      <TotalExpenseCard category={"Bills & Payments"}
        totalAmount={BillsExpense}
      />
      <TotalExpenseCard category={"Food & Drinks"}
        totalAmount={FoodExpense}
      />

    </div>
  )
}

export default Dashboard

