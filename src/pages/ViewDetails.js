import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'

export default function ViewDetails() {
    const [products , setProducts]=useState([])
    let {productId}=useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`).then((res)=>res.json()).then((data)=> setProducts(data))
      
      },[])
    
  return (
    <>
   <h1> params : {productId}</h1>
   <ProductCard img={products.image} title={products.title} desc={products.description} price={products.price} key={products.id} displayBtn={false}/>
    </>
    // <ProductCard />
  )
}
