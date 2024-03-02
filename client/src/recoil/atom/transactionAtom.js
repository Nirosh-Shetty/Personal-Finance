import { atom } from "recoil";

export const transactionAtom = atom({
  key: "transactionAtom",
  default: {
    type: "",
    time: "",
    amount: "",
    category: "",
    note: "",
  },
});

//check export defaout
