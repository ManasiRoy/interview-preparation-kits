import React, { useContext } from "react";
import ThemeContext from "./context";

const ButtonContent = () => {
    const theme = useContext(ThemeContext);
    return (
    <button style={{ backgroundColor: theme }}>{theme}</button>
    )
};
export default ButtonContent;