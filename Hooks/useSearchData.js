import { useEffect, useState } from "react";

export default function useSearchData(data) {
  const [searchData, setSearchData] = useState([]);
  const beerdsOptions = data?.map((catData) => {
    const obj = {};
    obj.value = catData?.id;
    catData?.breeds?.map((d) => {
      obj.label = d?.name;
    });
    return obj;
  });

  const handleSearch = (e) => {
    const term = e?.value;
    const filteredData = data.filter((item) =>
      item.id.toLowerCase().includes(term?.toLowerCase())
    );
    setSearchData(filteredData);
  };

  return { beerdsOptions, searchData, handleSearch };
}
