import {useState} from "react";

export function usePreparationItems() {
    const [preparationItems, _] = useState([
        {
            name: "Total",
            content: "Approximately 10 minutes"
        },
        {
            name: "Preparation",
            content: "5 minutes"
        },
        {
            name: "Cooking",
            content: "5 minutes"
        }
    ]);

    return preparationItems;
}