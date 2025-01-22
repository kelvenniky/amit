import React, { useEffect } from 'react'
import UploadProduct from '../components/UploadProduct'
import { useState } from 'react'
import SummaryApi from '../common'
import AdminProductCart from '../components/AdminProductCart'


const AllProducts = () => {
  
  const [allProduct, setAllProduct] =useState([])

  const  [openUploadProduct, setOpenUploadProduct] = useState(false)

  const fetchAllProduct =async()=>{
    const response = await fetch(SummaryApi.allProduct.url)
      const dataResponse = await response.json()
      setAllProduct(dataResponse?.data || [])
    
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])


  return (
    <div>
      <div className='bg-white  py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Products</h2>
        <button onClick={()=>setOpenUploadProduct(true)} className='border-2 border-red-600 text-red-600 rounded-full py-1  px-3 hover:bg-red-600 hover:text-white transition-all'>Upload Product</button>

      </div>

      {/* all products */}
      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px] overflow-y-scroll">
        {
          allProduct.map((product, index)=>{
            return(
              <AdminProductCart data={product} key={index+'allproduct'} fetchData={fetchAllProduct}/>
            
            )
          })
        }
      </div>



      {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
        )
      }
      
    </div>
  )
}

export default AllProducts