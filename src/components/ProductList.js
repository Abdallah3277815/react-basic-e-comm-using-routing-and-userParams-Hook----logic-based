import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function ProductList() {
  const apiUrl="https://fakestoreapi.com/products";
  const [products , setProducts]=useState([])

  // const fetchData = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const data = await response.json();
  //   setProducts(data);
  //   console.log(data);
  // };

  useEffect(()=>{
    // fetchData()
    fetch(apiUrl).then((res)=>res.json()).then((data)=> setProducts(data))
  
  },[])
  
  return (
    <>
    <div className='container'>
      <div className='row g-3'>
        {
          products.map((p)=>{return(<ProductCard img={p.image} title={p.title} desc={p.description} price={p.price} key={p.id} displayBtn={true} id={p.id}/>)})
        }
      </div>
    </div>
    
    </>
  )
}
