"use client";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [product , setProduct] = useState([])
  useEffect(() => {
   async function getData() {
      let data:any = await fetch("https://dummyjson.com/products");
    //  console.log(data);
      data = await data.json();
    console.log(data);
    setProduct(data.products)
    }
    getData();
  }, []);


  // run but bed practice 
  // useEffect(async () : any => {
//   let data = await fetch("https://dummyjson.com/products");
//   console.log(data);
//   data = await data.json();
// console.log(data);

// }, []);
  return (
    <div>
      <h1>product List</h1>\
      {
        product.map((item:any) =>(
         <h4 key={Math.random()}>name : {item.title}  , Price : {item.price}</h4>

        ))
      }
    </div>
  );
};
export default Page;
