import React from "react";
import LoginForm from "./components/LoginForm";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-2xl font-bold my-3">
        Welcome to NextAuth.js! Time to Sign In
      </h1>
      <LoginForm />
    </div>
  );
}

export default Home;
