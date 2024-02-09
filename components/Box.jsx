"use client";

import Link from "next/link";
import React from "react";

const Box = ({imageUrl,  breedsData  }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg h-48 w-full object-cover" src={imageUrl} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {breedsData?.name} {breedsData?.alt_names ? "or" : ""} {breedsData?.alt_names}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
            {breedsData?.description}
          </p>
          <div className="flex justify-between pb-2">
            <p className="text-fuchsia-800 font-semibold">
              Origin: {breedsData?.origin}
            </p>
            <p className="text-teal-700 font-semibold">
              Intelligence: {breedsData?.intelligence}
            </p>
          </div>

          <Link
            href={breedsData?.wikipedia_url || "link"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;
