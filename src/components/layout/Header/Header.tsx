"use client";
import ProfileImage from "@/components/shared/ProfileImage/ProfileImage";
import SearchBar from "@/components/shared/SearchBar/SearchBar";
import { getOrdinal } from "@/utils/functions";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Image from "next/image";
import { useState } from "react";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  const today = new Date();

  const day = getOrdinal(today.getDate());
  const month = format(today, "MMM", { locale: enUS });

  return (
    <div className="flex w-full flex-col p-5 items-center gap-8 bg-white">
      <div className="relative w-[50px] h-[50px]">
        <Image
          loading="eager"
          className="object-contain"
          priority
          width={50}
          height={50}
          src="/product-hunt-vertical-logo-red.png"
          alt="Product Hunt logo"
        />
      </div>
      <div className="flex flex-row items-center w-full gap-4 max-w-[1000px] justify-between">
        <ProfileImage />
        <div className="flex flex-col py-[6px] px-[18px] rounded-lg font-medium text-[12px] bg-gray-100 items-center justify-center">
          <p className="font-medium text-gray-700">
            Today, {day} {month}
          </p>
        </div>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Header;
