"use client";
import { getCategories } from "@/service/getCategories";
import { CategoryType } from "@/types/CategoryType";
import { Skeleton } from "@heroui/skeleton";
import Link from "next/link";
import React from "react";

const HeaderCategory = () => {
  const {categories , isLoading } = getCategories();
  return (
    <nav className="hidden lg:flex containers items-center justify-between">
        {categories?.map((item: CategoryType) => (
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
