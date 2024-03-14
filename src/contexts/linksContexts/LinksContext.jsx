"use client";
import { useContext, createContext, useState } from "react";

// save create context in constant
const LinksContext = createContext();

// make custom hook instead of use context hook
export const useLinks = () => useContext(LinksContext);

// make main function LinksProvider use children in param
export default function LinksProvider({ children }) {
  const [links] = useState([
    { id: 1, itemContent: "الرئيسية🛖", url: "/" },
    { id: 2, itemContent: "الترم الاول📖", url: "/part1" },
    { id: 3, itemContent: "الترم الثاني📖", url: "/part2" },
    { id: 6, itemContent: "الاختبار النهائي📑", url: "/final" },
  ]);

  return (
    <LinksContext.Provider value={{ links }}>{children}</LinksContext.Provider>
  );
}
