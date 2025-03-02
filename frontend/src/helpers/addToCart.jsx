import { toast } from "react-toastify"
import SummaryApi from "../common"

const addToCart =async(e,id)=>{
    e?.stopPropagation()
    e?.preventDefault()


    const response = await fetch(SummaryApi.addToCartProduct.url,{
        method:SummaryApi.addToCartProduct.method,
        headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify(
            {productId:id}
        )
    })

    const responseData = await response.json()

    if(responseData.success){
        toast.success(responseData.message)
    }

    if(responseData.error){
        toast.success(responseData.message)
    }
}

export default addToCart