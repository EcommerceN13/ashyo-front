import { ChangeEventHandler } from "react";

export interface InputType {
    type: "text" | "email" | "password";
    placeholder: string;
    extraClass?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}