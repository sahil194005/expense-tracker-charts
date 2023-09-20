



import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const Setting = () => {
  const panRef = useRef()
  const dobRef = useRef()
  const phoneNumberRef = useRef();
  const [obj, setObj] = useState({
    numb: null,
    DOB: null,
    Pan: null
  })
  useEffect(() => {
    const getUserDetais = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.get('http://localhost:3006/profile/getProfile', { headers: { "Authorization": token } })
        const result = response.data.data;
        setObj({
          numb: result.phoneNumber,
          DOB: result.dob,
          Pan: result.panNo,
        })

      } catch (error) {
        console.log(error);
      }
    }
    getUserDetais();
  }, [])
  console.log(obj);
  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const userObj = {
        dob: dobRef.current.value,
        panNo: panRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      }
      console.log(userObj);
      const token = JSON.parse(localStorage.getItem('token'))
      const response = await axios.post('http://localhost:3006/profile/update', userObj, { headers: { "Authorization": token } });
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex gap-5 '>
      <div className='    mx-auto  p-6  bg-white rounded-lg shadow-lg border'>
        <h1 className="text-3xl sm:text-5xl font-medium text-center text-gray-600 mt-8 mb-6">User Form</h1>
        <form onSubmit={formSubmitHandler} className=' min-h-[600px] flex flex-col  justify-evenly '>
          <div className="mb-4 w-full">
            <label className="block mb-2 text-bse text-gray-700">DOB</label>
            <input ref={dobRef} type="date" className="w-full px-4 py-2 border  rounded-lg ring-1 focus:outline-none focus:ring-2  text-center focus:ring-gray-600" required />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2 text-sm text-gray-700">Pan Number</label>
            <input ref={panRef
            } type="number" className="w-full px-4 py-2 border ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-center" required />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2 text-sm text-gray-700">Phone Number</label>
            <input ref={phoneNumberRef} type="number" className="w-full px-4 py-2 border ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-center" required />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-cyan-800 text-white py-2 rounded-lg mx-auto block focus:outline-none active:ring-2  active:ring-offset-2 active:ring-cyan-500 mb-2">Update Profile</button>
        </form>
      </div>

      {obj.name !== null &&
        <div className='border-2 w-[200px] '>
          <div>
            <span>Number: </span>
            <span>{obj.numb}</span>
          </div>
          <div>
            <span> Pan Number: </span>
            <span>{obj.Pan}</span>
          </div>
          <div>
            <span> DOB: </span>
            <span>{obj.DOB}</span>

          </div>

        </div>}

    </div>

  )
}

export default Setting