"use client";

import React from "react";
import Dashboard from "../app/Dashboard/page";
import { useRouter } from "next/navigation";

const page = () => {
  const token = localStorage.getItem("token");

  const router = useRouter();

  if (!token) {
    router.push("/Login");
  }

  if (token) {
    router.push("/Dashboard");
  }

  return <div></div>;
};

export default page;
