"use client"

import { useEffect, useState } from "react"

export default function Page() {
    const [uesty , setUesty] =useState({color:"green"})
    let sty = {
        color : "blue",
        backgroundColor : "orange"
    }
  return (
    <div>
        <h2 style={sty}>h2 tag style</h2>
        <h3 style={{color:"green",backgroundColor:"yellow"}}>h3 tag style</h3>
        <h4 style={uesty}>h4 tag style</h4>
        <button onClick={()=>setUesty({color:"gray"})}>update h4</button>
    </div>
  )
}
