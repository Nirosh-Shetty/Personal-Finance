import { atom } from "recoil";

export const toggleAuthAtom = atom({
  key: "toggleAuthAtom",
  default: "signIn",
});
