//this is our store 
import React from "react";
const MyContextStore2 = React.createContext();

export default MyContextStore2;

export const Provider2 = () => {
    <MyContextStore2.Provider>
        {/* do your code here */}
    </MyContextStore2.Provider>
}