"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
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

export default Page;
