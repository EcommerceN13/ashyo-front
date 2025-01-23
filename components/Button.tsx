import { ButtonType } from '@/types/ButtonType'
import React from 'react'

const Button:React.FC<ButtonType> = ({icon, iconPosition, title, extraClass, type, onClick}) => {
    return (
        <button onClick={onClick} type={type} className={`${extraClass} flex items-center hover:opacity-90 duration-300 justify-center ${title && icon && "gap-[20px]"} py-[14px] px-[25px] rounded-[6px] bg-[#134E9B] text-white font-medium text-[16px] leading-[18.75px]`}>
            { icon && iconPosition == "left" && icon}
            <span>{title}</span>
            {icon && iconPosition == "right" && icon}
        </button>
    )
}

export default Button