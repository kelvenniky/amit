import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import SummaryApi from '../common'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import displayINRCurrency from "../helpers/displayCurrency"



const ProductDetails = () => {
  const [data, setData] =useState({
    productName:"",
    brandName:"",
    category:"",
    productImage:[],
    description:"",
    price:"",
    sellingPrice:"",
  }) 
  const [activeImage, setActiveImage]=useState("")
  const params = useParams()
  const [loading,setLoading] =useState(true)
  const productImageListLoading = new Array(4).fill(null)
  console.log("params",params)

  const fetchProductDetails = async()=>{
    setLoading(true)
    const response = await fetch(SummaryApi.productDetails.url,{
      method:SummaryApi.productDetails.method,
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        productId: params?.id
      })
    })
    setLoading(false)
    const dataResponse = await response.json()

    setData(dataResponse?.data)
    setActiveImage(dataResponse?.productImage[0])
  }

  console.log("data",data)


  useEffect(()=>{
    fetchProductDetails( )
  },[])

  const handleMouseEnterProduct =(imageURL)=>{
    setActiveImage(imageURL)
  }


  return (
    <div className="container mx-auto p-4">
      <div className=" min-h-[200px] flex flex-col lg:flex-row gap-4">
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relaive '>
          <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply'/>
          
          <div className="absolute min-w-[400px] bg-slate-200 p-1">

          </div>
          </div>
          <div className='h-full'>
            {
              loading ?(
               <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {
                   productImageListLoading.map(el =>{
                    return(
                      <div className='h-20 w-20 bg-slate-200 rounded animate-pulse ' key={loading}></div>
  
                    )
                
              
                })
              }
               </div>
              ):(
                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {
                  data?.productImage?.map((imageURL, index)=>{
                    return(
                      <div className='h-20 w-20 bg-slate-200 rounded' key={imageURL}>
                        <img src={imageURL} className='h-full w-full object-scale-down mix-blend-multiply cursor-pointer' alt="" onMouseEnter={()=>handleMouseEnterProduct(imageURL)}  onClick={()=>handleMouseEnterProduct(imageURL)}/>
                      </div>
  
                    )
                
              
                })
              }
               </div>

              )
            }
          </div>
        </div>
       {
        loading ? (
          <div className="grid gap-1 w-full">
          <p className="bg-slate-200 animate-pulse   h-6 lg:h-8 w-full  rounded-full inline-block w-full "></p>
          <h2 className='text-2xl lg:text-4xl font-medium bg-slate-200 h-6 animate-pulse w-full'></h2>
          <p className="capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 w-full lg:h-8"></p>

          <div className="text-red-600 bg-slate-200 h-6 animate-pulse flex items-center gap-1 w-full">
         
          </div>

          <div className="flex items-center gap-2 text-2xl font-medium my-1 lg:text-3xl  h-6 animate-pulse w-full ">
            <p className='text-red-600 bg-slate-200 w-full'></p>
            <p className='text-slate-400 line-through bg-slate-200 w-full'></p>

          </div>


          <div className="flex items-center gap-3 my-2 w-full">
            <button className="h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full"></button>
            <button className="h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full"></button>

          </div>
          <div>
            <p className="text-slate-600 font-medium my-1 h-6 bg-slate-200 rounded animate-pulse w-full "></p>
            <p className="h-10  bg-slate-200 rounded animate-pulse w-full lg:h-8"></p>
          </div>
        </div>
        ):(
          <div className="flex flex-col gap-1">
          <p className="bg-red-200 text-red-600 px-2  rounded-full inline-block w-fit">{data?.brandName}</p>
          <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
          <p className="capitalize text-slate-400">{data?.category}</p>

          <div className="text-red-600 flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          </div>

          <div className="flex items-center gap-2 text-2xl font-medium my-1 lg:text-3xl ">
            <p className='text-red-600'>{displayINRCurrency(data.sellingPrice)}</p>
            <p className='text-slate-400 line-through'>{displayINRCurrency(data.price)}</p>

          </div>


          <div className="flex items-center gap-3 my-2">
            <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white">Buy</button>
            <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium bg-red-600 text-white hover:text-red-600 hover:bg-white">Add to Cart</button>

          </div>
          <div>
            <p className="text-slate-600 font-medium my-1">Description : </p>
            <p>{data?.description}</p>
          </div>
        </div>
        )
       }
      </div>
    </div>
  )
}

export default ProductDetails