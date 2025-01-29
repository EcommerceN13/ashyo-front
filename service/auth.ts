"use client"

import { access } from "fs";
import { instance } from "../hooks/instance";
import { SignInType, SignUpType } from "../types/AuthType";
import { Dispatch, SetStateAction, useContext } from "react";
import toast from "react-hot-toast";

export const auth = (status: "sign_in" | "sign_up", data: SignInType | SignUpType, setToken: Dispatch<SetStateAction<string | null>>) => {

  if (status == "sign_in") {
    return instance().post(`/auth/login`, data).then(res => {
      setToken(res.data.accessToken);
      return res;
    }).catch(() => {
      toast.error("User not found!");
    })
  } else {
    return instance().post(`/auth/register`, data).then(res => {
      toast.success(`Welcome ${res.data.fullname}`);
      setToken(res.data.accessToken);
      return res;
    }).catch(() => {
      toast.error("Something is wrong!");
    })
  }
}
