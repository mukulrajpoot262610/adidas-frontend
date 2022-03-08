import { NextResponse } from "next/server";

export async function middleware(req) {
    const { accessCookie } = req.cookies

    const url = req.url

    if (url.includes('/payment') || url.includes('/ordercomplete') || url.includes('/my-account') || url.includes('/my-account/address-book') || url.includes('/my-account/order-history') || url.includes('/my-account/profile') || url.includes('/delivery')) {
        const redirect = url.split(process.env.NEXT_PUBLIC_URL)
        if (!accessCookie) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}account-login?redirect=${redirect[1]}`)
        }
    }

    if (accessCookie) {
        if (url.includes('/account-login')) {
            return NextResponse.redirect(process.env.NEXT_PUBLIC_URL)
        }
    }

    return NextResponse.next()
}