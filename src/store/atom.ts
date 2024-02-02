import { atom } from "recoil";
import { WineType, titleType } from "../types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "pageState",
  storage: sessionStorage,
});
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

//pageName
export const pageNameState = atom<string>({
  key: "pageNameState",
  default: "list",
  effects: [persistAtom],
});

//page
export const pageState = atom<number>({
  key: "pageState",
  default: 1,
  effects: [persistAtom],
});
