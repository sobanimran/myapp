import { title } from 'process'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>change meta fata for each page </h1>
    </div>
  )
}
export function generateMetadata (){
    let data ={
        title: "meta",
        description :"content of the page"
        }
    
    return data ;
}