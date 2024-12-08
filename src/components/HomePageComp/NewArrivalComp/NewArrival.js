import React from "react";
import psimage from "../../../assets/ps5.png";
import womenimage from "../../../assets/women.png";
import speakers from "../../../assets/speaker1.png";
import perfumeimage from "../../../assets/perfume.png";

const NewArrival = () => {
  return (
    <div className="mt-8 lg:mx-24">
      <div className="flex flex-col items-start ml-5">
        <div className="flex gap-3">
          <div className="bg-red-500 text-red-500 text-sm font-semibold px-1 py-1 rounded-md inline-block">
            a
          </div>
          <h1 className="text-red-500 font-semibold">Featured</h1>
        </div>
        <h1 className="text-3xl font-bold mt-2 text-center sm:text-left">
          New Arrival
        </h1>
      </div>

      <div className="m-5 flex flex-col gap-3 lg:flex-row">
        <img
          src={psimage}
          alt="playstation"
          className="h-[400px] md:h-[500px] lg:w-[570px] lg:h-[600px] object-fill"
          loading="lazy"
        />

        <div className="flex flex-col gap-3">
          <img
            src={womenimage}
            alt="women"
            className="h-[400px] md:h-[500px] lg:w-[570px] lg:h-[302px] object-fill"
            loading="lazy"
          />

          <div className="flex flex-col lg:flex-row gap-3 sm:flex-row">
            <img
              src={speakers}
              alt="speaker"
              className="h-[400px] md:h-[500px] lg:w-[270px] lg:h-[284px] object-fill"
              loading="lazy"
            />
            <img
              src={perfumeimage}
              alt="perfume"
              className="h-[400px] md:h-[500px] lg:w-[270px] lg:h-[284px] object-fill"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
