import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import Logout from "../components/Logout";

async function HomePage() {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-2xl font-bold m-4">Welcome {session?.user?.name}!</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name || "User Image"}
        width={72}
        height={72}
        className="rounded-full"
      />
      <Logout />
    </div>
  );
}

export default HomePage;
