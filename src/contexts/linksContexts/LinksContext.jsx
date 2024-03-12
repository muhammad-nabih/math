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
    { id: 1, itemContent: "📒الفصل الاول", url: "/part1" },
    { id: 2, itemContent: "📖الفصل الثاني", url: "/part2" },
    { id: 3, itemContent: "🧾الفصل الثالث", url: "/part3" },
    { id: 4, itemContent: "📑الفصل الرابع", url: "/part4" },
  ]);

  return (
    <LinksContext.Provider value={{ links }}>{children}</LinksContext.Provider>
  );
}
