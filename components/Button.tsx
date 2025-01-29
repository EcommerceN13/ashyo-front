import { ButtonType } from '@/types/ButtonType'
import React from 'react'

const Button: React.FC<ButtonType> = ({icon, iconPosition, title, extraClass, type, onClick, isLoading, loading}) => {
    return (
        <button onClick={onClick} type={type} className={`${extraClass} flex items-center hover:opacity-90 duration-300 ${isLoading && "gap-[20px]"} justify-center ${title && icon && "sm:gap-[20px]"} sm:py-[14px] sm:px-[25px] rounded-[6px] bg-[#134E9B] text-white font-medium sm:!text-[16px] leading-[18.75px]`}>
            {icon && iconPosition == "left" && icon}
            {isLoading && loading}
            <span>{title}</span>
            {icon && iconPosition == "right" && icon}
        </button>
    )
}

export default Button
