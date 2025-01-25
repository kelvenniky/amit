import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"camera"} heading={"Top Cameras"}/>
      <HorizontalCardProduct category={"airpods"} heading={"Popular Airpods"}/>
      <VerticalCardProduct category={"airpods"} heading={"Airpods"}/>
      <VerticalCardProduct category={"airpods"} heading={"Airpods"}/>
      <VerticalCardProduct category={"airpods"} heading={"Airpods"}/>





    </div>
  )
}

export default Home