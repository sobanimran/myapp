import { NextResponse } from "next/server";

export default function middleware(request:any) {
    //if(request.nextUrl.pathname=='/about') {
     return NextResponse.redirect(new URL('/login',request.url)) 
    //}
    
    

}
export const config = {
    matcher:['/about/aboutCollage','/studentList']
}
