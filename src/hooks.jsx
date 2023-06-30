import { createGlobalState } from "react-hooks-global-state";
import data from "./stays.json";

export const { useGlobalState, setGlobalState, getGlobalState } = createGlobalState({
    Data: data,
    Counter: 0,
    Active: false,
    Location: [
        { name: "Helsinki, Finland" },
        { name: "Turku, Finland" },
        { name: "Vaasa, Finland" },
        { name: "Oulu, Finland" },
    ],

})
