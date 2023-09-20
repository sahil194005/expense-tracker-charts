import React, { useEffect, useContext, useState } from 'react'
import TotalExpenseCard from '../components/TotalExpenseCard'
import { GlobalContext } from '../Context/gobalContext'
import Food from '../assets/food.jpg'
import entertainment from '../assets/entertainment.jpg'
import bills from '../assets/bills.jpg'
import MyResponsivePie from '../components/Charts/PieChart'
import MyResponsiveLine from '../components/Charts/LineGraph'
import axios from 'axios'
import { Skeleton } from "../components/ui/skeleton"

const Dashboard = () => {

  const { setTotalExpense, totalExpense, expenses, setExpenses } = useContext(GlobalContext)
  const [lineGraphData, setLineGraphData] = useState([]);

  useEffect(() => {
    const getFromDB = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.get('https://expensetracker-js97.onrender.com/expenses/getExpenses', { headers: { "Authorization": token } })
        const response2 = await axios.get('https://expensetracker-js97.onrender.com/expenses/lineGraphData', { headers: { "Authorization": token } })
        setLineGraphData(response2.data.data);
        setExpenses(response.data.data);
        let sum = 0;
        response.data.data.forEach((item) => sum = sum + item.amount);
        setTotalExpense(sum);
      } catch (error) {
        console.log(error);
      }
    }
    getFromDB()
  }, []);


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


  
  return (expenses.length < 0 ?
    <div
      className=" text-blue-300 mt-48 mx-auto  h-[200px] w-[200px] border-[20px]  animate-spin rounded-full  border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
      >
    </div> : <div className='min-h-full max-h-full w-full flex flex-col justify-between  gap-4 '>

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
    </div>)

       
}

export default Dashboard

