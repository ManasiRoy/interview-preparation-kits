import React, { useContext } from "react";
import ThemeContext from "./context";
import ButtonContent from "./ButtonContent";

const App = () => {
    return (
        <>
            <ThemeContext.Provider value="red">
                <ButtonContent />
            </ThemeContext.Provider>
        </>
    );
};
export default App;