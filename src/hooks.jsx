import { createGlobalState } from "react-hooks-global-state";
import data from "./stays.json";

export const { useGlobalState, setGlobalState, getGlobalState } = createGlobalState({
    data: data,
    counter: 0,
    active: false,
    searchActive: false,
    locationLists: [
        { name: "Helsinki, Finland" },
        { name: "Turku, Finland" },
        { name: "Vaasa, Finland" },
        { name: "Oulu, Finland" },
    ],

})
