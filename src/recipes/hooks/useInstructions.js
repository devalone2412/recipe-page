import {useState} from "react";

export default function useInstructions() {
    const [instructions, _] = useState([
            {
                "step": "Beat the eggs",
                "instruction": "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
            },
            {
                "step": "Heat the pan",
                "instruction": "Place a non-stick frying pan over medium heat. Add the butter or oil."
            },
            {
                "step": "Cook the omelette",
                "instruction": "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
            },
            {
                "step": "Add fillings (optional)",
                "instruction": "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
            },
            {
                "step": "Fold and serve",
                "instruction": "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slice it onto a plate."
            },
            {
                "step": "Enjoy",
                "instruction": "Serve hot, with additional salt and pepper if needed."
            }
        ]
    );

    return instructions;
}