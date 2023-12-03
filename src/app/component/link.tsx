'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


const Nav = () => {
    const router = useRouter()
    const nevegate = (rouName:string) =>{
        router.push(rouName)
      }
    return(
    <div>

    <Link href={'/'} >home</Link><br />
    <Link href={'/about'} >About</Link><br />
    <Link href={'/contact'} >Contact</Link><br />
    <button onClick={() => nevegate('/about/aboutCollage')}>aboutCollage</button> <br />
    <button onClick={() => nevegate('/about/aboutStudent')}>aboutStudent</button> <br />
    </div>)
}
export default Nav;
