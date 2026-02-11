import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-2xl font-bold my-3">
        Welcome to NextAuth.js! Time to Sign In
      </h1>
      <LoginForm />
      <p className="my-3">
        Dont have an account?
        <Link className="mx-2 underline" href="/register"> Register</Link>
      </p>
    </div>
  );
}

export default Home;
