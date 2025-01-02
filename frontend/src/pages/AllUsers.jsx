import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import { MdModeEditOutline } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';



const AllUsers = () => {
  const[allUser, setAllUsers]= useState([])


    const fetchAllUsers =async()=>{
      const fetchData = await fetch(SummaryApi.allUser.url,{
        method:SummaryApi.allUser.method,
        credentials:'include'
      })

      const dataResponse = await fetchData.json()
      if(dataResponse.success){
        setAllUsers(dataResponse.data)
      }

      if(dataResponse.error){
        toast.error(dataResponse.message)
      }


    }

  useEffect(()=>{
    fetchAllUsers()
  },[])



  return (
  <div className='pb-4 bg-white'>
    <table className='w-full userTable'>
      <thead>
        <tr>
        <th>Sr.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Created Date</th>
        <th>Action</th>
        </tr>

      </thead>
      <tbody >
        {
          allUser.map((el, index)=>{
            return(
              <tr>
                <td>{index+1}</td>
                <td>{el?.name}</td>
                <td>{el?.email}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.createdAt).format('ll')}</td>
                <td>
                  <button  className='hover:bg-green-500 hover:text-white p-1 rounded-full cursor-pointer'>
                  <MdModeEditOutline />
                  </button>
                

                </td>

              </tr>
            )
          })
        }
      </tbody>
    </table>
    <ChangeUserRole/>
  </div>
    )
}

export default AllUsers