import React from "react";

export default function SilverHeader({ bgImage, name1, name2, span }) {
  return (
    <div
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-end"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/30 flex items-end">
        
        <div className="
          w-full
          px-4 sm:px-6 md:px-10
          pb-6 sm:pb-10 md:pb-16
          text-white
        ">
          
          <p className="
            text-[16px] sm:text-[22px] md:text-[28px]
          ">
            {name1}
          </p>

          <p className="
            font-bold font-serif
            text-[32px] sm:text-[60px] md:text-[70px] lg:text-[110px]
            leading-tight
            text-[#EFA35A]
          ">
            {name2}{" "}
            <span className="text-white">{span}</span>
          </p>

        </div>
      </div>
    </div>
  );
}
