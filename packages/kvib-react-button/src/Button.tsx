import {ButtonProps} from "./types";


const Button = (props: ButtonProps) => {
    const size = props.size || "xs";
    const variant = props.variant || "primary";

    return (
        <button
            disabled={props.disabled}
            className={`kvib-button--${variant}` + ` kvib-button--${size}` + ` ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;