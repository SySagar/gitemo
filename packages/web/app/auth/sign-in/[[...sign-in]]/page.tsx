'use client'
import { SignIn, useUser } from "@clerk/nextjs";

export default function Page() {

    const { user } = useUser();


  return (
    <div className="w-full min-h-screen flex items-center  px-4 flex-col bg-[#0F172A] justify-center item-center">
      <SignIn />
    </div>
  );
}
