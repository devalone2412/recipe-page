import omelette from '../assets/images/image-omelette.jpeg';
import RecipePreparation from "./RecipePreparation.jsx";
import RecipeSection from "./RecipeSection.jsx";
import {usePreparationItems} from "./hooks/usePreparationItems.js";
import useIngredients from "./hooks/useIngredients.js";
import useInstructions from "./hooks/useInstructions.js";

function RecipePost() {
    const preparationItems = usePreparationItems();
    const ingredients = useIngredients();
    const instructions = useInstructions();

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
                    {preparationItems.map(({name, content}, index) => (
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