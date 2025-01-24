import React from "react";

export interface ButtonType {
    icon?: React.ReactNode | null;
    iconPosition?: "left" | "right" | "center"
    title ?: string;
    extraClass?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: "button" | "submit";
}