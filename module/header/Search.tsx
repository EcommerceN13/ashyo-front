import Button from "@/components/Button";
import Input from "@/components/Input";
import { SearchIcon } from "@/icons";
import React from "react";

const Search = () => {
  return (
    <form className="w-[518px] relative">
      <Input type="text" placeholder="What are you looking for?" />
      <Button
        extraClass="!py-[16px] !px-[20px] absolute top-0 right-0 h-full"
        iconPosition="left"
        icon={<SearchIcon />}
        type="submit"
      />
    </form>
  );
};

export default Search;
