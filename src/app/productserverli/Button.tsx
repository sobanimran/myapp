"use client"

export default function Button(props:any) {
  return (
    <div>
      <button onClick={()=>alert(props.price)}>price</button>
    </div>
  )
}
