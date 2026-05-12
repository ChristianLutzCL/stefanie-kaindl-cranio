import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY environment variable" },
        { status: 500 },
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    });

    const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const amount = Number(process.env.RETREAT_PRICE_CENTS ?? 89000);
    const currency = (process.env.RETREAT_CURRENCY ?? "eur").toLowerCase();
    const retreatName = process.env.RETREAT_NAME ?? "Retreat Gardasee (8.10.-11.10.2026)";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: amount,
            product_data: {
              name: retreatName,
              description: "Casa San Tome, Gardasee",
            },
          },
        },
      ],
      success_url: `${origin}/retreat?booking=success`,
      cancel_url: `${origin}/retreat?booking=cancel`,
      metadata: {
        product: "retreat-gardasee-2026",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Failed to create retreat checkout session", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
