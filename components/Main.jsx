"use client";
import SearchBar from "./SearchBar";
import useData from "@/Hooks/useData";

export default function Main() {
 const { catData } = useData()
  return (
      <main className="min-h-screen p-4">
          <p className="text-3xl text-center font-semibold text-teal-700 py-6 uppercase">Welcome to Show your Cat breeds</p>
          <SearchBar data={catData} />   
    </main>
  );
}
