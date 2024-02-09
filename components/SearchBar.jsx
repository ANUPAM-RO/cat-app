import { useEffect, useState } from "react";
import Select from "react-select";
import Box from "./Box";

const SearchBar = ({ data }) => {
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

  console.log( searchData);
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={beerdsOptions[0]}
        isLoading={beerdsOptions.length ? false : true}
        isClearable={true}
        isSearchable={true}
        onChange={handleSearch}
        name="color"
        options={beerdsOptions}
        placeholder="Select your cat breeds..."
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
      {!!searchData?.length &&
        searchData?.map((data) => (
          <div key={data.id} className="mb-5">
            <Box data={data} />
          </div>
        ))}
    </>
  );
};
export default SearchBar;
