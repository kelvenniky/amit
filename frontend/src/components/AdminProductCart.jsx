import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';


const AdminProductCart = ({
    data,
    fetchData
}) => {

  const [editProduct, setEditProduct]= useState(false)
  return (
    <div className='bg-white p-4 rounded '>
   <div className='w-40'>
   <img src={data?.productImage[0]} width={120} height={120} className='w-fit mx-auto'/>
    <h1>{data.productName}</h1>

    <div>
      <p className='font-semibold'>
        {
          displayINRCurrency(data.sellingPrice)
        }
      </p>
    <div className='w-fit ml-auto p-2 hover:bg-green-600 cursor-pointer bg-green-100 rounded-full hover:text-white' onClick={()=>setEditProduct(true)}>
    <MdModeEditOutline />
    </div>

    </div>

    
   </div>
    {
      editProduct && (
        <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchData={fetchData}/>

      )
    }

  </div>
  )
}

export default AdminProductCart