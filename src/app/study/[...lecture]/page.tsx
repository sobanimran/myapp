"use client"
interface Par {
  lecture : []
}
export default function page({params}:any) {
    {console.log(params)}
    return (
        
      <div>catch all segments
        <h2>{params.lecture}</h2>
      </div>
    )
  }
  