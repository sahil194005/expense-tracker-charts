import React, { useEffect, useContext, useState } from 'react'
import TotalExpenseCard from '../components/TotalExpenseCard'
import { GlobalContext } from '../Context/gobalContext'
import Food from '../assets/food.jpg'
import entertainment from '../assets/entertainment.jpg'
import bills from '../assets/bills.jpg'
import MyResponsivePie from '../components/Charts/PieChart'
import MyResponsiveLine from '../components/Charts/LineGraph'
import axios from 'axios'

const Dashboard = () => {
  const [lineGraphData, setLineGraphData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.get('http://localhost:3006/expenses/lineGraphData', { headers: { "Authorization": token } })
        setLineGraphData(response.data.data);

      } catch (error) {
        console.log(error);

      }
    })()

  }, [])

  const { expenses } = useContext(GlobalContext)
  let FoodExpense = 0;
  let EntertainmentExpense = 0;
  let BillsExpense = 0;
  let CreditSum = 0;
  let DebitSum = 0;
  expenses.forEach((expense) => {
    if (expense.expenseType == "Credit") {
      if (expense.category === "Entertainment") {
        EntertainmentExpense += expense.amount;
      }
      else if (expense.category === "Bills & Payments") {
        BillsExpense += expense.amount;
      }
      else {
        FoodExpense += expense.amount;
      }
      CreditSum += expense.amount;
    }
    else {
      DebitSum += expense.amount;
    }
  })
  const data = [
    {
      id: "Entertainment",
      label: "Entertainment",
      value: EntertainmentExpense,
    },
    {
      id: "Food & Drinks",
      label: "Food & Drinks",
      value: FoodExpense,
    },
    {
      id: "Bills & Payments",
      label: "Bills & Payments",
      value: BillsExpense,
    },
  ]

  const PieChart2 = [
    {
      id: "Debit",
      label: "Debit",
      value: DebitSum,
    },
    {
      id: "Credit",
      label: "Credit",
      value: CreditSum,
    }
  ]


  return (
    <div className='min-h-full max-h-full w-full flex flex-col justify-between  gap-4 '>

      <div className=' flex m gap-4  flex-wrap  w-full justify-center md:justify-evenly '>
        <div className=' sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] bg-white  rounded-md'  >
          <MyResponsivePie data={data} />
        </div>
        <TotalExpenseCard category={"Entertainment"}
          totalAmount={EntertainmentExpense} bImg={entertainment}
        />
        <TotalExpenseCard category={"Bills & Payments"}
          totalAmount={BillsExpense} bImg={bills}
        />
        <TotalExpenseCard category={"Food & Drinks"}
          totalAmount={FoodExpense} bImg={Food}
        />
        <div className='h-[200px] w-[250px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] bg-white  rounded-md'  >
          <MyResponsivePie data={PieChart2} />
        </div>
      </div>

      {lineGraphData && <div className='  w-full'>
        <div className='h-[400px] w-full bg-white'>
          <MyResponsiveLine data={lineGraphData} />
        </div>
      </div>}

    </div>
  )
}

export default Dashboard

