"use client";
import { Context } from "@/context/Context";
import { IMAGE_API } from "@/hooks/getEnv";
import { getCategories } from "@/service/getCategories";
import { CategoryType } from "@/types/CategoryType";
import { Skeleton } from "@heroui/skeleton";
// import { Context } from "";
// import { IMAGE_API } from "hooks/getEnv";
// import { getCategories } from "service/getCategories";
// import { CategoryType } from "types/CategoryType";
// import Skeleton from "@heroui/skeleton";
import Image from "next/image";
import React, { useContext, useState } from "react";

const CategoryNestedList = () => {
  const categories = getCategories();
  const {showCategory, setShowCategory} = useContext(Context);

  const [nestedChild, setNestedChild] = useState<CategoryType[]>([]);

  function showCategoryChildren(data: CategoryType) {
    setNestedChild(data?.subCategories || []);
  }

  return (
    <div
      id="menu_category"
      onClick={(e) =>
        (e.target as HTMLElement).id === "menu_category" &&
        setShowCategory(false)
      }
      className={showCategory ? "fixed inset-0 z-[999]" : ""}
    >
      <div
        className={`containers  px-0 w-full mx-auto right-0 left-0 duration-400 absolute top-0 inset-0 z-[99999] sm:top-[146px] ${
          showCategory ? "h-[100vh] sm:h-[570px]" : "h-0 opacity-0"
        } overflow-hidden flex bg-white shadow-md`}
      >
        <ul className="w-[52%] space-y-[15px] sm:space-y-0 sm:w-[35%] py-[13px] sm:py-[43px] px-[5px] sm:px-[32px] bg-[#EBEFF3]">
            {categories?.filter(e => e.parentCategoryId == null)?.map((item: CategoryType) => (
              <li
                onMouseEnter={() => showCategoryChildren(item)}
                key={item.id}
                className="flex cursor-pointer items-center text-[14px] sm:text-[16px] gap-[15px] py-[8px] sm:py-[12px] px-[10px] sm:pl-[40px]"
              >
                <Image
                  src={`${IMAGE_API}/${item.icon}`}
                  alt="Category icon"
                  width={24}
                  height={24}
                />
                <span className="text-[16px] hover:text-black leading-[18.75px] text-[#545D6A]">
                  {item.name}
                </span>
              </li>
            ))}
        </ul>
        <ul className="w-[48%] space-y-[23px] sm:space-y-0 sm:w-[65%] py-[13px] sm:py-[55px] px-[22px] sm:px-[73px] bg-white">
          {nestedChild.map((item: CategoryType) => (
            <li className="text-[14px] sm:text-[16px]" key={item.id}>
              {item?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryNestedList;