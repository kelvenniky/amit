import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import { MdModeEditOutline } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';
import { use } from 'react';



const AllUsers = () => {
  const[allUser, setAllUsers]= useState([])
  const [openUpdateRole, setOpenUpdateRole]= useState(false)
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email:"",
    name:"",
    role:"",
    _id:"",
  })


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
        <tr className='bg-black text-white'>
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
              <tr >
                <td>{index+1}</td>
                <td>{el?.name}</td>
                <td>{el?.email}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.createdAt).format('ll')}</td>
                <td>
                  <button  
                  className='hover:bg-green-500 hover:text-white p-1 rounded-full cursor-pointer' 
                  onClick={()=>{
                    setUpdateUserDetails(el)
                    setOpenUpdateRole(true)
                    
                  }}
                  >
                  <MdModeEditOutline />
                  </button>
                

                </td>

              </tr>
            )
          })
        }
      </tbody>
    </table>

    {
      openUpdateRole &&(
        <ChangeUserRole
        onClose={()=>setOpenUpdateRole(false)}
        name={updateUserDetails.name}
        email={updateUserDetails.email}
        role={updateUserDetails.role}
        userId={updateUserDetails._id}
        callFunc={fetchAllUsers}
        />

      )
    }
    
  </div>
    )
}

export default AllUsers