import { atom } from "recoil";
import { WineType, titleType } from "../types";

//title
export const titleState = atom<titleType>({
  key: "titleState",
  default: { country: "", wine: "" },
});

//wineList
export const wineListState = atom<WineType[]>({
  key: "wineListState",
  default: [],
});

//loading
export const loadingState = atom<boolean>({
  key: "loadingState",
  default: true,
});
