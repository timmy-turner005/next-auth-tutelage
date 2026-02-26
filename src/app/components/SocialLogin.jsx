import React from "react";
import { doSocialLogin } from "../actions";

function SocialLogin() {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-red-400 text-white p-1 rounded-md m-1 text-lg cursor-pointer"
        type="submit"
        name="action"
        value="google"
      >
        Sign In With Google
      </button>
      <button
        className="bg-black text-white p-1 rounded-md m-1 text-lg cursor-pointer"
        type="submit"
        name="action"
        value="github"
      >
        Sign In With GitHub
      </button>
    </form>
  );
}

export default SocialLogin;
