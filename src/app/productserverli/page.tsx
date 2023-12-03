import Button from "./Button"
async function getData() {
let data :any = await fetch("https://dummyjson.com/products")
data = await data.json()
return(data.products)
}

export default async function page() {
    let products:any = await getData()
  return (
    <div>
        <h2>product fetch server</h2>
        {products.map((item:any)=>(
            <>
            <h5 key={Math.random()}>{item.title}</h5>
        <Button price={item.price} />
            </>
        ))}
    </div>
  )
}
