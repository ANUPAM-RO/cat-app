"use client";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function Main() {
 const [catData , setCatData] = useState([])

  const fetchCatData = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10",
        requestOptions
      );
        const data = await response.json();
        setCatData(data)
    } catch (error) {
      console.log(error);
    }
  };
    useEffect(() => {
     fetchCatData()
    }, [])
    
  return (
    <main className="min-h-screen p-4">
          <SearchBar data={catData} />   
    </main>
  );
}
