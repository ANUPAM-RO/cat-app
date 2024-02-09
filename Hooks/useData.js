import { useEffect, useState } from "react";

export default function useData() {
  const [catData, setCatData] = useState([]);

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
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=60",
        requestOptions
      );
      const data = await response.json();
      setCatData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCatData();
  }, []);

  return { catData };
}
