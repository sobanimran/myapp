"use client"
const Studen = ({params}:any) => {
    console.log(params)
    return(
        <div>
            <h2>studen detalis </h2>
            <h3>
                 student name : {params.studen} 
            </h3>
        </div>
    )
}
export default Studen;