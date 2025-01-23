import React from "react";

export interface ButtonType {
    title ?: string;
    icon?: React.ReactNode;
    iconPosition: "left" | "right" | "center"
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    extraClass?: string;
    type: "button" | "submit";
}