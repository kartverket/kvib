import {IconButtonProps} from "./types";
import Button from "./Button";


const IconButton = (props: IconButtonProps) => {
    const position = props.position || "left";
    const filled = props.filled;
    return (
        <Button {...props}>
             {position === "right" && props.children}
                <span
                    className={`material-symbols-outlined ${
                        filled && "material-symbols-outlined--filled"
                    }`}
                >
          {props.icon}
        </span>
                {position === "left" && props.children}
        </Button>
    );
};

export default IconButton;