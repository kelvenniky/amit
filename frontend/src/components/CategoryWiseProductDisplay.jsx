import React, {useEffect, useRef, useState} from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayINRCurrency from "../helpers/displayCurrency";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import addToCart from '../helpers/addToCart';
import { Link } from 'react-router-dom';


const CategoryWiseProductDisplay = ({category, heading}) => {

    const[ data, setData] = useState([])
    const[loading, setLoading]= useState(false)
    const loadingList = new Array(13).fill(null)
   


    const fetchData =async()=>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)
        console.log("hdata ", data)


        setData(categoryProduct?.data)
    }

    useEffect(()=>{
      fetchData()

    },[])


  return (
    <div className=' container mx-auto px-4 my-6 relative'>
        <h2 className=' font-bold text-2xl py-4'>{heading}</h2>

        <div className='grid grid-cols-[repeat(auto-fit, minmax(300px,320px))] md:gap-6 overflow-x-scroll scrollbar-none transition-all' >

        {
            loading ?(
                loadingList.map((product, index)=>{
                    return(
                        <div className='w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow '>
                        <div className='bg-slate-200 h-48 p-4 min-w-[200px] md:min-w-[145px] flex justify-center items-center animation-pulse'>
                        </div>
                        <div className='p-4 grid gap-3'>
                          <h2 className='font-medium text-base text-ellipsis line-clamp-1 md:text-lg text-black p-1 py-2 animation-pulse rounded-full bg-slate-200'></h2>
                          <p className='capitalize text-slate-500 animation-pulse rounded-full bg-slate-200 py-2'></p>
                          <div className='flex  gap-3'>
                            <p className='text-red-600 font-medium animation-pulse rounded-full bg-slate-200 w-full py-2'></p>
                            <p className='text-slate-500 line-through animation-pulse rounded-full bg-slate-200 w-full py-2'></p>
    
                          </div>
                          <button className='text-sm bg-slate-200  text-white px-3 py-2 rounded-full animate-pulse'></button>
                        </div>
                     </div>
                    )
                })
            ):(
                data.map((product, index)=>{
                    return(
                        <Link  to={"product/"+product?._id} className='w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow '>
                        <div className='bg-slate-200 h-48 p-4 min-w-[200px] md:min-w-[145px] flex justify-center items-center '>
                             <img src={product.productImage[0]} className='object-scale-down h-full hover-scale-110 transition-all mix-blend-multiply ' />
                        </div>
                        <div className='p-4 grid gap-3'>
                          <h2 className='font-medium text-base text-ellipsis line-clamp-1 md:text-lg text-black'>{product?.productName}</h2>
                          <p className='capitalize text-slate-500'>{product?.category}</p>
                          <div className='flex  gap-3'>
                            <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice) }</p>
                            <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
    
                          </div>
                          <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full ' onClick={(e)=>addToCart(e,product?._id)}>Add to Cart</button>
                        </div>
                        </Link>
                    )
                })
            )
          
        }
       
        </div>
    </div>
  )
}

export default CategoryWiseProductDisplay