"use client";

import useCart from "@/lib/hooks/cart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="bg-blue-100 p-20 rounded-xl text-center">
        <p className="text-heading4-bold text-red-1">Successful Payment</p>
        <p className="p-7">Thank you for your purchase</p>
        <Link
          href="/"
          className="p-4 border text-base-bold hover:bg-black hover:text-white rounded-xl"
        >
          CONTINUE TO SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
