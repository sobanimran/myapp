"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import Page from './page.module.css'
import './globals.css'
import Image from 'next/image'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight:'100',
  subsets : ['latin'],
  display:'swap'
})

export default function Home() {
 
  //const [name,setName] = useState('ali')
  let name = 'ali'
  const apple = (namr:string)=>{
    name = namr
    console.log(name)
    //setName(namr)
    
  }
  const {red} = styles
  const [col,setCol] = useState("red")

  // component in component
  const User = (props:any) =>  {
      return(
        <div>
         <h1 className={roboto.className}>font with next js font</h1>
          <h1 className={Page.hed}>i am {props.name + ' ' + props.fname}</h1>
          <p style={{backgroundColor:col==="red"?"brown":'yellow'}}>conditional statement</p>
          <h2 style={{fontFamily:"roboto" }} className={red}>heding 2</h2>
          <h2 style={{}} className={red}>heding 2</h2>
          <h2 style={{fontFamily:"roboto" , fontWeight:100}} className={red}>heding 2</h2>
          <h2 style={{fontFamily:"roboto" , fontWeight:100}} className={red}>heding 2</h2>
        <button onClick={()=>setCol("change")}>update state</button>
        </div>
      )
    }




  return (
    <main className={styles.main}>
      <Link href="/productlist">go to product page</Link><br />
      <Link href="/productserverli">go to product page server</Link>
    
      <User name="soban" fname="shahid" />
     <h1>home page {name}</h1>
     <button onClick={() => apple('boy')}> click me </button>
     <Image src="https://wallpapercave.com/wp/wp2665214.jpg" width={200} height={200} alt='senree' style={{marginRight:"10px"}}/> 
   
    </main>

  )
  }
 
//export {User}; 
