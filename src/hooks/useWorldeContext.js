//React imports
import { useContext } from "react";
//context
import { WordleContext } from "../components/Game";

export const useWorldeContext = () => {
    const context = useContext(WordleContext);
    return context;
}