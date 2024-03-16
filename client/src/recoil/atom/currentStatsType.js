import { atom } from "recoil";

export const currentStatsType = atom({
  key: "currentStatsType",
  default: "total",
});
