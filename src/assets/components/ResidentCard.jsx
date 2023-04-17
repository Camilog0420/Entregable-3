import axios from "axios";
import React, { useEffect, useState } from "react";

const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500",
};

const ResidentCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();
  

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border border-[#8EFF8B]">
      <div className="relative">
        <img className="w-full" src={residentInfo?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/80 text-white p-1 px-2 flex gap-2 items-center rounded-sm">
          <div
            className={`w-3 h-3 ${
              residentsStatus[residentInfo?.status]
            } rounded-full`}
          ></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      <section>
        <h3 className="text-2xl text-white py-3 px-4">{residentInfo?.name}</h3>
        <ul>
          <li className="flex py-2">
            <span className="text-[#938686] pl-3 text-left">Species</span>
            <span className="px-[20%] text-white font-semibold">{residentInfo?.species}</span>
          </li>
          <li className="flex py-2">
            <span className="text-[#938686] pl-3 text-left">Origin</span>
            <span className="px-[23%] text-white font-semibold">{residentInfo?.origin.name}</span>
          </li>
          <li className="flex py-2 pb-8">
            <span className="text-[#938686] pl-3 text-left">Times appear</span>
            <span className="px-[7%] text-white font-semibold">{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
