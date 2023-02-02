import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "medium" | "small";
    variant?: "primary" | "secondary";
    isDisabled?: boolean;
}

export interface IconButtonProps extends ButtonProps {
    icon: string;
    filled?: boolean;
    position?: "left" | "right";
}