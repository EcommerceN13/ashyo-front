import Button from "@/components/Button";
import Input from "@/components/Input";
import { SearchIcon } from "@/icons";
import React from "react";

const Search = () => {
  return (
    <form className="w-[518px] relative">
      <Input
        extraClass={` !py-[15px] !px-[21px] !text-[10px] sm:!py-[17px] sm:!px-[20px] sm:!text-[14px]`}
        type="text"
        placeholder="What are you looking for?"
      />
      <Button
        extrClass="!py-[12px] !px-[10px] sm:!py-[16px] sm:!px-[20px] absolute top-0 right-0 !h-full"
        iconPostion="left"
        icon={
          <SearchIcon classList="!w-[16px] !h-[16px] sm:!w-[20px] sm:!h-[20px]" />
        }
        type="submit"
      />
    </form>
  );
};
export default Search;
