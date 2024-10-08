// import { stripe } from '@/lib/stripe';
import { PaypalCustomerType } from "@/lib/types";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export async function POST(req: Request) {
  const { address, email, name, shipping }: PaypalCustomerType = await req
    .json();

  if (!email || !address || !name || !shipping) {
    return new NextResponse("Missing data", {
      status: 400,
    });
  }
  try {
    const customer = {
      id: v4(),
    };
    // const customer = await stripe.customers.create({
    //   email,
    //   name,
    //   address,
    //   shipping,
    // });
    return Response.json({ customerId: customer.id });
  } catch (error) {
    console.log("🔴 Error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
