"user client";

import Select from "react-select";
import Box from "./Box";
import useSearchData from "@/Hooks/useSearchData";

const SearchBar = ({ data }) => {
 const {beerdsOptions, searchData, handleSearch} = useSearchData(data)
  return (
    <>
      <Select
        className="basic-single md:mx-20 lg:mx-26"
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
      {!!searchData?.length || !!data.length ? (
        <div className="flex flex-wrap justify-center gap-4">
          {!searchData.length
            ? data?.map((data) => (
                <div key={data.id} className="mb-5">
                  <Box imageUrl={data.url} breedsData={data.breeds[0]} />
                </div>
              ))
            : searchData?.map((data) => (
                <div key={data.id} className="mb-5">
                  <Box imageUrl={data.url} breedsData={data.breeds[0]} />
                </div>
              ))}
        </div>
      ) : (
        <p className="flex justify-center items-center">
          <img src="loading.png" alt="" className="w-24 h-24" />
        </p>
      )}
    </>
  );
};
export default SearchBar;
