"use server";

import { FormValues } from "@/app/login/page";
import { UserData } from "@/app/register/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch("http://localhost:5000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
