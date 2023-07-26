import { createGlobalState } from "react-hooks-global-state";
import data from "./stays.json";

export const { useGlobalState, setGlobalState, getGlobalState } = createGlobalState({
    data: data,
    adultCount: 0,
    childrenCount: 0,
    active: false,
    searchActive: false,
    total: 0,
    search:"",
    locationLists: [
        { name: "Helsinki, Finland" },
        { name: "Turku, Finland" },
        { name: "Vaasa, Finland" },
        { name: "Oulu, Finland" },
    ],

})
