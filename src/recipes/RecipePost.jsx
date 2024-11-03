import omelette from '../assets/images/image-omelette.jpeg';
import RecipePreparation from "./RecipePreparation.jsx";
import {useState} from "react";
import RecipeSection from "./RecipeSection.jsx";

function RecipePost() {
    const [items, setItems] = useState([
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

    const [ingredients, setIngredients] = useState([
        "2-3 large eggs",
        "Salt, to taste",
        "Pepper, to taste",
        "1 tablespoon of butter or oil",
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
    ]);

    const [instructions, setInstructions] = useState([
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

    const additionalNutritionSectionHeaderContent = <p>The table below show nutritional values per serving without the
        additional fillings.</p>;

    return (
        <article className="recipe-post">
            <header>
                <div>
                    <img src={omelette} alt="img-food"/>
                </div>
                <h1 className="recipe-post__name">Simple Omelette Recipe</h1>
                <p className="recipe-post__description">An easy and quick dish, perfect for any meal. This classic omelette combines between eggs cooked to
                    perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </header>

            <main>
                <RecipePreparation title="Preparation time">
                    {items.map(({name, content}, index) => (
                        <RecipePreparation.Item key={index} name={name}>
                            {content}
                        </RecipePreparation.Item>
                    ))}
                </RecipePreparation>
                <RecipeSection
                    title="Ingredients"
                    id="ingredient">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <p>{ingredient}</p>
                        </li>
                    ))}
                </RecipeSection>
                <hr/>
                <RecipeSection
                    title="Instruction"
                    id="instruction"
                    isOrderedList="true"
                    className="recipe-section__instruction">
                    {instructions.map(({instruction, step}, index) => (
                        <li key={index}>
                            <strong>{step}:</strong> {instruction}
                        </li>
                    ))}
                </RecipeSection>
                <hr/>
                <RecipeSection title="Nutrition"
                               id="nutrition"
                               additionalSectionHeaderContent={additionalNutritionSectionHeaderContent}
                               isSkipDefaultContent="true">
                    <div className="nutrition">
                        <div className="nutrition__header">
                            <p>Calories</p>
                            <p>Carbs</p>
                            <p>Protein</p>
                            <p>Fat</p>
                        </div>
                        <div className="nutrition__details">
                            <p>277kcal</p>
                            <p>0g</p>
                            <p>20g</p>
                            <p>22g</p>
                        </div>
                    </div>
                </RecipeSection>
            </main>

        </article>
    );
}

export default RecipePost;