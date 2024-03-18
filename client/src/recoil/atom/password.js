import { atom } from "recoil";

export const password = atom({
  key: "password",
  default: {
    password: "",
    confirmPassword: "",
    email: "",
  },
});
