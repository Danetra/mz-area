import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { filter } from "../../../../service/filterService";

const Filter = () => {
  return (
    <div className="filter pl-[50px] pr-[30px] py-[50px] md:block max-[430px]:hidden">
      <div className="w-[300px] rounded-[20px] overflow-hidden shadow-xl bg-white">
        <div className="px-5">
          <div className="font-bold text-l mb-2 mt-8 uppercase">Category</div>
          <div className="px-10">
            <div className="checkbox mb-2">
              <input id="all" type="checkbox" />
              <label
                htmlFor="all"
                className="ms-2 text-sm font-medium text-black dark:text-blac uppercase"
              >
                All
              </label>
            </div>
            <div className="checkbox mb-2">
              <input id="coffee" type="checkbox" />
              <label
                htmlFor="coffee"
                className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
              >
                Coffee
              </label>
            </div>
          </div>
          <hr className="mt-6" />
        </div>
        <div className="px-8">
          <div className="font-bold text-l mb-2 mt-8 uppercase">Price</div>
          <div>
            <div className="checkbox mb-2">
              <input
                className="w-full cursor-pointer bg-transparent "
                type="range"
                min={20000}
                max={50000}
              />
            </div>
          </div>
          <hr className="mt-6" />
        </div>
        <div className="px-8">
          <div className="font-bold text-l mb-2 mt-8 uppercase">Year</div>
          <div className="px-10">
            <div className="checkbox mb-2">
              <input id="all" value={`all`} type="checkbox" />
              <label
                htmlFor="all"
                className="ms-2 text-sm font-medium text-black dark:text-blac uppercase"
              >
                All
              </label>
            </div>
            <div className="checkbox mb-2">
              <input id="all" value={`2023`} type="checkbox" />
              <label
                htmlFor="all"
                className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
              >
                2023
              </label>
            </div>
            <div className="checkbox mb-2">
              <input id="all" value={`2022`} type="checkbox" />
              <label
                htmlFor="all"
                className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
              >
                2022
              </label>
            </div>
            <div className="checkbox mb-2">
              <input id="all" value={`2021`} type="checkbox" />
              <label
                htmlFor="all"
                className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
              >
                2021
              </label>
            </div>
          </div>
          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
