import {useState} from "react";

export default function useIngredients() {
    const [ingredients, _] = useState([
        "2-3 large eggs",
        "Salt, to taste",
        "Pepper, to taste",
        "1 tablespoon of butter or oil",
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
    ]);

    return ingredients;
}