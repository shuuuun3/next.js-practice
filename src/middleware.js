import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export async function middleware(request) {
  const token = await request.headers.get("Authorization")?.split(" ")[1]

  if(!token){
    return NextResponse.json({message: "トークンがないよ"})
  }

  try{
    const secretKey = new TextEncoder().encode("next-market-route-handlers")
    const decodedJwt = await jwtVerify(token, secretKey)
    return NextResponse.next
  }catch{
    return NextResponse.json({message:"トークン正しくないから、ログインして"})
  }
}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"]
}