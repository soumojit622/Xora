"use client";
import React, { useEffect, useState } from "react";
import { Check, Lock, Gem, Rocket, Sparkles, Star } from "lucide-react";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export default function PricingPlans() {
  const user = useUser();
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    if (user?.user) {
      GetUserDetail();
    }
  }, [user]);

  const GetUserDetail = async () => {
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user.user.primaryEmailAddress?.emailAddress));
    setUserDetail(result[0]);
  };

  const OnCheckoutClick = async () => {
    try {
      const result = await axios.post("/api/payment/checkout", {
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
      });
      if (result.data.session?.url) {
        window.location.assign(result.data.session.url);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  const OnPaymentManage = async () => {
    const result = await axios.post("/api/payment/manage-payment", {
      customerId: userDetail?.customerId,
    });
    window.location.assign(result.data.portalSession.url);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-3">
          <Gem className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Our Pricing Plans
        </h1>
        <p className="text-gray-600 text-sm">
          You're currently enjoying the free plan. Premium options are on the
          way!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Plan */}
        <div className="border rounded-xl p-8 flex flex-col items-center text-center shadow-md bg-white hover:shadow-lg transition-all">
          <div className="flex justify-center mb-3">
            <Star className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-lg font-semibold text-blue-600 mb-1">Free Plan</p>
          <div className="flex items-baseline justify-center mb-6">
            <span className="text-4xl font-bold text-blue-700">₹0</span>
            <span className="text-sm text-gray-500 ml-1">/month</span>
          </div>

          <div className="space-y-4 flex-grow w-full max-w-xs">
            {[
              "5 PDF Uploads",
              "Unlimited Note-Taking",
              "Email Support",
              "Help Center Access",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 w-full max-w-xs">
            <span className="inline-block w-full py-2 px-4 border border-blue-600 text-blue-600 font-medium rounded-md bg-blue-50 cursor-default">
              Current Plan
            </span>
          </div>
        </div>

        {/* Premium Plan - Coming Soon */}
        <div className="border rounded-xl p-8 flex flex-col items-center text-center shadow-md bg-gray-50 opacity-70 relative cursor-not-allowed">
          <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            Coming Soon
          </div>
          <div className="flex justify-center mb-3">
            <Rocket className="w-6 h-6 text-gray-500" />
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-1">
            Premium Plan
          </p>
          <div className="flex items-baseline justify-center mb-6">
            <span className="text-4xl font-bold text-gray-800">₹799</span>
            <span className="text-sm text-gray-500 ml-1">/month</span>
          </div>

          <div className="space-y-4 flex-grow w-full max-w-xs">
            {[
              "Unlimited PDF Uploads",
              "Unlimited Notes Taking",
              "Priority Email Support",
              "Help Center Access",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 w-full max-w-xs">
            <button
              disabled
              className="w-full py-2 px-4 bg-gray-300 text-white font-medium rounded-md flex items-center justify-center gap-2 cursor-not-allowed"
            >
              <Lock className="w-4 h-4" /> Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
