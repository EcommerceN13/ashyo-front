"use client";
import { getCategories } from "@/service/getCategories";
import { CategoryType } from "@/types/CategoryType";
import { Skeleton } from "@heroui/skeleton";
import Link from "next/link";
import React from "react";

const HeaderCategory = () => {
  const categoryList: CategoryType[] = getCategories();
  return (
    <nav className="hidden lg:flex containers items-center justify-between">
      {categoryList.length > 0 ? (
        categoryList.map((item: CategoryType) => (
          <Link
            className="text-[18px] hover:text-black duration-300 leading-[21px] text-[#545D6A]"
            key={item.id}
            href={"/"}
          >
            {item.name}
          </Link>
        ))
      ) : (
        <Skeleton className="h-5 w-full rounded-lg" />
      )}
    </nav>
  );
};

export default HeaderCategory;
