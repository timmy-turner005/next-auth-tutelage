import React from "react";
import { doLogout } from "../actions";

function Logout() {
  return (
    <form action={doLogout}>
      <button
        className="bg-blue-400 text-white p-1 rounded m-3 cursor-pointer"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
}

export default Logout;
