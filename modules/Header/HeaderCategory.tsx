"use client";
import { getCategories } from "@/service/getCategories";
import { CategoryType } from "@/types/CategoryType";
import { Skeleton } from "@heroui/skeleton";
import Link from "next/link";
import React from "react";

const HeaderCategory = () => {
  const categoryList: CategoryType[] = getCategories();
  console.log(categoryList)
  return (
    <nav className="hidden lg:flex containers items-center justify-between">
        {categoryList?.map((item: CategoryType) => (
          <Link
            className="text-[18px] hover:text-black duration-300 leading-[21px] text-[#545D6A]"
            key={item.id}
            href={"/"}
          >
            {item.name}
          </Link>
        ))}
    </nav>
  );
};

export default HeaderCategory;
