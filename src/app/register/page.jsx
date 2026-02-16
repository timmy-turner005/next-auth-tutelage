import React from "react";
import Link from "next/link";
import RegistrationForm from "../components/RegistrationForm"



export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <RegistrationForm />
      <p className="my-3">
        Already have an account?
        <Link className="mx-2 underline" href="/">
          Login
        </Link>
      </p>
    </div>
  );
}
