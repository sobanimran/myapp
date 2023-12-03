'use client'
import { usePathname } from "next/navigation";
const layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const pathName = usePathname()
    console.log(pathName)
return(
    <div>

        commaan layout for about screen
      {pathName != "/about/aboutCollage"?
      <h2>conditonal statement</h2>
      :
      null  
    }
        
    {children}
    </div>
)
}
export default layout;